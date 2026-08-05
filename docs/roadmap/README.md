# 112 天学习路线

学习路线分为 16 周。整体顺序保持“基础概念 → 数学与实现 → 现代 LLM → 检索与 RAG → Agent 与可靠性”。每天只学习一个技术细节，每周包含 4 个核心知识点、2 个深入知识点和 1 个实验。

标签说明：

* **基础**：构成后续内容的必要前置知识；
* **面试**：大模型与 NLP 实习中常见的原理、手写或工程追问；
* **现代**：当前主流模型、训练或系统中的关键技术；
* **项目**：会积累到 Mini LLM Lab 或可靠 RAG Agent 项目中。

## 第 1 周：文本、分词与 Tokenizer

* [x] Day 001：Unicode、字符、字节和 Token `基础`
* [x] Day 002：文本规范化与中英文预处理 `基础`
* [ ] Day 003：词表、未知词和 OOV `基础` `面试`
* [ ] Day 004：字符、单词、子词与字节级分词 `基础`
* [ ] Day 005：深入——BPE 的合并过程 `面试`
* [ ] Day 006：深入——特殊 Token、Attention Mask 与模型输入 `面试`
* [ ] Day 007：实验——比较 WordPiece、BPE、Unigram 与字节级 Tokenizer `项目`

## 第 2 周：统计语言模型与文本检索

* [ ] Day 008：N-gram 语言模型 `基础`
* [ ] Day 009：数据稀疏、平滑与未知事件概率 `基础`
* [ ] Day 010：交叉熵与困惑度 `基础` `面试`
* [ ] Day 011：Bag of Words 与 TF-IDF `基础`
* [ ] Day 012：深入——交叉熵为什么能评价语言模型 `面试`
* [ ] Day 013：深入——BM25 为什么优于简单 TF-IDF `面试`
* [ ] Day 014：实验——实现一个带 BM25 的小型文档搜索器 `项目`

## 第 3 周：词向量与神经网络训练

* [ ] Day 015：分布式假设、向量相似度与 Embedding `基础`
* [ ] Day 016：Word2Vec 的训练目标 `基础`
* [ ] Day 017：Skip-gram 与 CBOW 的样本构造 `基础`
* [ ] Day 018：负采样如何降低计算量 `基础` `面试`
* [ ] Day 019：深入——Softmax、交叉熵与梯度更新 `面试`
* [ ] Day 020：深入——静态词向量与上下文表示 `面试`
* [ ] Day 021：实验——训练小型词向量并分析多义词与近邻 `项目`

## 第 4 周：RNN、Seq2Seq 与序列解码

* [ ] Day 022：RNN 数据流、隐藏状态与张量形状 `基础`
* [ ] Day 023：BPTT、梯度消失与长期依赖 `基础` `面试`
* [ ] Day 024：LSTM 与 GRU 的门控机制 `基础`
* [ ] Day 025：Seq2Seq Encoder–Decoder `基础`
* [ ] Day 026：深入——Teacher Forcing 与 Exposure Bias `面试`
* [ ] Day 027：深入——Greedy Search、Beam Search 与长度偏置 `面试`
* [ ] Day 028：实验——实现并修改字符级语言模型 `项目`

## 第 5 周：Attention 数学与实现

* [ ] Day 029：Attention 为什么能突破固定长度上下文 `基础`
* [ ] Day 030：Query、Key、Value 的来源和含义 `基础` `面试`
* [ ] Day 031：Scaled Dot-Product Attention `基础`
* [ ] Day 032：Causal Mask、Padding Mask 与广播 `基础` `面试`
* [ ] Day 033：深入——为什么 Attention Score 要除以 √dₖ `面试`
* [ ] Day 034：深入——多头注意力的矩阵与张量形状 `面试`
* [ ] Day 035：实验——不依赖高级封装实现 Self-Attention `项目`

## 第 6 周：现代 Transformer Block

