# 第 1 周：文本、分词与 Tokenizer

本周目标是弄清文本如何一步步变成模型能够处理的数字。

## 每日安排

1. [Unicode、字符、字节和 Token](day-001.md)
2. [文本规范化与中英文预处理](day-002.md)
3. [词表、未知词和 OOV](day-003.md)
4. [字符、单词、子词与字节级分词](day-004.md)
5. [深入：BPE 的合并过程](day-005.md)
6. [深入：特殊 Token、Attention Mask 与模型输入](day-006.md)
7. [实验：比较 WordPiece、BPE、Unigram 与字节级 Tokenizer](day-007.md)

## 概念速查

一行一个概念：定义与公式压缩自本周讲义，公式为纯文本写法；点"详见"直达对应讲次。

| 概念 | 关键定义 | 公式 / 数量关系 | 详见 |
| ---- | -------- | -------------- | ---- |
| 码点（code point） | Unicode 给每个字符分配的编号（如 `学` = U+5B66）；是编号不是字节 | UTF-8 中占 1–4 字节，常见汉字通常 3 字节 | [Day 001](day-001.md) |
| Token 与 Token ID | Token 是模型处理的最小单位：词、子词、汉字、字节片段或特殊符号；ID 只是具体词表内的索引，与 Unicode 编码无关 | 同一文本在不同 Tokenizer 下 Token 数不同 | [Day 001](day-001.md) |
| 规范化四形式 | NFC = 规范等价+组合；NFD = 规范等价+分解；NFKC = 兼容等价+组合；NFKD = 兼容等价+分解 | — | [Day 002](day-002.md) |
| token / type / 词表 | token = 文本中一次具体出现；type = 去重后的一种形式；vocabulary = 有限 Token 集合及 Token → ID 映射 | 完整词不在词表 ≠ 一定产生 `[UNK]`：子词可继续拆分，字节回退可覆盖任意合法 UTF-8 | [Day 003](day-003.md) |
| OOV 与 `<UNK>` | OOV = 候选输入单位不在当前词表；`<UNK>` 把无法表示的不同输入折叠到同一个保留 ID | OOV token rate = OOV 实例数 / 全部实例数；OOV type rate = 不同 OOV 类型数 / 全部不同类型数 | [Day 003](day-003.md) |
| 分词粒度 | 词级 / 子词级 / 字符级 / 纯字节级四种单位选择 | Embedding 参数量 = \|V\| × d；标准注意力关系规模 ≈ n² | [Day 004](day-004.md) |
| BPE 训练 | 从基础字符/字节序列出发，逐轮合并最高频相邻 pair；训练产物 = Vocabulary（Token → ID）+ Merge rules（合并顺序），两者不能混为一谈 | `C(a,b) = Σ_s f(s) · N_(a,b)(s)` | [Day 005](day-005.md) |
| BPE 编码 | 复用同一 normalizer、pre-tokenizer 和初始单位，按训练好的 merge rank 合并；不重新学习，不是任意最长匹配 | — | [Day 005](day-005.md) |
| 模型输入字段 | `input_ids` 词表索引；`attention_mask` 有效输入/屏蔽；`token_type_ids` 文本片段身份；`special_tokens_mask` 特殊 Token 元数据；`position_ids` 常由模型内部生成 | Padding mask 的数学作用：被屏蔽 Key 的 score 加 -∞ → softmax 权重为 0 | [Day 006](day-006.md) |
| Tokenizer 流水线 | 完整 Tokenizer = Normalizer → Pre-tokenizer → Model → Post-processor → Decoder | — | [Day 007](day-007.md) |

## 横向对比

### 四种分词粒度（Day 004）

| 粒度 | 单位 | 词表 | 序列长度 | 主要边界 |
| ---- | ---- | ---- | -------- | -------- |
| 词级 | 整词 → ID | 大 | 短 | 依赖分词，OOV 明显 |
| 子词级 | 常见字符串片段 | 中 | 中 | 覆盖、词表、长度三者折中；子词不保证等于词素 |
| 字符级 | 通常是 Unicode 码点 | 小 | 长 | "字符"需明确定义 |
| 纯字节级 | UTF-8 的 0–255 字节 | 固定 256 | 最长 | 覆盖任意合法 UTF-8，基础集合固定 |

### 四种子词算法（Day 007）

| 算法 | 学习方向 | 编码方式 | 典型失败方式 |
| ---- | -------- | -------- | ------------ |
| BPE | 小基础表开始，合并高频相邻 pair | 按 merge rank 合并 | 低频项更多，词表更大 |
| WordPiece | 学习子词词表 | 逐词最长匹配（非词首常带 `##`） | 一个词无法完整覆盖时可能整词 `[UNK]` |
| Unigram | 大候选表 + 概率模型 EM，剪除低价值 piece | 动态规划选最大概率路径 | 表面字符串可能仍映射到 unk_id |
| Byte-level BPE | 完整 256 字节基础表 + BPE merges | 同 BPE | 序列可能更长；代理符号必须由 decoder 还原 |

评测提醒（Day 007）：Token 少不一定好——1 个 `[UNK]` 可能丢掉整段文本，1 个长 BPE Token 可能只是记住训练模板；评测至少同时报告实际词表大小、Token 数/fertility、unknown 覆盖、fallback 与截断、offset/round-trip、下游质量与吞吐延迟。

### 易混淆概念（Day 004–006）

| 易混对 | 区别 |
| ------ | ---- |
| 字符 BPE / byte-level BPE / 纯字节模型 / byte fallback | 四种不同机制，不能互相替代 |
| padding mask / causal mask | 前者屏蔽补齐位置，后者屏蔽未来位置 |
| attention mask / loss mask / special tokens mask | 屏蔽注意力 ≠ 忽略损失 ≠ 特殊 Token 元数据 |
| Token ID / Unicode 编码 | ID 只在具体词表内部有意义 |
| mask 方向的 API 差异 | Transformers：1 保留、0 屏蔽；PyTorch MHA `key_padding_mask`：True 屏蔽；PyTorch SDPA bool：True 保留 |

## 本周完成标准

- 能区分字符、码点、字节、Token 和 Token ID。
- 能解释词表和 OOV 问题。
- 能手动演示一次简单的 BPE 合并。
- 能比较两个 Tokenizer 的切分结果，并解释差异来源。
