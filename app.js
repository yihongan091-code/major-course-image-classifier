const majorCatalog = {
  "计算机科学与技术": {
    "程序设计基础": ["程序设计", "c语言", "java", "python", "变量", "循环", "数组", "函数", "指针", "面向对象", "代码"],
    "数据结构": ["数据结构", "链表", "栈", "队列", "树", "二叉树", "图", "哈希", "排序", "查找", "复杂度"],
    "操作系统": ["操作系统", "进程", "线程", "死锁", "调度", "内存管理", "虚拟内存", "文件系统", "linux"],
    "计算机组成原理": ["计算机组成", "cpu", "指令", "寄存器", "cache", "总线", "存储器", "流水线", "alu"],
    "数据库系统": ["数据库", "sql", "关系模型", "范式", "事务", "索引", "查询", "mysql", "er图"],
    "计算机网络": ["计算机网络", "tcp", "ip", "http", "路由", "交换机", "协议", "dns", "拥塞控制"],
    "编译原理": ["编译", "词法分析", "语法分析", "语义分析", "中间代码", "自动机", "文法"],
    "软件工程": ["软件工程", "需求分析", "uml", "用例图", "架构", "测试用例", "敏捷", "项目管理"]
  },
  "软件工程": {
    "软件需求分析": ["需求", "需求分析", "用户故事", "用例", "业务流程", "原型", "需求规格"],
    "软件设计与体系结构": ["体系结构", "架构", "设计模式", "分层", "模块", "接口", "微服务"],
    "软件测试": ["软件测试", "测试用例", "黑盒", "白盒", "单元测试", "集成测试", "覆盖率", "缺陷"],
    "项目管理": ["项目管理", "进度", "风险", "成本", "甘特图", "scrum", "敏捷", "迭代"],
    "数据库应用开发": ["数据库", "sql", "表", "索引", "事务", "后端", "接口", "orm"],
    "移动应用开发": ["移动开发", "android", "ios", "flutter", "小程序", "界面", "组件"]
  },
  "人工智能": {
    "机器学习": ["机器学习", "监督学习", "回归", "分类", "聚类", "决策树", "svm", "随机森林", "过拟合"],
    "深度学习": ["深度学习", "神经网络", "反向传播", "cnn", "rnn", "transformer", "pytorch", "tensorflow"],
    "自然语言处理": ["自然语言", "nlp", "分词", "词向量", "bert", "大模型", "文本分类", "机器翻译"],
    "计算机视觉": ["计算机视觉", "图像识别", "目标检测", "卷积", "yolo", "opencv", "分割"],
    "知识表示与推理": ["知识图谱", "推理", "本体", "谓词逻辑", "规则", "专家系统"],
    "概率统计基础": ["概率", "贝叶斯", "分布", "期望", "方差", "极大似然", "统计"]
  },
  "数据科学与大数据": {
    "数据分析": ["数据分析", "清洗", "缺失值", "可视化", "描述统计", "指标", "报表"],
    "数据挖掘": ["数据挖掘", "关联规则", "聚类", "分类", "推荐", "特征工程", "模型评估"],
    "大数据技术": ["大数据", "hadoop", "spark", "hive", "hdfs", "mapreduce", "flink"],
    "数据库与数据仓库": ["数据仓库", "etl", "olap", "事实表", "维度表", "sql", "建模"],
    "统计学习": ["统计学习", "回归", "假设检验", "置信区间", "方差分析", "抽样"]
  },
  "金融学": {
    "金融学原理": ["金融", "货币", "利率", "银行", "金融市场", "中央银行", "信用"],
    "证券投资学": ["证券", "股票", "债券", "基金", "投资组合", "收益率", "k线", "估值"],
    "公司金融": ["公司金融", "资本结构", "现金流", "npv", "irr", "股利", "融资"],
    "金融风险管理": ["风险管理", "var", "信用风险", "市场风险", "衍生品", "对冲"],
    "国际金融": ["国际金融", "汇率", "外汇", "国际收支", "汇率制度", "资本流动"],
    "计量经济学": ["计量", "回归", "ols", "异方差", "自相关", "面板数据", "stata"]
  },
  "会计学": {
    "基础会计": ["会计", "借方", "贷方", "分录", "会计科目", "凭证", "账簿"],
    "财务会计": ["财务会计", "资产", "负债", "所有者权益", "收入", "费用", "利润"],
    "成本会计": ["成本会计", "制造费用", "直接材料", "直接人工", "成本核算", "品种法"],
    "财务管理": ["财务管理", "现金流", "预算", "资本成本", "净现值", "投资决策"],
    "审计学": ["审计", "内部控制", "审计证据", "重要性", "风险评估", "审计报告"],
    "税法": ["税法", "增值税", "所得税", "纳税", "税率", "抵扣", "发票"]
  },
  "临床医学": {
    "人体解剖学": ["解剖", "骨骼", "肌肉", "神经", "血管", "器官", "系统"],
    "生理学": ["生理", "心率", "血压", "呼吸", "神经调节", "内分泌", "稳态"],
    "病理学": ["病理", "炎症", "肿瘤", "坏死", "水肿", "病变", "切片"],
    "诊断学": ["诊断", "体格检查", "病史", "症状", "体征", "心电图", "影像"],
    "内科学": ["内科学", "高血压", "糖尿病", "肺炎", "心衰", "消化", "肾病"],
    "外科学": ["外科学", "手术", "创伤", "感染", "麻醉", "缝合", "围手术期"]
  },
  "护理学": {
    "基础护理学": ["基础护理", "无菌", "生命体征", "输液", "注射", "病床", "护理记录"],
    "内科护理学": ["内科护理", "高血压", "糖尿病", "呼吸", "循环", "消化"],
    "外科护理学": ["外科护理", "术前", "术后", "伤口", "引流", "换药", "感染"],
    "急危重症护理": ["急救", "危重症", "心肺复苏", "抢救", "监护", "休克"],
    "妇产科护理": ["妇产科", "妊娠", "分娩", "产褥", "新生儿", "胎儿"],
    "儿科护理": ["儿科", "儿童", "疫苗", "生长发育", "小儿", "喂养"]
  },
  "法学": {
    "法理学": ["法理", "法律规范", "权利", "义务", "法律关系", "法治"],
    "宪法学": ["宪法", "国家机构", "公民权利", "基本权利", "监督"],
    "民法学": ["民法", "物权", "债权", "合同", "侵权", "人格权", "婚姻"],
    "刑法学": ["刑法", "犯罪", "刑罚", "故意", "过失", "共同犯罪", "量刑"],
    "行政法": ["行政法", "行政行为", "行政处罚", "行政许可", "复议", "诉讼"],
    "民事诉讼法": ["民事诉讼", "管辖", "证据", "审判", "执行", "上诉"]
  },
  "机械工程": {
    "机械制图": ["机械制图", "三视图", "剖视图", "公差", "尺寸", "装配图", "零件图"],
    "理论力学": ["理论力学", "受力分析", "平衡", "力矩", "运动学", "动力学"],
    "材料力学": ["材料力学", "应力", "应变", "弯矩", "剪力", "扭转", "强度"],
    "机械原理": ["机械原理", "机构", "连杆", "凸轮", "齿轮", "自由度"],
    "机械设计": ["机械设计", "轴", "轴承", "齿轮", "螺栓", "疲劳", "传动"],
    "数控技术": ["数控", "机床", "刀具", "g代码", "加工", "cad", "cam"]
  },
  "土木工程": {
    "工程制图": ["工程制图", "平面图", "剖面图", "尺寸", "标高", "cad"],
    "材料力学": ["材料力学", "应力", "应变", "弯矩", "剪力", "强度"],
    "结构力学": ["结构力学", "桁架", "梁", "刚架", "位移法", "力法"],
    "混凝土结构": ["混凝土", "配筋", "受弯", "受剪", "裂缝", "承载力"],
    "钢结构": ["钢结构", "焊缝", "螺栓", "稳定", "截面", "节点"],
    "土力学与地基基础": ["土力学", "地基", "基础", "沉降", "抗剪强度", "孔隙比"]
  },
  "电气工程": {
    "电路原理": ["电路", "电压", "电流", "电阻", "基尔霍夫", "交流", "功率"],
    "模拟电子技术": ["模拟电路", "二极管", "三极管", "运放", "放大器", "滤波"],
    "数字电子技术": ["数字电路", "逻辑门", "触发器", "计数器", "编码器", "时序"],
    "电机学": ["电机", "变压器", "感应电机", "同步电机", "绕组", "转矩"],
    "电力系统分析": ["电力系统", "潮流", "短路", "输电", "配电", "发电"],
    "继电保护": ["继电保护", "保护装置", "故障", "差动", "距离保护", "整定"]
  },
  "建筑学": {
    "建筑设计": ["建筑设计", "平面", "立面", "剖面", "空间", "方案", "功能分区"],
    "建筑构造": ["建筑构造", "墙体", "楼板", "屋顶", "门窗", "节点"],
    "建筑史": ["建筑史", "古典", "现代主义", "哥特", "巴洛克", "中国建筑"],
    "城市设计": ["城市设计", "街区", "广场", "交通", "空间形态", "更新"],
    "建筑物理": ["建筑物理", "采光", "热工", "声学", "通风", "节能"]
  },
  "艺术设计": {
    "设计素描": ["素描", "结构", "明暗", "透视", "构图", "线条"],
    "色彩构成": ["色彩", "色相", "明度", "纯度", "配色", "冷暖"],
    "平面构成": ["平面构成", "点线面", "重复", "渐变", "节奏", "版式"],
    "视觉传达设计": ["视觉传达", "海报", "标志", "品牌", "字体", "排版"],
    "UI设计": ["ui", "界面", "交互", "组件", "原型", "按钮", "设计系统"],
    "产品设计": ["产品设计", "造型", "人机工程", "模型", "材料", "渲染"]
  }
};