* [ ] Day 036：Transformer Block 的完整数据流 `基础`
* [ ] Day 037：Residual、Pre-Norm 与 Post-Norm `现代` `面试`
* [ ] Day 038：LayerNorm 与 RMSNorm `现代`
* [ ] Day 039：位置编码、RoPE 与相对位置信息 `现代` `面试`
* [ ] Day 040：深入——FFN、GELU 与 SwiGLU `现代`
* [ ] Day 041：深入——Mixture of Experts、路由与负载均衡 `现代`
* [ ] Day 042：实验——组装并检查迷你 Transformer Block `项目`

## 第 7 周：模型家族与预训练

* [ ] Day 043：Encoder-only、Decoder-only 与 Encoder–Decoder `基础` `面试`
* [ ] Day 044：BERT 与 Masked Language Modeling `基础`
* [ ] Day 045：GPT 与 Causal Language Modeling `基础`
* [ ] Day 046：T5、Span Corruption 与 Seq2Seq 预训练 `基础`
* [ ] Day 047：深入——Causal LM 的 Label Shift 与 Loss Mask `面试`
* [ ] Day 048：深入——预训练数据去重、数据质量与 Scaling Law `现代`
* [ ] Day 049：实验——比较 BERT、GPT 与 T5 的输入和输出 `项目`

## 第 8 周：文本生成、ICL 与约束输出

* [ ] Day 050：Zero-shot、One-shot 与 Few-shot `基础`
* [ ] Day 051：In-context Learning 与示例选择 `基础` `面试`
* [ ] Day 052：消息角色、Chat Template 与生成边界 `现代`
* [ ] Day 053：Logits、Temperature 与随机采样 `基础` `面试`
* [ ] Day 054：深入——Top-k、Top-p 与典型解码退化 `面试`
* [ ] Day 055：深入——结构化输出、JSON Schema 与约束解码 `现代`
* [ ] Day 056：实验——比较解码参数并验证结构化输出 `项目`

## 第 9 周：SFT、LoRA 与训练数据工程

* [ ] Day 057：Instruction 数据、Chat Template 与角色边界 `基础`
* [ ] Day 058：SFT 的 Causal Loss 与 Label Masking `基础` `面试`
* [ ] Day 059：Sequence Packing、Padding 与有效 Token 利用率 `现代`
* [ ] Day 060：完整微调、PEFT 与 LoRA `基础`
* [ ] Day 061：深入——LoRA Rank、Alpha 与目标层选择 `面试`
* [ ] Day 062：深入——QLoRA、NF4 与 Double Quantization `现代`
* [ ] Day 063：实验——微调小模型并记录显存、损失与样例 `项目`

## 第 10 周：对齐、偏好优化与推理模型

* [ ] Day 064：Base、Instruct 与 Reasoning Model 的后训练阶段 `现代`
* [ ] Day 065：偏好数据、Reward Model 与成对排序 `基础`
* [ ] Day 066：RLHF 与 PPO 的完整数据流 `基础` `面试`
* [ ] Day 067：DPO 如何绕过显式 Reward Model `面试`
* [ ] Day 068：深入——RLVR、GRPO 与可验证奖励 `现代`
* [ ] Day 069：深入——Test-time Scaling、推理预算与推理蒸馏 `现代`
* [ ] Day 070：实验——建立成对评价集并检查 LLM-as-a-Judge 偏差 `项目`

## 第 11 周：LLM 推理与服务系统

* [ ] Day 071：自回归生成、Prefill 与 Decode `基础` `面试`
* [ ] Day 072：KV Cache 的形状、显存与增长过程 `基础` `面试`
* [ ] Day 073：MQA/GQA 如何降低 KV Cache `现代`
* [ ] Day 074：权重量化、激活量化与精度损失 `现代` `面试`
* [ ] Day 075：深入——FlashAttention 的 IO-Aware 思想 `现代`
* [ ] Day 076：深入——PagedAttention、Continuous Batching 与调度 `现代`
* [ ] Day 077：实验——测量 TTFT、TPOT、吞吐量与量化效果 `项目`

## 第 12 周：现代信息检索

