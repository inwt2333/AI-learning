# AI Learning Lab：一日一知

从文本与 Tokenizer 出发，用 112 天建立 NLP、Transformer、LLM、RAG 与 Agent 的完整技术主线。

这里不追求快速浏览更多名词，而是每天真正弄懂一个技术细节：**能解释机制、能检查代码、能用实验验证，也能回答工程追问。**

{% content-ref url="week-01/day-004.md" %}
[继续学习：Day 004——字符、单词、子词与字节级分词](week-01/day-004.md)
{% endcontent-ref %}

{% content-ref url="roadmap/README.md" %}
[查看完整的 112 天学习路线](roadmap/README.md)
{% endcontent-ref %}

## 当前进度

{% hint style="success" %}
**当前阶段：第 1 周 · 文本、分词与 Tokenizer**

已完成 Day 001–003；下一课是 **Day 004：字符、单词、子词与字节级分词**。本周将继续深入 BPE、特殊 Token 与 Attention Mask，并用一次 Tokenizer 对比实验收尾。
{% endhint %}

- **本周目标：**弄清文本如何一步步变成模型能够处理的数字。
- **本周入口：**[查看第 1 周的每日安排](week-01/README.md)
- **进度真源：**以[路线图中的复选框](roadmap/README.md)为准。

## 学习路径

整个课程按“基础概念 → 数学与实现 → 现代 LLM → 检索与 RAG → Agent 与可靠性”推进：

1. **第 1–4 周 · NLP 基础**

   文本、Tokenizer、统计语言模型、词向量、RNN 与 Seq2Seq。

   [从第 1 周开始](week-01/README.md) · [查看第 2–4 周](hou-xu-bu-fen/di-24-zhou-jing-dian-nlp-yu-xu-lie-mo-xing.md)

2. **第 5–7 周 · Transformer**

   Attention 数学、Transformer Block、位置编码与预训练模型家族。

   [进入 Transformer 阶段](hou-xu-bu-fen/di-57-zhou-transformer.md)

3. **第 8–11 周 · LLM**

   文本生成、SFT、LoRA、对齐、推理模型与服务系统。

   [进入 LLM 阶段](hou-xu-bu-fen/di-811-zhou-llm.md)

4. **第 12–14 周 · 检索与 RAG**

   BM25、向量检索、Reranker、RAG 工程链路与评价诊断。

   [进入 RAG 阶段](hou-xu-bu-fen/di-1214-zhou-rag.md)

5. **第 15–16 周 · Agent**

   工具调用、MCP、状态管理、可靠性、安全与综合评价。

   [进入 Agent 阶段](hou-xu-bu-fen/di-1516-zhou-agent.md)

## 两条项目主线

### Mini LLM Lab

```text
Tokenizer → Attention → Transformer Block
→ SFT / LoRA → 推理性能测量
```

重点记录张量形状、参数量、显存、损失曲线和消融实验，把分散的模型知识组装成一条可运行、可解释的链路。

### 可靠 RAG Agent

```text
BM25 / 向量检索 → Reranker → RAG 评价
→ Tool Calling / MCP → Trace、安全与成本
```

重点记录设计选择、失败案例、评价指标和改进证据，最终形成一个可追踪、可诊断的可靠 Agent。

{% hint style="info" %}
两个项目不会等到最后才开始。每周实验都会积累一个可复用产物；完整里程碑见[《112 天学习路线》](roadmap/README.md)。
{% endhint %}

## 每天怎样学习

1. **理解一个机制：**先明确概念、输入输出和完整数据流。
2. **运行或检查代码：**不只阅读示例，还要核对张量形状、边界条件和真实输出。
3. **完成面试训练：**用 30 秒回答、递进追问和手写题检验是否真的理解。
4. **记录证据：**保存实验配置、结果、失败案例与修正过程，而不是只写结论。
5. **完成每周实验：**把当天知识接入项目主线，形成能够复现的阶段产物。

## 内容标签

- **`基础`**：后续内容所需的核心前置知识。
- **`面试`**：常见原理、手写、计算或工程追问。
- **`现代`**：当前主流模型、训练与系统中的关键技术。
- **`项目`**：会沉淀到 Mini LLM Lab 或可靠 RAG Agent 的实践内容。
