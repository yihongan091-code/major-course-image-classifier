const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

module.exports = async function handler(request, response) {
  setCorsHeaders(request, response);

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "POST") {
    response.status(405).json({ error: "仅支持 POST 请求" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(503).json({ error: "服务端尚未配置 OPENAI_API_KEY" });
    return;
  }

  if (process.env.APP_ACCESS_TOKEN) {
    const provided = String(request.headers.authorization || "").replace(/^Bearer\s+/i, "");
    if (provided !== process.env.APP_ACCESS_TOKEN) {
      response.status(401).json({ error: "访问口令不正确" });
      return;
    }
  }

  const { major, courses, fileName, image } = request.body || {};
  if (!major || !Array.isArray(courses) || !courses.length || !isImageDataUrl(image)) {
    response.status(400).json({ error: "专业、候选课程或图片格式不正确" });
    return;
  }

  const candidateCourses = courses.slice(0, 160).map(String);
  const prompt = [
    "你是大学课程图片识别助手，工作方式类似搜题软件。",
    `用户专业：${major}`,
    `候选课程：${candidateCourses.join("、")}`,
    `文件名：${fileName || "未命名图片"}`,
    "请仔细识别图片中的印刷文字、手写内容、数学公式、代码、图表、实验装置和专业术语。",
    "course 必须严格从候选课程中选择；无法判断时填写“未识别课程”。",
    "chapter 写最可能的章节或知识点，questionType 写题目/内容类型，ocrText 提取关键可见文字。",
    "不要解答题目，不要编造图片里不存在的内容。"
  ].join("\n");

  try {
    const openaiResponse = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_VISION_MODEL || "gpt-5.4-mini",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: image, detail: "high" } }
            ]
          }
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "course_image_analysis",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                course: { type: "string" },
                chapter: { type: "string" },
                questionType: { type: "string" },
                ocrText: { type: "string" },
                summary: { type: "string" },
                keywords: { type: "array", items: { type: "string" } },
                confidence: { type: "integer", minimum: 0, maximum: 100 }
              },
              required: ["course", "chapter", "questionType", "ocrText", "summary", "keywords", "confidence"]
            }
          }
        },
        max_completion_tokens: 1200
      })
    });

    const result = await openaiResponse.json();
    if (!openaiResponse.ok) {
      response.status(openaiResponse.status).json({
        error: result?.error?.message || "视觉模型调用失败"
      });
      return;
    }

    const content = result?.choices?.[0]?.message?.content;
    if (!content) {
      response.status(502).json({ error: "视觉模型未返回识别内容" });
      return;
    }

    response.status(200).json(JSON.parse(content));
  } catch (error) {
    response.status(500).json({ error: "识别服务暂时不可用" });
  }
};

function isImageDataUrl(value) {
  return typeof value === "string" && /^data:image\/(jpeg|png|webp);base64,/i.test(value);
}

function setCorsHeaders(request, response) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
  const origin = request.headers.origin || "";
  response.setHeader("Access-Control-Allow-Origin", allowedOrigin === "*" ? "*" : origin === allowedOrigin ? origin : allowedOrigin);
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.setHeader("Vary", "Origin");
}