const expandedMajorCatalog = {
  "计算机科学与技术": {
    "离散数学": ["离散数学", "集合", "关系", "图论", "命题逻辑", "谓词逻辑", "布尔代数"],
    "算法设计与分析": ["算法设计", "贪心", "动态规划", "分治", "回溯", "复杂度", "最短路径"],
    "信息安全基础": ["信息安全", "加密", "密码学", "身份认证", "访问控制", "安全协议"],
    "Web开发技术": ["web", "html", "css", "javascript", "前端", "后端", "http", "api"],
    "人工智能导论": ["人工智能", "搜索", "知识表示", "机器学习", "智能体", "专家系统"]
  },
  "软件工程": {
    "人机交互": ["人机交互", "可用性", "交互设计", "用户研究", "原型", "界面评估"],
    "软件质量保证": ["质量保证", "代码审查", "度量", "缺陷管理", "持续集成", "质量模型"],
    "软件过程与管理": ["软件过程", "cmmi", "瀑布模型", "敏捷开发", "配置管理", "版本控制"],
    "云原生软件开发": ["云原生", "容器", "docker", "kubernetes", "微服务", "devops"],
    "前端工程化": ["前端工程", "组件化", "打包", "vite", "webpack", "状态管理", "路由"]
  },
  "人工智能": {
    "强化学习": ["强化学习", "奖励", "策略", "q学习", "马尔可夫", "agent"],
    "模式识别": ["模式识别", "特征提取", "分类器", "贝叶斯", "支持向量机"],
    "智能机器人": ["机器人", "路径规划", "slam", "传感器", "运动控制"],
    "数据标注与模型评估": ["数据标注", "混淆矩阵", "准确率", "召回率", "f1", "auc"],
    "生成式人工智能": ["生成式", "大语言模型", "提示词", "扩散模型", "多模态", "rag"]
  },
  "数据科学与大数据": {
    "Python数据处理": ["pandas", "numpy", "python", "数据处理", "dataframe", "清洗"],
    "商务智能": ["商务智能", "bi", "仪表盘", "power bi", "tableau", "指标体系"],
    "机器学习应用": ["机器学习", "建模", "训练集", "测试集", "特征", "预测"],
    "数据治理": ["数据治理", "数据质量", "元数据", "主数据", "数据标准"],
    "实时计算": ["实时计算", "流处理", "flink", "kafka", "窗口", "延迟"]
  },
  "网络安全": {
    "网络安全导论": ["网络安全", "安全威胁", "攻击", "防御", "风险", "安全模型"],
    "密码学": ["密码学", "对称加密", "非对称加密", "rsa", "aes", "哈希", "数字签名"],
    "Web安全": ["web安全", "xss", "csrf", "sql注入", "漏洞", "渗透测试"],
    "网络攻防": ["攻防", "渗透", "扫描", "漏洞利用", "提权", "应急响应"],
    "安全运维": ["安全运维", "日志", "告警", "入侵检测", "防火墙", "态势感知"],
    "逆向工程": ["逆向", "反汇编", "调试", "脱壳", "恶意代码", "二进制"]
  },
  "电子信息工程": {
    "电路分析": ["电路分析", "电压", "电流", "电阻", "基尔霍夫", "节点电压"],
    "模拟电子技术": ["模拟电子", "运放", "二极管", "三极管", "放大电路"],
    "数字电子技术": ["数字电子", "逻辑门", "触发器", "计数器", "时序逻辑"],
    "信号与系统": ["信号与系统", "傅里叶", "拉普拉斯", "卷积", "频域"],
    "数字信号处理": ["数字信号处理", "dsp", "采样", "滤波器", "z变换", "fft"],
    "单片机原理": ["单片机", "mcu", "中断", "定时器", "串口", "嵌入式"],
    "传感器技术": ["传感器", "检测", "信号调理", "温度", "压力", "位移"]
  },
  "通信工程": {
    "通信原理": ["通信原理", "调制", "解调", "信道", "噪声", "误码率"],
    "移动通信": ["移动通信", "蜂窝", "4g", "5g", "基站", "切换"],
    "光纤通信": ["光纤", "光通信", "光源", "光检测", "色散", "衰减"],
    "信息论与编码": ["信息论", "熵", "信源编码", "信道编码", "纠错码"],
    "天线与电波传播": ["天线", "电波", "方向图", "增益", "传播"],
    "交换技术": ["交换", "路由", "软交换", "通信网", "信令"]
  },
  "自动化": {
    "自动控制原理": ["自动控制", "传递函数", "反馈", "稳定性", "根轨迹"],
    "现代控制理论": ["状态空间", "能控性", "能观性", "状态反馈", "最优控制"],
    "过程控制": ["过程控制", "pid", "液位", "温度控制", "控制阀"],
    "PLC控制技术": ["plc", "梯形图", "继电器", "触点", "西门子"],
    "机器人控制": ["机器人", "运动学", "轨迹规划", "伺服", "机械臂"],
    "检测技术与仪表": ["检测", "仪表", "传感器", "测量误差", "变送器"]
  },
  "材料科学与工程": {
    "材料科学基础": ["材料科学", "晶体", "缺陷", "相图", "扩散", "凝固"],
    "金属材料学": ["金属材料", "钢", "铝合金", "热处理", "组织", "性能"],
    "高分子材料": ["高分子", "聚合", "塑料", "橡胶", "玻璃化温度"],
    "无机非金属材料": ["陶瓷", "玻璃", "水泥", "烧结", "无机非金属"],
    "材料力学性能": ["力学性能", "拉伸", "硬度", "疲劳", "断裂"],
    "材料分析测试": ["xrd", "sem", "tem", "能谱", "热分析", "显微组织"]
  },
  "化学工程与工艺": {
    "化工原理": ["化工原理", "传热", "传质", "流体流动", "干燥", "吸收"],
    "化学反应工程": ["反应工程", "反应器", "动力学", "停留时间", "转化率"],
    "化工热力学": ["化工热力学", "相平衡", "逸度", "焓", "熵"],
    "分离工程": ["分离工程", "精馏", "萃取", "吸附", "膜分离"],
    "化工工艺学": ["化工工艺", "流程图", "工艺路线", "物料衡算"],
    "化工安全": ["化工安全", "危险源", "防爆", "泄漏", "hazop"]
  },
  "环境科学与工程": {
    "环境工程原理": ["环境工程", "污染物", "传质", "沉淀", "吸附"],
    "水污染控制工程": ["水污染", "污水处理", "cod", "bod", "活性污泥"],
    "大气污染控制工程": ["大气污染", "除尘", "脱硫", "脱硝", "颗粒物"],
    "固体废物处理": ["固废", "垃圾", "填埋", "焚烧", "资源化"],
    "环境监测": ["环境监测", "采样", "监测指标", "水质", "空气质量"],
    "环境影响评价": ["环评", "环境影响", "评价", "预测", "生态影响"]
  },
  "数学与应用数学": {
    "数学分析": ["数学分析", "极限", "连续", "导数", "积分", "级数"],
    "高等代数": ["高等代数", "矩阵", "行列式", "线性空间", "特征值"],
    "解析几何": ["解析几何", "向量", "平面", "曲面", "二次曲面"],
    "常微分方程": ["常微分", "微分方程", "初值问题", "稳定性"],
    "概率论": ["概率论", "随机变量", "分布", "期望", "方差"],
    "数理统计": ["数理统计", "估计", "假设检验", "置信区间", "样本"],
    "复变函数": ["复变函数", "解析函数", "留数", "积分定理"],
    "实变函数": ["实变函数", "测度", "可测函数", "积分"]
  },
  "物理学": {
    "力学": ["力学", "牛顿", "动量", "角动量", "刚体", "振动"],
    "热学": ["热学", "温度", "热力学", "熵", "气体", "热机"],
    "电磁学": ["电磁学", "电场", "磁场", "麦克斯韦", "电势"],
    "光学": ["光学", "干涉", "衍射", "偏振", "透镜", "光程"],
    "原子物理": ["原子物理", "能级", "光谱", "玻尔", "量子"],
    "量子力学": ["量子力学", "波函数", "薛定谔", "算符", "本征值"],
    "固体物理": ["固体物理", "晶格", "能带", "声子", "半导体"]
  },
  "化学": {
    "无机化学": ["无机化学", "元素", "配合物", "酸碱", "氧化还原"],
    "有机化学": ["有机化学", "烷烃", "烯烃", "芳香族", "反应机理"],
    "分析化学": ["分析化学", "滴定", "误差", "光谱", "色谱"],
    "物理化学": ["物理化学", "热力学", "动力学", "电化学", "相平衡"],
    "结构化学": ["结构化学", "分子轨道", "晶体结构", "对称性"],
    "仪器分析": ["仪器分析", "质谱", "核磁", "红外", "紫外", "色谱"]
  },
  "生物科学": {
    "普通生物学": ["普通生物", "生命", "细胞", "遗传", "进化"],
    "细胞生物学": ["细胞", "细胞膜", "细胞器", "有丝分裂", "信号转导"],
    "遗传学": ["遗传", "基因", "染色体", "孟德尔", "突变"],
    "分子生物学": ["分子生物", "dna", "rna", "转录", "翻译", "pcr"],
    "生物化学": ["生物化学", "蛋白质", "酶", "代谢", "糖酵解"],
    "生态学": ["生态", "种群", "群落", "生态系统", "能量流动"],
    "微生物学": ["微生物", "细菌", "真菌", "病毒", "培养基"]
  },
  "地理信息科学": {
    "自然地理学": ["自然地理", "地貌", "气候", "水文", "土壤"],
    "人文地理学": ["人文地理", "人口", "城市", "区域", "经济地理"],
    "地图学": ["地图学", "投影", "比例尺", "符号", "制图"],
    "遥感原理": ["遥感", "影像", "波段", "反射率", "解译"],
    "GIS原理": ["gis", "空间数据", "拓扑", "空间分析", "缓冲区"],
    "空间数据库": ["空间数据库", "postgis", "矢量", "栅格", "索引"],
    "测量学": ["测量", "水准", "导线", "坐标", "误差"]
  },
  "口腔医学": {
    "口腔解剖生理学": ["口腔解剖", "牙体", "牙列", "咬合", "颌骨"],
    "牙体牙髓病学": ["牙体", "牙髓", "龋齿", "根管", "充填"],
    "牙周病学": ["牙周", "牙龈", "牙周袋", "菌斑", "洁治"],
    "口腔修复学": ["修复", "义齿", "冠", "桥", "嵌体"],
    "口腔正畸学": ["正畸", "错颌", "矫治器", "牙移动"],
    "口腔颌面外科学": ["颌面", "拔牙", "创伤", "肿瘤", "手术"]
  },
  "药学": {
    "药理学": ["药理", "受体", "药效", "剂量", "不良反应"],
    "药物化学": ["药物化学", "构效关系", "先导化合物", "合成"],
    "药剂学": ["药剂", "片剂", "胶囊", "注射剂", "缓释"],
    "药物分析": ["药物分析", "含量测定", "杂质", "hplc", "鉴别"],
    "生药学": ["生药", "中药", "鉴定", "有效成分"],
    "临床药学": ["临床药学", "用药", "处方", "药物相互作用"]
  },
  "经济学": {
    "微观经济学": ["微观经济", "供给", "需求", "弹性", "消费者", "生产者"],
    "宏观经济学": ["宏观经济", "gdp", "通胀", "失业", "货币政策"],
    "政治经济学": ["政治经济", "资本", "价值", "剩余价值", "生产关系"],
    "计量经济学": ["计量经济", "回归", "ols", "模型", "显著性"],
    "产业经济学": ["产业经济", "市场结构", "垄断", "寡头", "竞争"],
    "发展经济学": ["发展经济", "贫困", "增长", "制度", "发展中国家"]
  },
  "工商管理": {
    "管理学原理": ["管理学", "计划", "组织", "领导", "控制", "决策"],
    "组织行为学": ["组织行为", "激励", "团队", "沟通", "领导力"],
    "战略管理": ["战略", "swot", "竞争优势", "商业模式", "五力模型"],
    "人力资源管理": ["人力资源", "招聘", "培训", "绩效", "薪酬"],
    "运营管理": ["运营管理", "流程", "质量", "库存", "产能"],
    "供应链管理": ["供应链", "采购", "物流", "库存", "配送"],
    "创业管理": ["创业", "商业计划", "融资", "创新", "团队"]
  },
  "市场营销": {
    "市场营销学": ["市场营销", "4p", "产品", "价格", "渠道", "促销"],
    "消费者行为学": ["消费者行为", "动机", "态度", "购买决策"],
    "市场调研": ["市场调研", "问卷", "访谈", "抽样", "数据分析"],
    "品牌管理": ["品牌", "定位", "品牌资产", "传播", "识别"],
    "广告学": ["广告", "创意", "媒介", "文案", "投放"],
    "数字营销": ["数字营销", "社交媒体", "seo", "sem", "直播", "短视频"]
  },
  "教育学": {
    "教育学原理": ["教育学", "教育目的", "教育制度", "教育功能"],
    "课程与教学论": ["课程论", "教学论", "教学目标", "教学方法"],
    "教育心理学": ["教育心理", "学习动机", "认知发展", "迁移"],
    "教育研究方法": ["教育研究", "问卷", "访谈", "实验", "文献"],
    "教育评价": ["教育评价", "测验", "形成性评价", "终结性评价"],
    "班级管理": ["班级管理", "班主任", "课堂纪律", "德育"]
  },
  "心理学": {
    "普通心理学": ["普通心理", "感知觉", "记忆", "思维", "情绪"],
    "发展心理学": ["发展心理", "儿童", "青少年", "认知发展", "皮亚杰"],
    "社会心理学": ["社会心理", "态度", "群体", "从众", "偏见"],
    "实验心理学": ["实验心理", "实验设计", "反应时", "变量", "效度"],
    "心理统计": ["心理统计", "相关", "t检验", "方差分析", "spss"],
    "心理测量": ["心理测量", "信度", "效度", "量表", "常模"],
    "咨询心理学": ["咨询", "心理咨询", "来访者", "倾听", "干预"]
  },
  "新闻传播学": {
    "新闻学概论": ["新闻学", "新闻价值", "新闻真实", "新闻伦理"],
    "传播学概论": ["传播学", "传播模式", "受众", "议程设置"],
    "新闻采访与写作": ["采访", "新闻写作", "导语", "消息", "通讯"],
    "编辑出版学": ["编辑", "出版", "校对", "版面", "选题"],
    "新媒体传播": ["新媒体", "社交媒体", "短视频", "平台", "流量"],
    "广告与公共关系": ["广告", "公关", "品牌传播", "危机公关"]
  },
  "汉语言文学": {
    "现代汉语": ["现代汉语", "语音", "词汇", "语法", "修辞"],
    "古代汉语": ["古代汉语", "文言", "训诂", "音韵", "句读"],
    "中国古代文学": ["古代文学", "诗经", "唐诗", "宋词", "明清小说"],
    "中国现当代文学": ["现当代文学", "鲁迅", "小说", "新诗", "文学史"],
    "外国文学": ["外国文学", "莎士比亚", "现实主义", "现代主义"],
    "文学理论": ["文学理论", "叙事", "文本", "审美", "批评"]
  },
  "外国语言文学": {
    "综合英语": ["综合英语", "reading", "text", "vocabulary", "grammar"],
    "英语听力": ["listening", "听力", "dictation", "conversation"],
    "英语口语": ["口语", "speaking", "presentation", "dialogue"],
    "英语写作": ["writing", "essay", "paragraph", "thesis", "argument"],
    "翻译理论与实践": ["翻译", "translation", "口译", "笔译", "等值"],
    "语言学概论": ["语言学", "phonetics", "syntax", "semantics", "pragmatics"],
    "英美文学": ["英美文学", "novel", "poetry", "shakespeare", "modernism"]
  },
  "历史学": {
    "中国古代史": ["中国古代史", "秦汉", "隋唐", "宋元", "明清"],
    "中国近现代史": ["近现代史", "鸦片战争", "辛亥革命", "五四", "抗战"],
    "世界古代史": ["世界古代史", "希腊", "罗马", "埃及", "文明"],
    "世界近现代史": ["世界近现代史", "工业革命", "一战", "二战", "冷战"],
    "史学概论": ["史学", "史料", "历史解释", "历史方法"],
    "考古学概论": ["考古", "遗址", "器物", "地层", "年代"]
  },
  "哲学": {
    "马克思主义哲学": ["马克思主义哲学", "唯物论", "辩证法", "实践"],
    "中国哲学史": ["中国哲学", "孔子", "老子", "孟子", "朱熹"],
    "西方哲学史": ["西方哲学", "柏拉图", "亚里士多德", "康德", "黑格尔"],
    "伦理学": ["伦理", "道德", "义务", "功利", "美德"],
    "逻辑学": ["逻辑", "命题", "推理", "三段论", "谬误"],
    "美学": ["美学", "审美", "艺术", "美感", "崇高"]
  },
  "社会学": {
    "社会学概论": ["社会学", "社会结构", "社会互动", "社会制度"],
    "社会调查方法": ["社会调查", "问卷", "访谈", "抽样", "田野"],
    "社会统计学": ["社会统计", "相关", "回归", "spss", "数据分析"],
    "社会分层与流动": ["社会分层", "阶层", "流动", "不平等"],
    "城市社会学": ["城市社会", "社区", "城市化", "空间"],
    "社会工作概论": ["社会工作", "个案", "小组", "社区工作"]
  },
  "政治学与行政学": {
    "政治学原理": ["政治学", "权力", "国家", "政党", "民主"],
    "行政管理学": ["行政管理", "行政组织", "行政效率", "公务员"],
    "公共政策": ["公共政策", "政策过程", "政策评估", "议程"],
    "国际关系": ["国际关系", "国家利益", "外交", "国际体系"],
    "公共部门人力资源": ["公共部门", "人力资源", "绩效", "考核"],
    "地方政府治理": ["地方政府", "治理", "基层", "公共服务"]
  },
  "音乐与表演": {
    "基本乐理": ["乐理", "音程", "和弦", "调式", "节奏"],
    "视唱练耳": ["视唱", "练耳", "节拍", "听辨", "旋律"],
    "和声学": ["和声", "四部和声", "终止式", "转位"],
    "曲式分析": ["曲式", "乐段", "奏鸣曲", "变奏", "回旋"],
    "声乐表演": ["声乐", "发声", "共鸣", "歌曲", "演唱"],
    "戏剧表演": ["表演", "台词", "角色", "舞台", "剧本"]
  },
  "体育学": {
    "运动解剖学": ["运动解剖", "骨骼", "肌肉", "关节", "动作"],
    "运动生理学": ["运动生理", "心肺", "能量代谢", "疲劳"],
    "体育心理学": ["体育心理", "动机", "焦虑", "注意", "团队"],
    "运动训练学": ["运动训练", "负荷", "周期", "体能", "专项"],
    "学校体育学": ["学校体育", "体育教学", "课程标准", "课堂"],
    "篮球": ["篮球", "运球", "投篮", "战术", "防守"],
    "足球": ["足球", "传球", "射门", "阵型", "战术"]
  },
  "农学": {
    "植物学": ["植物学", "根", "茎", "叶", "花", "种子"],
    "作物栽培学": ["作物栽培", "播种", "施肥", "灌溉", "产量"],
    "作物育种学": ["育种", "杂交", "选择", "品种", "遗传"],
    "土壤肥料学": ["土壤", "肥料", "养分", "氮磷钾", "酸碱度"],
    "植物保护学": ["植物保护", "病虫害", "农药", "防治"],
    "农业生态学": ["农业生态", "生态系统", "可持续", "循环农业"]
  },
  "统计学": {
    "概率论": ["概率", "随机变量", "分布", "期望", "方差"],
    "数理统计": ["数理统计", "估计", "检验", "置信区间"],
    "回归分析": ["回归", "线性回归", "残差", "多重共线性"],
    "多元统计分析": ["多元统计", "主成分", "因子分析", "聚类"],
    "时间序列分析": ["时间序列", "arima", "平稳", "自相关"],
    "抽样调查": ["抽样", "样本量", "分层抽样", "整群抽样"],
    "统计软件": ["spss", "r语言", "stata", "sas", "数据分析"]
  },
  "电子商务": {
    "电子商务概论": ["电子商务", "平台", "交易", "商业模式"],
    "网络营销": ["网络营销", "seo", "sem", "社交媒体", "直播"],
    "电商运营": ["运营", "店铺", "转化率", "流量", "用户增长"],
    "供应链与物流": ["供应链", "物流", "仓储", "配送", "库存"],
    "客户关系管理": ["crm", "客户关系", "会员", "留存", "复购"],
    "商务数据分析": ["数据分析", "gmv", "客单价", "转化", "漏斗"]
  },
  "物流管理": {
    "物流学": ["物流", "运输", "仓储", "配送", "包装"],
    "供应链管理": ["供应链", "采购", "库存", "协同", "牛鞭效应"],
    "运输管理": ["运输", "路线", "车辆调度", "运费"],
    "仓储管理": ["仓储", "库位", "入库", "出库", "盘点"],
    "物流信息系统": ["物流信息", "wms", "tms", "条码", "rfid"],
    "国际物流": ["国际物流", "报关", "海运", "空运", " Incoterms"]
  },
  "旅游管理": {
    "旅游学概论": ["旅游学", "旅游资源", "游客", "目的地"],
    "旅游规划": ["旅游规划", "景区", "线路", "资源评价"],
    "酒店管理": ["酒店", "客房", "前厅", "餐饮", "服务质量"],
    "旅行社管理": ["旅行社", "导游", "团队", "行程"],
    "旅游市场营销": ["旅游营销", "品牌", "客源", "推广"],
    "会展管理": ["会展", "展览", "会议", "活动策划"]
  },
  "公共管理": {
    "公共管理学": ["公共管理", "公共组织", "公共价值", "治理"],
    "公共政策分析": ["公共政策", "政策分析", "政策评估"],
    "行政法与行政诉讼": ["行政法", "行政诉讼", "行政行为"],
    "公共财政": ["公共财政", "预算", "税收", "支出"],
    "社会保障": ["社会保障", "养老", "医疗保险", "救助"],
    "城市管理": ["城市管理", "社区", "公共服务", "应急"]
  },
  "国际经济与贸易": {
    "国际贸易理论": ["国际贸易", "比较优势", "贸易保护", "关税"],
    "国际贸易实务": ["贸易实务", "信用证", "合同", "报关", "单证"],
    "国际结算": ["国际结算", "汇票", "托收", "信用证"],
    "国际商法": ["国际商法", "合同", "仲裁", "贸易争端"],
    "跨境电商": ["跨境电商", "平台", "物流", "海外仓"],
    "外贸函电": ["外贸函电", "询盘", "报价", "订单", "英文邮件"]
  },
  "财务管理": {
    "财务管理基础": ["财务管理", "资金", "现金流", "财务目标"],
    "公司理财": ["公司理财", "资本结构", "股利", "融资"],
    "投资学": ["投资", "证券", "组合", "风险收益"],
    "财务分析": ["财务分析", "比率", "偿债", "盈利", "营运"],
    "管理会计": ["管理会计", "预算", "责任中心", "差异分析"],
    "内部控制": ["内部控制", "风险", "流程", "授权", "审计"]
  },
  "信息管理与信息系统": {
    "管理信息系统": ["管理信息系统", "mis", "信息系统", "业务流程"],
    "数据库原理": ["数据库", "sql", "关系模型", "事务", "索引"],
    "系统分析与设计": ["系统分析", "系统设计", "用例", "流程图"],
    "企业资源计划": ["erp", "企业资源", "供应链", "财务模块"],
    "信息资源管理": ["信息资源", "知识管理", "文档", "信息组织"],
    "商务智能": ["商务智能", "bi", "报表", "数据仓库"]
  },
  "物联网工程": {
    "物联网导论": ["物联网", "感知层", "网络层", "应用层"],
    "嵌入式系统": ["嵌入式", "单片机", "arm", "中断", "驱动"],
    "传感器技术": ["传感器", "采集", "温湿度", "压力", "检测"],
    "无线传感网络": ["无线传感", "zigbee", "蓝牙", "wifi", "节点"],
    "RFID技术": ["rfid", "射频识别", "标签", "读写器"],
    "物联网安全": ["物联网安全", "认证", "加密", "设备安全"]
  },
  "数字媒体技术": {
    "数字图像处理": ["图像处理", "像素", "滤波", "边缘检测", "直方图"],
    "计算机图形学": ["图形学", "渲染", "建模", "光照", "纹理"],
    "动画原理": ["动画", "关键帧", "运动规律", "分镜"],
    "游戏开发": ["游戏开发", "unity", "引擎", "碰撞", "脚本"],
    "交互设计": ["交互设计", "用户体验", "原型", "可用性"],
    "影视后期": ["后期", "剪辑", "调色", "特效", "合成"]
  },
  "医学影像学": {
    "影像解剖学": ["影像解剖", "ct", "mri", "断层", "结构"],
    "医学影像诊断学": ["影像诊断", "病灶", "阴影", "强化", "报告"],
    "放射物理与防护": ["放射物理", "剂量", "防护", "x线"],
    "超声诊断学": ["超声", "声像图", "探头", "多普勒"],
    "核医学": ["核医学", "放射性", "显像", "pet", "spect"],
    "医学影像设备学": ["影像设备", "ct机", "磁共振", "成像"]
  },
  "中医学": {
    "中医基础理论": ["中医基础", "阴阳", "五行", "藏象", "气血津液"],
    "中医诊断学": ["中医诊断", "望闻问切", "舌诊", "脉诊", "辨证"],
    "中药学": ["中药", "性味", "归经", "功效", "配伍"],
    "方剂学": ["方剂", "君臣佐使", "汤剂", "配伍"],
    "针灸学": ["针灸", "经络", "穴位", "针刺", "艾灸"],
    "中医内科学": ["中医内科", "证型", "治法", "辨证论治"]
  },
  "食品科学与工程": {
    "食品化学": ["食品化学", "蛋白质", "脂肪", "碳水", "风味"],
    "食品微生物学": ["食品微生物", "菌落", "发酵", "灭菌"],
    "食品工艺学": ["食品工艺", "加工", "杀菌", "干燥", "冷冻"],
    "食品安全": ["食品安全", "危害", "haccp", "添加剂", "检测"],
    "食品营养学": ["营养", "维生素", "矿物质", "膳食"],
    "食品工程原理": ["食品工程", "传热", "传质", "流变", "设备"]
  },
  "法医学": {
    "法医病理学": ["法医病理", "死亡原因", "尸检", "损伤"],
    "法医物证学": ["物证", "dna", "血痕", "亲子鉴定"],
    "法医毒理学": ["毒理", "毒物", "中毒", "检材"],
    "法医临床学": ["法医临床", "伤残", "损伤程度"],
    "刑事科学技术": ["刑事技术", "痕迹", "指纹", "现场勘查"]
  }
};

