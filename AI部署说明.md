# AI 搜题式识别部署

## 1. 准备 OpenAI API Key

在 OpenAI API 平台创建 API Key。密钥只能放在 Vercel 环境变量中，不要填写到网页或提交到 GitHub。

## 2. 部署到 Vercel

1. 登录 Vercel，选择 `Add New Project`。
2. 导入 GitHub 仓库 `major-course-image-classifier`。
3. Framework Preset 选择 `Other`，保持项目根目录不变。
4. 添加环境变量：
   - `OPENAI_API_KEY`：你的 OpenAI API Key。
   - `OPENAI_VISION_MODEL`：`gpt-5.4-mini`。
   - `ALLOWED_ORIGIN`：`https://yihongan091-code.github.io`。
   - `APP_ACCESS_TOKEN`：可选，自定义一个网页访问口令。
5. 点击 Deploy。

## 3. 网页设置

部署完成后，在网页的“AI 看图理解”区域填写：

```text
https://你的应用.vercel.app/api/vision-course
```

如果配置了 `APP_ACCESS_TOKEN`，把同一个值填入“后端访问口令”。然后打开“启用 AI”。

## 返回内容

识别接口会返回课程、章节/知识点、题型、OCR 文字、内容摘要、关键词和置信度。接口失败时网页会自动回退到本地课程关键词识别。
