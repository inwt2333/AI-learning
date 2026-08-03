"use client";

import { useEffect, useMemo, useState } from "react";

type ModuleKey = "nlp" | "transformer" | "llm" | "rag" | "agent";

type Week = {
  id: number;
  module: ModuleKey;
  title: string;
  goal: string;
  topics: string[];
};

const moduleNames: Record<ModuleKey, string> = {
  nlp: "NLP 基础",
  transformer: "Transformer",
  llm: "LLM",
  rag: "RAG",
  agent: "Agent",
};

const weeks: Week[] = [
  {
    id: 1,
    module: "nlp",
    title: "文本、分词与 Tokenizer",
    goal: "弄清文本如何一步步变成模型能够处理的数字。",
    topics: [
      "Unicode、字符、字节和 Token",
      "文本规范化与中英文预处理",
      "词表、未知词和 OOV",
      "字符、单词和子词分词",
      "深入：BPE 的合并过程",
      "深入：特殊 Token 与 Attention Mask",
      "实验：比较不同 Tokenizer 的切分结果",
    ],
  },
  {
    id: 2,
    module: "nlp",
    title: "统计语言模型与文本检索",
    goal: "从概率和统计角度理解语言模型与搜索。",
    topics: [
      "N-gram 语言模型",
      "数据稀疏与平滑",
      "交叉熵与困惑度",
      "Bag of Words 与 TF-IDF",
      "深入：交叉熵为什么能评价语言模型",
      "深入：BM25 为什么优于简单 TF-IDF",
      "实验：实现一个小型文档搜索器",
    ],
  },
  {
    id: 3,
    module: "nlp",
    title: "词向量与文本表示",
    goal: "理解词语如何获得可计算的语义表示。",
    topics: [
      "分布式假设",
      "Word2Vec 的基本思想",
      "Skip-gram 与 CBOW",
      "负采样",
      "深入：余弦相似度与向量长度",
      "深入：静态词向量与上下文词向量",
      "实验：观察多义词的上下文表示",
    ],
  },
  {
    id: 4,
    module: "nlp",
    title: "RNN、LSTM 与 Seq2Seq",
    goal: "理解 Transformer 之前，序列模型如何保存和生成信息。",
    topics: [
      "RNN 如何处理序列",
      "隐藏状态保存了什么",
      "梯度消失与长期依赖",
      "LSTM 和 GRU",
      "深入：Teacher Forcing 与 Exposure Bias",
      "深入：Greedy Search 与 Beam Search",
      "实验：修改字符级语言模型",
    ],
  },
  {
    id: 5,
    module: "transformer",
    title: "Attention",
    goal: "从直觉、公式和张量形状三个层面掌握注意力。",
    topics: [
      "Encoder–Decoder Attention",
      "Query、Key、Value",
      "Attention Score",
      "Causal Mask 与 Padding Mask",
      "深入：为什么除以 √dₖ",
      "深入：多头注意力的张量形状",
      "实验：实现简化 Self-Attention",
    ],
  },
  {
    id: 6,
    module: "transformer",
    title: "完整 Transformer",
    goal: "把 Attention、残差、归一化和 FFN 组装成完整模块。",
    topics: [
      "Transformer Block 数据流",
      "位置编码",
      "Residual Connection",
      "LayerNorm",
      "深入：FFN、GELU 与 SwiGLU",
      "深入：Encoder 与 Decoder 的差异",
      "实验：组装迷你 Transformer Block",
    ],
  },
  {
    id: 7,
    module: "transformer",
    title: "BERT、GPT 与 T5",
    goal: "理解三类主流架构的训练目标和使用方式。",
    topics: [
      "BERT 与 Masked Language Modeling",
      "GPT 与 Causal Language Modeling",
      "T5 与 Encoder–Decoder",
      "预训练和下游微调",
      "深入：Causal LM 的 Label Shift",
      "深入：Tokenizer 与模型词表的耦合",
      "实验：比较 BERT 与 GPT 的输出",
    ],
  },
  {
    id: 8,
    module: "llm",
    title: "文本生成与 Prompt",
    goal: "理解提示和解码参数为什么会改变生成结果。",
    topics: [
      "Zero-shot 与 Few-shot",
      "In-context Learning",
      "System、User、Assistant 消息结构",
      "Temperature",
      "深入：Top-k 与 Top-p",
      "深入：结构化输出与约束生成",
      "实验：对比不同解码参数",
    ],
  },
  {
    id: 9,
    module: "llm",
    title: "SFT 与 LoRA",
    goal: "理解微调数据、损失和可训练参数之间的关系。",
    topics: [
      "Instruction 数据格式",
      "Supervised Fine-Tuning",
      "完整微调与参数高效微调",
      "LoRA 的核心思想",
      "深入：LoRA Rank、Alpha 与目标层",
      "深入：QLoRA 为什么降低显存",
      "实验：使用脚手架微调小模型",
    ],
  },
  {
    id: 10,
    module: "llm",
    title: "对齐与 LLM 评价",
    goal: "建立从偏好数据到模型评价的完整认识。",
    topics: [
      "Base Model 与 Instruct Model",
      "人类偏好数据",
      "Reward Model",
      "RLHF 整体流程",
      "深入：DPO 为什么更简单",
      "深入：LLM-as-a-Judge 的偏差",
      "实验：建立小型提示词评价集",
    ],
  },
  {
    id: 11,
    module: "llm",
    title: "推理与性能",
    goal: "理解模型生成时的速度、显存与质量权衡。",
    topics: [
      "自回归生成过程",
      "KV Cache",
      "Prefill 与 Decode",
      "模型量化",
      "深入：MQA/GQA 如何节省缓存",
      "深入：FlashAttention 的核心直觉",
      "实验：测量长度、量化与速度",
    ],
  },
  {
    id: 12,
    module: "rag",
    title: "信息检索",
    goal: "理解 RAG 在调用模型之前是怎样找到资料的。",
    topics: [
      "倒排索引与关键词检索",
      "BM25",
      "Dense Embedding",
      "Bi-encoder",
      "深入：Cross-encoder Reranker",
      "深入：稀疏、稠密与混合检索",
      "实验：比较 BM25 与向量检索",
    ],
  },
  {
    id: 13,
    module: "rag",
    title: "RAG 完整流程",
    goal: "从文档进入系统开始，走通检索、重排和生成。",
    topics: [
      "文档加载与清洗",
      "Chunk Size",
      "Chunk Overlap",
      "Metadata Filtering",
      "深入：Query Rewrite",
      "深入：Retrieval、Rerank 与 Context Packing",
      "实验：构建带引用的小型 RAG",
    ],
  },
  {
    id: 14,
    module: "rag",
    title: "RAG 评价与改进",
    goal: "学会判断问题来自检索器还是生成模型。",
    topics: [
      "Recall@K",
      "MRR",
      "Answer Correctness",
      "Faithfulness",
      "深入：检索错误与生成错误归因",
      "深入：Lost in the Middle",
      "实验：建立 RAG 回归测试集",
    ],
  },
  {
    id: 15,
    module: "agent",
    title: "Agent 与工具调用",
    goal: "不用复杂框架，理解 Agent 最小循环。",
    topics: [
      "Agent 与普通 LLM 应用",
      "Tool Schema",
      "Function Calling",
      "Tool Result 返回模型",
      "深入：ReAct 循环",
      "深入：错误、重试与停止条件",
      "实验：实现双工具最小 Agent",
    ],
  },
  {
    id: 16,
    module: "agent",
    title: "规划、记忆与可靠性",
    goal: "让 Agent 从能运行走向可控制、可观察和可评价。",
    topics: [
      "Task Decomposition",
      "Planner–Executor",
      "短期记忆与长期记忆",
      "Context Compression",
      "深入：Human-in-the-loop",
      "深入：Prompt Injection 与工具权限",
      "实验：评价任务成功率、调用与成本",
    ],
  },
];