mergeCatalog(majorCatalog, expandedMajorCatalog);

function mergeCatalog(target, source) {
  for (const [major, courses] of Object.entries(source)) {
    target[major] = { ...(target[major] || {}), ...courses };
  }
}

const state = {
  major: localStorage.getItem("selectedMajor") || "",
  items: [],
  cameraFacing: "environment",
  cameraStream: null,
  installPrompt: null
};

const majorSelect = document.querySelector("#majorSelect");
const currentMajorName = document.querySelector("#currentMajorName");
const coursePoolCount = document.querySelector("#coursePoolCount");
const customCourses = document.querySelector("#customCourses");
const imageInput = document.querySelector("#imageInput");
const cameraFallbackInput = document.querySelector("#cameraFallbackInput");
const hintText = document.querySelector("#hintText");
const useVisualHints = document.querySelector("#useVisualHints");
const groupByCourse = document.querySelector("#groupByCourse");
const useAiVision = document.querySelector("#useAiVision");
const aiEndpoint = document.querySelector("#aiEndpoint");
const aiKey = document.querySelector("#aiKey");
const aiStatus = document.querySelector("#aiStatus");
const results = document.querySelector("#results");
const template = document.querySelector("#cardTemplate");
const emptyState = document.querySelector("#emptyState");
const exportBtn = document.querySelector("#exportBtn");
const clearBtn = document.querySelector("#clearBtn");
const installBtn = document.querySelector("#installBtn");
const installHint = document.querySelector("#installHint");
const totalCount = document.querySelector("#totalCount");
const courseCount = document.querySelector("#courseCount");
const avgConfidence = document.querySelector("#avgConfidence");
const cameraBtn = document.querySelector("#cameraBtn");
const cameraDialog = document.querySelector("#cameraDialog");
const closeCameraBtn = document.querySelector("#closeCameraBtn");
const switchCameraBtn = document.querySelector("#switchCameraBtn");
const captureBtn = document.querySelector("#captureBtn");
const cameraPreview = document.querySelector("#cameraPreview");
const cameraCanvas = document.querySelector("#cameraCanvas");
const cameraStatus = document.querySelector("#cameraStatus");