* [ ] Day 078：倒排索引、BM25 回顾与候选召回 `基础`
* [ ] Day 079：对比学习、InfoNCE 与文本 Embedding 训练 `现代` `面试`
* [ ] Day 080：Bi-encoder 与 Dense Retrieval `基础`
* [ ] Day 081：ANN、HNSW 与召回—延迟权衡 `现代` `面试`
* [ ] Day 082：深入——Cross-encoder Reranker `面试`
* [ ] Day 083：深入——稀疏、稠密与混合检索 `现代`
* [ ] Day 084：实验——比较 BM25、向量检索与 Reranker `项目`

## 第 13 周：RAG 完整工程链路

* [ ] Day 085：文档加载、解析、清洗与可追溯 ID `基础`
* [ ] Day 086：Chunk Size、Overlap 与语义切分 `基础` `面试`
* [ ] Day 087：Metadata Filtering 与权限过滤 `基础`
* [ ] Day 088：Query Rewrite、Multi-query 与查询路由 `现代`
* [ ] Day 089：深入——Retrieval、Rerank 与候选去重 `面试`
* [ ] Day 090：深入——Context Packing、Lost in the Middle 与长上下文选择 `现代`
* [ ] Day 091：实验——构建带引用和来源定位的小型 RAG `项目`

## 第 14 周：RAG 评价、诊断与改进

* [ ] Day 092：Recall@K、MRR 与 NDCG `基础` `面试`
* [ ] Day 093：Answer Correctness 与任务评价 `基础`
* [ ] Day 094：Faithfulness、Citation Correctness 与幻觉 `基础`
* [ ] Day 095：评价集、切片分析与回归测试 `现代`
* [ ] Day 096：深入——检索错误、重排错误与生成错误归因 `面试`
* [ ] Day 097：深入——Agentic Retrieval、迭代检索与停止条件 `现代`
* [ ] Day 098：实验——建立 RAG 回归测试与错误分析报告 `项目`

## 第 15 周：Agent、工具调用与 MCP

* [ ] Day 099：Agent、Workflow 与普通 LLM 应用 `基础` `面试`
* [ ] Day 100：Tool Schema、参数验证与 Function Calling `基础`
* [ ] Day 101：工具执行、结果返回与并行调用 `基础`
* [ ] Day 102：ReAct 循环与显式状态机 `现代`
* [ ] Day 103：深入——MCP 的 Client、Server、Tool 与 Resource `现代`
* [ ] Day 104：深入——错误、超时、重试、幂等性与停止条件 `面试`
* [ ] Day 105：实验——实现带状态和双工具的最小 Agent `项目`

## 第 16 周：可靠 Agent 与综合项目

* [ ] Day 106：Task Decomposition、Planner–Executor 与适用边界 `基础`
* [ ] Day 107：Context Engineering 与 Context Compression `现代`
* [ ] Day 108：短期状态、长期记忆与记忆检索 `现代`
* [ ] Day 109：Agent Trace、Trajectory Evaluation 与可观测性 `现代` `面试`
* [ ] Day 110：深入——Human-in-the-loop、审批与可恢复执行 `面试`
* [ ] Day 111：深入——Prompt Injection、最小权限与工具安全 `面试`
* [ ] Day 112：综合实验——评价可靠 RAG Agent 的质量、调用、延迟与成本 `项目`

## 贯穿全程的两个项目

### Mini LLM Lab

Tokenizer → Attention → Transformer Block → SFT/LoRA → 推理性能测量。重点记录张量形状、参数量、显存、损失曲线和消融实验。

### 可靠 RAG Agent

BM25/向量检索 → Reranker → RAG 评价 → Tool Calling/MCP → Trace、安全与成本。重点记录设计选择、失败案例、评价指标和改进证据。

## 每篇讲义的面试训练

在不延长主学习时间的前提下，每篇讲义应包含：

1. 30 秒面试回答；
2. 从定义到工程权衡的递进追问；
3. 一道小型手写、计算或张量形状题；
4. 一个项目故障或方案选择问题。