const resources = [
  {
    title: "Stanford CS224N",
    description: "NLP 与深度学习的主课程参考",
    href: "https://web.stanford.edu/class/cs224n/",
  },
  {
    title: "Speech and Language Processing",
    description: "概念、定义与系统原理主教材",
    href: "https://web.stanford.edu/~jurafsky/slp3/",
  },
  {
    title: "Hugging Face LLM Course",
    description: "模型、Tokenizer、微调与代码实践",
    href: "https://huggingface.co/learn/llm-course/en/chapter0/1",
  },
  {
    title: "PyTorch Tutorials",
    description: "张量、Autograd 与模型实现",
    href: "https://docs.pytorch.org/tutorials/",
  },
];

const noteTemplate = `# Day XX：知识点\n\n## 1. 我原来怎么理解\n\n## 2. 现在的严格定义\n\n## 3. 输入—处理—输出\n\n## 4. 关键代码与张量变化\n\n## 5. 修改实验：预测、结果、解释\n\n## 6. 我之前理解错了什么\n\n## 7. 仍然不理解的问题`;

export default function Home() {
  const [filter, setFilter] = useState<"all" | ModuleKey>("all");
  const [completed, setCompleted] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("ai-study-progress");
    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch {
        setCompleted([]);
      }
    }
  }, []);

  const visibleWeeks = useMemo(
    () => weeks.filter((week) => filter === "all" || week.module === filter),
    [filter],
  );

  const currentDay = Array.from({ length: 112 }, (_, index) => index + 1).find(
    (day) => !completed.includes(day),
  ) ?? 112;
  const currentWeek = weeks[Math.floor((currentDay - 1) / 7)];
  const currentTopic = currentWeek.topics[(currentDay - 1) % 7];
  const progress = Math.round((completed.length / 112) * 100);

  const toggleDay = (day: number) => {
    const next = completed.includes(day)
      ? completed.filter((item) => item !== day)
      : [...completed, day].sort((a, b) => a - b);
    setCompleted(next);
    window.localStorage.setItem("ai-study-progress", JSON.stringify(next));
  };

  const copyTemplate = async () => {
    await navigator.clipboard.writeText(noteTemplate);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">知</span>
          <span>一日一知</span>
        </a>
        <nav aria-label="主导航">
          <a href="#today">今日</a>
          <a href="#roadmap">路线</a>
          <a href="#method">方法</a>
          <a href="#resources">资料</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">NLP · LLM · RAG · AGENT</p>
          <h1>
            每天弄懂一个
            <span> AI 技术细节</span>
          </h1>
          <p className="hero-lead">
            从“听说过”走到“能解释、能实验、能实现”。这是一条为概念不够牢固、代码能力仍在成长的学习路线。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#today">开始今天的学习</a>
            <a className="text-link" href="#roadmap">查看 112 天路线 <span>→</span></a>
          </div>
        </div>
        <div className="hero-panel" aria-label="学习计划概览">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-number">112</div>
          <div className="hero-unit">天学习计划</div>
          <div className="hero-stats">
            <span><strong>16</strong> 个主题周</span>
            <span><strong>32</strong> 个深入节点</span>
            <span><strong>16</strong> 个实践实验</span>
          </div>
        </div>
      </section>

      <section className="progress-strip" aria-label="总体学习进度">
        <div>
          <span className="progress-label">你的进度</span>
          <strong>{completed.length} / 112</strong>
        </div>
        <div className="progress-track" aria-label={`已完成 ${progress}%`}>
          <span style={{ width: `${progress}%` }} />
        </div>
        <span className="progress-percent">{progress}%</span>
      </section>

      <section className="section today-section" id="today">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TODAY&apos;S FOCUS</p>
            <h2>今天，只解决一个问题</h2>
          </div>
          <span className="day-pill">DAY {String(currentDay).padStart(3, "0")}</span>
        </div>

        <article className="today-card">
          <div className="today-main">
            <span className={`module-badge ${currentWeek.module}`}>
              {moduleNames[currentWeek.module]}
            </span>
            <p className="week-label">第 {currentWeek.id} 周 · {currentWeek.title}</p>
            <h3>{currentTopic.replace(/^(深入|实验)：/, "")}</h3>
            <p>{currentWeek.goal}</p>
            <div className="today-actions">
              {currentDay === 1 && (
                <a className="primary-button" href="/day/001">打开 Day 001 学习卡</a>
              )}
              <button
                className={currentDay === 1 ? "secondary-button compact" : "primary-button"}
                type="button"
                onClick={() => toggleDay(currentDay)}
              >
                {completed.includes(currentDay) ? "取消完成" : "标记为已完成"}
              </button>
              <a className="text-link" href="#method">查看学习步骤 <span>↓</span></a>
            </div>
          </div>
          <div className="today-steps">
            <div><span>01</span><p><strong>概念恢复</strong>它是什么，解决什么问题</p></div>
            <div><span>02</span><p><strong>流程拆解</strong>输入、处理与输出</p></div>
            <div><span>03</span><p><strong>代码对应</strong>公式对应哪几行代码</p></div>
            <div><span>04</span><p><strong>修改实验</strong>先预测，再运行和解释</p></div>
          </div>
        </article>
      </section>

      <section className="section" id="roadmap">
        <div className="section-heading roadmap-heading">
          <div>
            <p className="eyebrow">THE ROADMAP</p>
            <h2>16 周知识路线</h2>
            <p className="section-intro">基础不跳过，但快速重建；每周向下深入两层，再用一个实验收束。</p>
          </div>
          <div className="filters" role="group" aria-label="筛选学习模块">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>全部</button>
            {(Object.keys(moduleNames) as ModuleKey[]).map((key) => (
              <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>
                {moduleNames[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="roadmap-grid">
          {visibleWeeks.map((week) => {
            const weekDone = week.topics.filter((_, index) =>
              completed.includes((week.id - 1) * 7 + index + 1),
            ).length;
            return (
              <details className="week-card" key={week.id}>
                <summary>
                  <div className="week-topline">
                    <span className={`week-index ${week.module}`}>W{String(week.id).padStart(2, "0")}</span>
                    <span className="week-progress">{weekDone}/7</span>
                  </div>
                  <h3>{week.title}</h3>
                  <p>{week.goal}</p>
                  <span className="expand-label">展开每日知识点 <b>＋</b></span>
                </summary>
                <div className="topic-list">
                  {week.topics.map((topic, index) => {
                    const day = (week.id - 1) * 7 + index + 1;
                    const type = topic.startsWith("深入：") ? "深入" : topic.startsWith("实验：") ? "实验" : "核心";
                    return (
                      <label className={completed.includes(day) ? "topic completed" : "topic"} key={topic}>
                        <input
                          type="checkbox"
                          checked={completed.includes(day)}
                          onChange={() => toggleDay(day)}
                        />
                        <span className="checkmark" aria-hidden="true" />
                        <span className="topic-day">D{String(day).padStart(3, "0")}</span>
                        <span className="topic-name">{topic.replace(/^(深入|实验)：/, "")}</span>
                        {day === 1 ? (
                          <a className="lesson-link" href="/day/001" onClick={(event) => event.stopPropagation()}>打开</a>
                        ) : (
                          <span className={`topic-type ${type}`}>{type}</span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="section method-inner">
          <div className="method-copy">
            <p className="eyebrow light">THE METHOD</p>
            <h2>不是读完，而是验证理解</h2>
            <p>每天 60–90 分钟。代码从阅读、补全开始，逐步过渡到局部实现和系统组合。</p>
            <div className="time-grid">
              <div><strong>15′</strong><span>概念与定义</span></div>
              <div><strong>15′</strong><span>关键原理</span></div>
              <div><strong>30′</strong><span>代码实验</span></div>
              <div><strong>15′</strong><span>笔记反思</span></div>
            </div>
          </div>
          <div className="levels">
            <div><span>01</span><p><strong>运行</strong>先让最小代码正确工作</p></div>
            <div><span>02</span><p><strong>追踪</strong>标注类型、形状和含义</p></div>
            <div><span>03</span><p><strong>修改</strong>改变一个变量并预测结果</p></div>
            <div><span>04</span><p><strong>重写</strong>独立完成核心函数</p></div>
          </div>
        </div>
      </section>

      <section className="section notes-section">
        <div className="notes-copy">
          <p className="eyebrow">YOUR NOTES</p>
          <h2>记录认知发生变化的地方</h2>
          <p>网站不只收藏正确答案，也保留“原来怎么想、哪里想错了、实验怎样改变理解”。你完成初稿后，我会检查事实、推导、代码和资料，再整理为正式页面。</p>
          <button type="button" className="secondary-button" onClick={copyTemplate}>
            {copied ? "已复制笔记模板" : "复制每日笔记模板"}
          </button>
        </div>
        <pre className="note-preview" aria-label="每日笔记模板"><code>{noteTemplate}</code></pre>
      </section>

      <section className="section resources-section" id="resources">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CORE SOURCES</p>
            <h2>少而可靠的主资料</h2>
          </div>
          <p className="section-intro">每天只指定对应章节或论文小节，不要求一次通读整本书。</p>
        </div>
        <div className="resource-grid">
          {resources.map((resource, index) => (
            <a href={resource.href} target="_blank" rel="noreferrer" key={resource.title}>
              <span>0{index + 1}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <b>打开资料 ↗</b>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">知</span><span>一日一知</span></div>
        <p>从有所耳闻，到真正掌握。</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