init();

function init() {
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "请选择你的专业";
  placeholder.selected = !state.major;
  majorSelect.appendChild(placeholder);

  for (const major of Object.keys(majorCatalog)) {
    const option = document.createElement("option");
    option.value = major;
    option.textContent = major;
    option.selected = major === state.major;
    majorSelect.appendChild(option);
  }

  majorSelect.addEventListener("change", () => {
    state.major = majorSelect.value;
    if (state.major) localStorage.setItem("selectedMajor", state.major);
    else localStorage.removeItem("selectedMajor");
    customCourses.value = localStorage.getItem(getCustomCourseKey()) || "";
    reclassifyAll();
    render();
  });

  customCourses.value = localStorage.getItem(getCustomCourseKey()) || "";
  customCourses.addEventListener("input", () => {
    localStorage.setItem(getCustomCourseKey(), customCourses.value);
    reclassifyAll();
    render();
  });

  imageInput.addEventListener("change", (event) => addFiles(Array.from(event.target.files || []), "上传图片"));
  cameraFallbackInput.addEventListener("change", (event) => addFiles(Array.from(event.target.files || []), "系统相机"));
  hintText.addEventListener("input", () => {
    reclassifyAll();
    render();
  });
  useVisualHints.addEventListener("change", () => {
    reclassifyAll();
    render();
  });
  groupByCourse.addEventListener("change", render);
  useAiVision.checked = localStorage.getItem("useAiVision") === "true";
  aiEndpoint.value = localStorage.getItem("aiEndpoint") || "";
  aiKey.value = localStorage.getItem("aiKey") || "";
  useAiVision.addEventListener("change", saveAiSettings);
  aiEndpoint.addEventListener("input", saveAiSettings);
  aiKey.addEventListener("input", saveAiSettings);
  clearBtn.addEventListener("click", clearAll);
  exportBtn.addEventListener("click", exportResults);
  cameraBtn.addEventListener("click", openCamera);
  closeCameraBtn.addEventListener("click", closeCamera);
  switchCameraBtn.addEventListener("click", switchCamera);
  captureBtn.addEventListener("click", capturePhoto);

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.installPrompt = event;
    installHint.hidden = false;
  });

  installBtn.addEventListener("click", async () => {
    if (state.installPrompt) {
      state.installPrompt.prompt();
      await state.installPrompt.userChoice;
      state.installPrompt = null;
      installHint.hidden = true;
    } else {
      installHint.hidden = !installHint.hidden;
    }
  });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  render();
}

