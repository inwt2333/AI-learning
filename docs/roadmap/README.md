# 112 天学习路线

学习路线分为 16 周。每周包含 4 个核心知识点、2 个深入知识点和 1 个实验。

## 第 1 周：文本、分词与 Tokenizer

* [x] Day 001：Unicode、字符、字节和 Token
* [x] Day 002：文本规范化与中英文预处理
* [ ] Day 003：词表、未知词和 OOV
* [ ] Day 004：字符、单词和子词分词
* [ ] Day 005：深入——BPE 的合并过程
* [ ] Day 006：深入——特殊 Token 与 Attention Mask
* [ ] Day 007：实验——比较不同 Tokenizer 的切分结果

## 第 2 周：统计语言模型与文本检索

* [ ] Day 008：N-gram 语言模型
* [ ] Day 009：数据稀疏与平滑
* [ ] Day 010：交叉熵与困惑度
* [ ] Day 011：Bag of Words 与 TF-IDF
* [ ] Day 012：深入——交叉熵为什么能评价语言模型
* [ ] Day 013：深入——BM25 为什么优于简单 TF-IDF
* [ ] Day 014：实验——实现一个小型文档搜索器

## 第 3 周：词向量与文本表示

* [ ] Day 015：分布式假设
* [ ] Day 016：Word2Vec 的基本思想
* [ ] Day 017：Skip-gram 与 CBOW
* [ ] Day 018：负采样
* [ ] Day 019：深入——余弦相似度与向量长度
* [ ] Day 020：深入——静态词向量与上下文词向量
* [ ] Day 021：实验——观察多义词的上下文表示

## 第 4 周：RNN、LSTM 与 Seq2Seq

* [ ] Day 022：RNN 如何处理序列
* [ ] Day 023：隐藏状态保存了什么
* [ ] Day 024：梯度消失与长期依赖
* [ ] Day 025：LSTM 和 GRU
* [ ] Day 026：深入——Teacher Forcing 与 Exposure Bias
* [ ] Day 027：深入——Greedy Search 与 Beam Search
* [ ] Day 028：实验——修改字符级语言模型

## 第 5 周：Attention

* [ ] Day 029：Encoder–Decoder Attention
* [ ] Day 030：Query、Key、Value
* [ ] Day 031：Attention Score
* [ ] Day 032：Causal Mask 与 Padding Mask
* [ ] Day 033：深入——为什么除以 √dₖ
* [ ] Day 034：深入——多头注意力的张量形状
* [ ] Day 035：实验——实现简化 Self-Attention

## 第 6 周：完整 Transformer

* [ ] Day 036：Transformer Block 数据流
* [ ] Day 037：位置编码
* [ ] Day 038：Residual Connection
* [ ] Day 039：LayerNorm
* [ ] Day 040：深入——FFN、GELU 与 SwiGLU
* [ ] Day 041：深入——Encoder 与 Decoder 的差异
* [ ] Day 042：实验——组装迷你 Transformer Block

## 第 7 周：BERT、GPT 与 T5

* [ ] Day 043：BERT 与 Masked Language Modeling
* [ ] Day 044：GPT 与 Causal Language Modeling
* [ ] Day 045：T5 与 Encoder–Decoder
* [ ] Day 046：预训练和下游微调
* [ ] Day 047：深入——Causal LM 的 Label Shift
* [ ] Day 048：深入——Tokenizer 与模型词表的耦合
* [ ] Day 049：实验——比较 BERT 与 GPT 的输出

## 第 8 周：文本生成与 Prompt

* [ ] Day 050：Zero-shot 与 Few-shot
* [ ] Day 051：In-context Learning
* [ ] Day 052：System、User、Assistant 消息结构
* [ ] Day 053：Temperature
* [ ] Day 054：深入——Top-k 与 Top-p
* [ ] Day 055：深入——结构化输出与约束生成
* [ ] Day 056：实验——对比不同解码参数

## 第 9 周：SFT 与 LoRA

* [ ] Day 057：Instruction 数据格式
* [ ] Day 058：Supervised Fine-Tuning
* [ ] Day 059：完整微调与参数高效微调
* [ ] Day 060：LoRA 的核心思想
* [ ] Day 061：深入——LoRA Rank、Alpha 与目标层
* [ ] Day 062：深入——QLoRA 为什么降低显存
* [ ] Day 063：实验——使用脚手架微调小模型

## 第 10 周：对齐与 LLM 评价

* [ ] Day 064：Base Model 与 Instruct Model
* [ ] Day 065：人类偏好数据
* [ ] Day 066：Reward Model
* [ ] Day 067：RLHF 整体流程
* [ ] Day 068：深入——DPO 为什么更简单
* [ ] Day 069：深入——LLM-as-a-Judge 的偏差
* [ ] Day 070：实验——建立小型提示词评价集

## 第 11 周：推理与性能

* [ ] Day 071：自回归生成过程
* [ ] Day 072：KV Cache
* [ ] Day 073：Prefill 与 Decode
* [ ] Day 074：模型量化
* [ ] Day 075：深入——MQA/GQA 如何节省缓存
* [ ] Day 076：深入——FlashAttention 的核心直觉
* [ ] Day 077：实验——测量长度、量化与速度

## 第 12 周：信息检索

* [ ] Day 078：倒排索引与关键词检索
* [ ] Day 079：BM25
* [ ] Day 080：Dense Embedding
* [ ] Day 081：Bi-encoder
* [ ] Day 082：深入——Cross-encoder Reranker
* [ ] Day 083：深入——稀疏、稠密与混合检索
* [ ] Day 084：实验——比较 BM25 与向量检索

## 第 13 周：RAG 完整流程

* [ ] Day 085：文档加载与清洗
* [ ] Day 086：Chunk Size
* [ ] Day 087：Chunk Overlap
* [ ] Day 088：Metadata Filtering
* [ ] Day 089：深入——Query Rewrite
* [ ] Day 090：深入——Retrieval、Rerank 与 Context Packing
* [ ] Day 091：实验——构建带引用的小型 RAG

## 第 14 周：RAG 评价与改进

* [ ] Day 092：Recall@K
* [ ] Day 093：MRR
* [ ] Day 094：Answer Correctness
* [ ] Day 095：Faithfulness
* [ ] Day 096：深入——检索错误与生成错误归因
* [ ] Day 097：深入——Lost in the Middle
* [ ] Day 098：实验——建立 RAG 回归测试集

## 第 15 周：Agent 与工具调用

* [ ] Day 099：Agent 与普通 LLM 应用
* [ ] Day 100：Tool Schema
* [ ] Day 101：Function Calling
* [ ] Day 102：Tool Result 返回模型
* [ ] Day 103：深入——ReAct 循环
* [ ] Day 104：深入——错误、重试与停止条件
* [ ] Day 105：实验——实现双工具最小 Agent

## 第 16 周：规划、记忆与可靠性

* [ ] Day 106：Task Decomposition
* [ ] Day 107：Planner–Executor
* [ ] Day 108：短期记忆与长期记忆
* [ ] Day 109：Context Compression
* [ ] Day 110：深入——Human-in-the-loop
* [ ] Day 111：深入——Prompt Injection 与工具权限
* [ ] Day 112：实验——评价任务成功率、调用与成本