function saveAiSettings() {
  localStorage.setItem("useAiVision", String(useAiVision.checked));
  localStorage.setItem("aiEndpoint", aiEndpoint.value.trim());
  localStorage.setItem("aiKey", aiKey.value);
  renderAiStatus();
}

async function addFiles(files, source) {
  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const dataUrl = await readAsDataUrl(file);
    await addImage(dataUrl, file.name || source);
  }
  imageInput.value = "";
  cameraFallbackInput.value = "";
}

async function addImage(dataUrl, name) {
  if (!state.major) {
    alert("请先选择专业，再导入图片。");
    return;
  }
  const visual = await sampleImage(dataUrl);
  const detectedText = await detectImageText(dataUrl);
  const aiUnderstanding = await understandImageWithAi(dataUrl, name);
  const classification = classifyCourse(name, hintText.value, visual, detectedText, aiUnderstanding);
  state.items.push({
    id: crypto.randomUUID(),
    name,
    dataUrl,
    visual,
    detectedText,
    aiUnderstanding,
    ...classification
  });
  render();
}

function reclassifyAll() {
  state.items = state.items.map((item) => ({
    ...item,
    ...classifyCourse(item.name, hintText.value, item.visual, item.detectedText, item.aiUnderstanding)
  }));
}

function classifyCourse(fileName, hint, visual, detectedText = "", aiUnderstanding = null) {
  if (!state.major) {
    return {
      major: "未选择专业",
      course: "未识别课程",
      confidence: 0,
      reason: "请先选择专业。"
    };
  }

  const courses = getCurrentCourses();
  const aiText = aiUnderstanding
    ? `${aiUnderstanding.course || ""} ${aiUnderstanding.summary || ""} ${(aiUnderstanding.keywords || []).join(" ")}`
    : "";
  const text = normalize(`${fileName} ${hint} ${detectedText} ${aiText}`);
  const scores = new Map(Object.keys(courses).map((course) => [course, 0]));
  const reasons = new Map(Object.keys(courses).map((course) => [course, []]));

  for (const [course, keywords] of Object.entries(courses)) {
    for (const keyword of keywords) {
      if (text.includes(normalize(keyword))) {
        scores.set(course, scores.get(course) + keyword.length + 4);
        reasons.get(course).push(`关键词“${keyword}”`);
      }
    }
  }

  if (useVisualHints.checked && visual) {
    applyVisualSignals(scores, reasons, visual);
  }

  let bestCourse = Object.keys(courses)[0] || "未识别课程";
  let bestScore = -1;
  for (const [course, score] of scores.entries()) {
    if (score > bestScore) {
      bestCourse = course;
      bestScore = score;
    }
  }

  if (bestScore <= 0) {
    return {
      major: state.major,
      course: "未识别课程",
      confidence: visual && useVisualHints.checked ? 36 : 18,
      reason: aiUnderstanding
        ? "AI 已分析图片，但未匹配到当前专业课程库。"
        : detectedText
          ? "已读取图片文字，但暂无明确课程关键词。"
          : "暂无明确课程关键词，请补充图片文字或手动选择课程。"
    };
  }

  if (aiUnderstanding?.course && normalize(aiUnderstanding.course).includes(normalize(bestCourse))) {
    bestScore += 4;
  }

  return {
    major: state.major,
    course: bestCourse,
    confidence: Math.min(98, Math.round((aiUnderstanding ? 58 : 45) + bestScore * 5)),
    reason: aiUnderstanding
      ? `AI理解：${aiUnderstanding.summary || "已分析图片内容"}`
      : [...new Set(reasons.get(bestCourse))].slice(0, 3).join("、") || "图片视觉线索匹配。"
  };
}

async function understandImageWithAi(dataUrl, fileName) {
  renderAiStatus("AI 分析中...");
  if (!useAiVision.checked || !aiEndpoint.value.trim()) {
    renderAiStatus();
    return null;
  }

  try {
    const payload = {
      major: state.major,
      courses: Object.keys(getCurrentCourses()),
      fileName,
      image: dataUrl,
      instruction: "请理解图片中的教材、课件、题目或课堂内容，并判断它最可能属于当前专业的哪一门课程。"
    };

    const response = await fetch(aiEndpoint.value.trim(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(aiKey.value ? { Authorization: `Bearer ${aiKey.value}` } : {})
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`AI接口返回 ${response.status}`);
    const data = await response.json();
    renderAiStatus("AI 已分析");
    return normalizeAiResult(data);
  } catch (error) {
    renderAiStatus("AI 分析失败，已使用本地识别");
    return null;
  }
}

function normalizeAiResult(data) {
  return {
    course: data.course || data.课程 || "",
    summary: data.summary || data.内容概述 || data.reason || data.判断依据 || "",
    keywords: Array.isArray(data.keywords || data.关键词)
      ? data.keywords || data.关键词
      : String(data.keywords || data.关键词 || "").split(/[\s,，、;；]+/).filter(Boolean)
  };
}

function renderAiStatus(message) {
  if (message) {
    aiStatus.textContent = message;
    return;
  }
  if (!useAiVision.checked) {
    aiStatus.textContent = "未启用时使用本地识别";
  } else if (!aiEndpoint.value.trim()) {
    aiStatus.textContent = "请填写 AI 接口地址";
  } else {
    aiStatus.textContent = "AI 已启用";
  }
}

async function detectImageText(dataUrl) {
  if (!("TextDetector" in window)) return "";

  try {
    const image = new Image();
    image.src = dataUrl;
    await image.decode();
    const detector = new TextDetector();
    const results = await detector.detect(image);
    return results.map((item) => item.rawValue || "").join(" ");
  } catch (error) {
    return "";
  }
}

function applyVisualSignals(scores, reasons, visual) {
  const courseNames = [...scores.keys()];
  const add = (needle, score, reason) => {
    for (const course of courseNames) {
      if (course.includes(needle)) {
        scores.set(course, scores.get(course) + score);
        reasons.get(course).push(reason);
      }
    }
  };

  if (visual.edgeDensity > 0.42 && visual.brightness > 165) {
    add("制图", 4, "线条与留白较多");
    add("结构", 3, "线条与留白较多");
    add("力学", 3, "线条与留白较多");
    add("数学", 3, "线条与留白较多");
  }
  if (visual.greenRatio > 0.3) {
    add("生理", 2, "绿色区域较明显");
    add("护理", 2, "绿色区域较明显");
    add("环境", 2, "绿色区域较明显");
  }
  if (visual.blueRatio > 0.3) {
    add("网络", 2, "蓝色区域较明显");
    add("金融", 2, "蓝色区域较明显");
    add("系统", 2, "蓝色区域较明显");
  }
  if (visual.saturation > 0.34) {
    add("设计", 4, "色彩饱和度较高");
    add("色彩", 4, "色彩饱和度较高");
  }
}

async function openCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    cameraFallbackInput.click();
    return;
  }

  cameraDialog.showModal();
  await startCamera();
}

async function startCamera() {
  stopCamera();
  cameraStatus.textContent = "正在请求相机权限...";
  cameraStatus.hidden = false;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: state.cameraFacing } },
      audio: false
    });
    state.cameraStream = stream;
    cameraPreview.srcObject = stream;
    cameraStatus.hidden = true;
  } catch (error) {
    cameraStatus.textContent = "当前环境不能直接打开实时相机，请使用右侧 + 调用系统相机。";
  }
}

function closeCamera() {
  stopCamera();
  cameraDialog.close();
}

async function switchCamera() {
  state.cameraFacing = state.cameraFacing === "environment" ? "user" : "environment";
  await startCamera();
}

function capturePhoto() {
  if (!state.cameraStream || !cameraPreview.videoWidth) {
    cameraFallbackInput.click();
    return;
  }

  cameraCanvas.width = cameraPreview.videoWidth;
  cameraCanvas.height = cameraPreview.videoHeight;
  const ctx = cameraCanvas.getContext("2d");
  ctx.drawImage(cameraPreview, 0, 0, cameraCanvas.width, cameraCanvas.height);
  const dataUrl = cameraCanvas.toDataURL("image/jpeg", 0.92);
  addImage(dataUrl, `拍照-${new Date().toLocaleString("zh-CN")}.jpg`);
  closeCamera();
}

function stopCamera() {
  if (!state.cameraStream) return;
  for (const track of state.cameraStream.getTracks()) track.stop();
  state.cameraStream = null;
  cameraPreview.srcObject = null;
}

function clearAll() {
  state.items = [];
  hintText.value = "";
  render();
}

function exportResults() {
  const rows = state.items.map((item) => ({
    文件名: item.name,
    专业: item.major,
    课程: item.course,
    置信度: `${item.confidence}%`,
    判断依据: item.reason
  }));
  const blob = new Blob([JSON.stringify(rows, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `课程识别结果-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function render() {
  renderAiStatus();
  const courses = Object.keys(getCurrentCourses());
  currentMajorName.textContent = state.major || "未选择专业";
  coursePoolCount.textContent = `${courses.length} 门课程可识别`;
  results.innerHTML = "";
  emptyState.hidden = state.items.length > 0;

  const groups = groupByCourse.checked ? groupItems(state.items) : new Map([["全部图片", state.items]]);
  for (const [course, items] of groups.entries()) {
    const section = document.createElement("section");
    section.className = "subject-section";
    const heading = document.createElement("h2");
    heading.className = "subject-heading";
    heading.innerHTML = `<span>${course}</span><small>${items.length} 张</small>`;
    const grid = document.createElement("div");
    grid.className = "card-grid";
    for (const item of items) grid.appendChild(renderCard(item, courses));
    section.append(heading, grid);
    results.appendChild(section);
  }

  updateSummary();
}

function renderCard(item, courses) {
  const card = template.content.firstElementChild.cloneNode(true);
  const image = card.querySelector("img");
  const title = card.querySelector("h3");
  const confidence = card.querySelector(".confidence");
  const select = card.querySelector("select");
  const reason = card.querySelector(".reason");
  const remove = card.querySelector(".remove-card");

  image.src = item.dataUrl;
  image.alt = item.name;
  title.textContent = item.name;
  confidence.textContent = `${item.confidence}%`;
  reason.textContent = `${item.major} · ${item.reason}`;

  for (const course of ["未识别课程", ...courses]) {
    const option = document.createElement("option");
    option.value = course;
    option.textContent = course;
    option.selected = course === item.course;
    select.appendChild(option);
  }

  select.addEventListener("change", () => {
    item.course = select.value;
    item.confidence = 99;
    item.reason = "手动调整。";
    render();
  });

  remove.addEventListener("click", () => {
    state.items = state.items.filter((candidate) => candidate.id !== item.id);
    render();
  });

  return card;
}

function groupItems(items) {
  const ordered = new Map();
  for (const course of ["未识别课程", ...Object.keys(getCurrentCourses())]) {
    const matches = items.filter((item) => item.course === course);
    if (matches.length) ordered.set(course, matches);
  }
  return ordered;
}

function updateSummary() {
  const count = state.items.length;
  const used = new Set(state.items.map((item) => item.course));
  const avg = count ? Math.round(state.items.reduce((sum, item) => sum + item.confidence, 0) / count) : 0;
  totalCount.textContent = String(count);
  courseCount.textContent = String(used.size);
  avgConfidence.textContent = `${avg}%`;
}

function getCurrentCourses() {
  if (!state.major) return {};
  const base = majorCatalog[state.major] || {};
  const custom = {};
  for (const course of parseCustomCourses(customCourses.value)) {
    custom[course] = buildKeywordsFromCourse(course);
  }
  return { ...base, ...custom };
}

function parseCustomCourses(value) {
  return [...new Set(String(value || "")
    .split(/[\n,，、;；\s]+/)
    .map((item) => item.trim())
    .filter(Boolean))];
}

function buildKeywordsFromCourse(course) {
  const tokens = course.split(/[与和及的基础原理技术学论]/).filter((item) => item.length >= 2);
  return [course, ...tokens];
}

function getCustomCourseKey() {
  return `customCourses:${state.major || "none"}`;
}

function readAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function sampleImage(dataUrl) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const size = 96;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(image, 0, 0, size, size);
      const { data } = ctx.getImageData(0, 0, size, size);
      let green = 0;
      let blue = 0;
      let warm = 0;
      let bright = 0;
      let saturation = 0;
      let edge = 0;
      let lastLum = 0;
      const pixels = size * size;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        bright += lum;
        saturation += max === 0 ? 0 : (max - min) / max;
        if (g > r * 1.12 && g > b * 1.08) green += 1;
        if (b > r * 1.12 && b > g * 1.04) blue += 1;
        if (r > b * 1.18 && g > b * 0.72) warm += 1;
        if (i > 0 && Math.abs(lum - lastLum) > 38) edge += 1;
        lastLum = lum;
      }

      resolve({
        greenRatio: green / pixels,
        blueRatio: blue / pixels,
        warmRatio: warm / pixels,
        brightness: bright / pixels,
        saturation: saturation / pixels,
        edgeDensity: edge / pixels
      });
    };
    image.onerror = () => resolve(null);
    image.src = dataUrl;
  });
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, "");
}
