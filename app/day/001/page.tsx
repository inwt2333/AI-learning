"use client";

import { useState } from "react";
import Link from "next/link";

const experimentCode = `text = "AI学习🙂"

print("原始文本：", text)
print("Python len：", len(text))
print("Unicode 码点：", [f"U+{ord(ch):04X}" for ch in text])

utf8 = text.encode("utf-8")
print("UTF-8 字节：", list(utf8))
print("字节数量：", len(utf8))`;

const tokenizerCode = `from transformers import AutoTokenizer

text = "AI学习🙂"
tokenizer = AutoTokenizer.from_pretrained("bert-base-chinese")

tokens = tokenizer.tokenize(text)
token_ids = tokenizer.convert_tokens_to_ids(tokens)

print("文本：", text)
print("Tokens：", tokens)
print("Token IDs：", token_ids)
print("解码结果：", tokenizer.decode(token_ids))`;

const noteTask = `# Day 001：Unicode、字符、字节和 Token

## 1. 用自己的话定义
- 字符：
- Unicode 码点：
- UTF-8 字节：
- Token：
- Token ID：

## 2. 数据流
写出一句文本从输入到 Embedding 的完整过程。

## 3. 实验结果
记录 Python len、UTF-8 字节数、Tokens 和 Token IDs。

## 4. 我原来理解错了什么

## 5. 我仍然不明白的问题`;

export default function Day001() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <main className="lesson-page">
      <header className="lesson-header">
        <Link className="brand" href="/">
          <span className="brand-mark">知</span>
          <span>一日一知</span>
        </Link>
        <div className="lesson-nav">
          <Link href="/">学习路线</Link>
          <span>DAY 001 / 112</span>
        </div>
      </header>

      <section className="lesson-hero">
        <div className="lesson-kicker">
          <span>NLP 基础</span>
          <b>约 75 分钟</b>
        </div>
        <h1>Unicode、字符、字节和 Token</h1>
        <p>
          今天只解决一个问题：<strong>我们输入的一段文字，究竟怎样变成语言模型能够计算的数字？</strong>
        </p>
        <div className="lesson-goals">
          <div><span>01</span><p>区分字符、码点、字节、Token 和 Token ID</p></div>
          <div><span>02</span><p>预测 Python 字符串长度与 UTF-8 字节数</p></div>
          <div><span>03</span><p>解释 Tokenizer 为什么不等于简单分词</p></div>
        </div>
      </section>

      <section className="lesson-content">
        <aside className="lesson-toc">
          <p>本日路线</p>
          <a href="#model">01 · 心智模型</a>
          <a href="#concepts">02 · 五个概念</a>
          <a href="#experiment">03 · 代码实验</a>
          <a href="#quiz">04 · 预测问题</a>
          <a href="#notes">05 · 笔记任务</a>
          <a href="#sources">06 · 学习资料</a>
        </aside>

        <div className="lesson-article">
          <section id="model" className="lesson-block">
            <p className="lesson-label">01 · 心智模型</p>
            <h2>先把五层概念排成一条线</h2>
            <p>
              人看到的是文字，计算机首先处理编码后的字节；Tokenizer 再根据自己的词表和规则切分文本，并将每个 Token 映射成整数 ID。模型真正接收的是 Token ID，随后通过 Embedding 表查到向量。
            </p>

            <div className="pipeline" aria-label="文本转换为模型向量的流程">
              <div><small>人类输入</small><strong>“学习 AI”</strong></div>
              <span>→</span>
              <div><small>Unicode / UTF-8</small><strong>码点与字节</strong></div>
              <span>→</span>
              <div><small>Tokenizer</small><strong>Tokens</strong></div>
              <span>→</span>
              <div><small>Vocabulary</small><strong>Token IDs</strong></div>
              <span>→</span>
              <div><small>Embedding</small><strong>向量</strong></div>
            </div>

            <div className="key-idea">
              <span>关键结论</span>
              <p>Token 不是字符，Token ID 也不是 Unicode 编码。Token 和 ID 都由具体模型的 Tokenizer 决定。</p>
            </div>
          </section>

          <section id="concepts" className="lesson-block">
            <p className="lesson-label">02 · 五个概念</p>
            <h2>看起来相近，其实属于不同层次</h2>
            <div className="concept-table">
              <div className="concept-row concept-head"><span>概念</span><span>它是什么</span><span>例子</span></div>
              <div className="concept-row"><strong>字符</strong><p>人理解的文字单位，但不总能与程序中的一个位置严格对应。</p><code>学、A、🙂</code></div>
              <div className="concept-row"><strong>Unicode 码点</strong><p>Unicode 为抽象字符分配的编号。</p><code>学 → U+5B66</code></div>
              <div className="concept-row"><strong>UTF-8 字节</strong><p>码点在文件或网络中的具体字节表示，长度可变。</p><code>学 → 3 bytes</code></div>
              <div className="concept-row"><strong>Token</strong><p>Tokenizer 根据词表切出的模型单位，可能是词、子词、字符或字节片段。</p><code>learning → learn + ing</code></div>
              <div className="concept-row"><strong>Token ID</strong><p>Token 在模型词表中的整数索引。</p><code>learn → 4556</code></div>
            </div>
            <p className="lesson-footnote">示例 Token ID 仅用于说明；不同模型的词表不同，同一个 Token 的 ID 也可能不同。</p>
          </section>

          <section id="experiment" className="lesson-block">
            <p className="lesson-label">03 · 代码实验</p>
            <h2>同一段文本，到底有多“长”？</h2>
            <p>先不要运行。请先预测：下面文本的 Python 长度是多少？UTF-8 编码后又有多少字节？</p>

            <div className="prediction-box">
              <code>AI学习🙂</code>
              <div><span>我预测 Python len = ______</span><span>我预测 UTF-8 bytes = ______</span></div>
            </div>

            <div className="code-card">
              <div className="code-title"><span>实验 A · 字符与字节</span><button onClick={() => copy(experimentCode, "a")}>{copied === "a" ? "已复制" : "复制代码"}</button></div>
              <pre><code>{experimentCode}</code></pre>
            </div>

            <details className="result-reveal">
              <summary>运行后再展开：结果解释</summary>
              <div>
                <p><code>len(text)</code> 是 5，因为 Python 这里统计 5 个 Unicode 码点。</p>
                <p>UTF-8 字节数是 12：两个 ASCII 字母各 1 字节，两个汉字各 3 字节，emoji 为 4 字节。</p>
                <p>注意：Python 的 <code>len</code> 也不总等于人眼所见的“字符数”。由多个码点组合而成的 emoji 或带组合音标的文字会形成反例。</p>
              </div>
            </details>

            <h3>再看 Tokenizer 怎样重新切分文本</h3>
            <p>下面的实验使用中文 BERT。换成其他模型后，Tokens 和 Token IDs 很可能改变。</p>
            <div className="code-card">
              <div className="code-title"><span>实验 B · Token 与 Token ID</span><button onClick={() => copy(tokenizerCode, "b")}>{copied === "b" ? "已复制" : "复制代码"}</button></div>
              <pre><code>{tokenizerCode}</code></pre>
            </div>

            <div className="experiment-prompts">
              <h3>必须完成的三次修改</h3>
              <ol>
                <li>把 <code>AI学习🙂</code> 改成 <code>AI learning</code>，比较 Token 数量。</li>
                <li>分别输入 <code>学习</code>、<code>学习者</code>、<code>机器学习</code>，观察相同汉字的切分。</li>
                <li>把模型换成你项目中使用过的 Tokenizer，比较结果是否一致。</li>
              </ol>
            </div>
          </section>

          <section id="quiz" className="lesson-block">
            <p className="lesson-label">04 · 预测问题</p>
            <h2>检查你是否真的区分了它们</h2>
            <p>同一段文本分别交给两个不同的 LLM，它们得到的 Token ID 序列是否一定相同？</p>
            <div className="quiz-options">
              <button className={answer === "same" ? "chosen" : ""} onClick={() => setAnswer("same")}>一定相同</button>
              <button className={answer === "different" ? "chosen" : ""} onClick={() => setAnswer("different")}>不一定相同</button>
            </div>
            {answer && (
              <div className={`quiz-feedback ${answer === "different" ? "correct" : "wrong"}`}>
                <strong>{answer === "different" ? "回答正确" : "再想一想"}</strong>
                <p>模型可能采用不同的规范化规则、分词算法和词表，所以 Tokens 与 Token IDs 都可能不同。UTF-8 字节属于文本编码层，而 Token ID 属于模型词表层。</p>
              </div>
            )}
          </section>

          <section id="notes" className="lesson-block">
            <p className="lesson-label">05 · 笔记任务</p>
            <h2>今天需要提交给我的内容</h2>
            <p>不要复制本页文字。请用自己的语言填写，并附上两组实验的真实输出。</p>
            <div className="code-card note-task">
              <div className="code-title"><span>Day 001 笔记骨架</span><button onClick={() => copy(noteTask, "note")}>{copied === "note" ? "已复制" : "复制模板"}</button></div>
              <pre><code>{noteTask}</code></pre>
            </div>
            <div className="acceptance">
              <h3>发布前验收标准</h3>
              <ul>
                <li>能清楚区分五个概念，不循环定义。</li>
                <li>能解释为什么字符串长度、字节数和 Token 数不同。</li>
                <li>完成至少三次输入修改，并分析结果。</li>
                <li>提出至少一个具体、可回答的问题。</li>
              </ul>
            </div>
          </section>

          <section id="sources" className="lesson-block source-block">
            <p className="lesson-label">06 · 学习资料</p>
            <h2>今天只需要读这些</h2>
            <a href="https://docs.python.org/3/howto/unicode.html" target="_blank" rel="noreferrer"><span>主读 · 20 分钟</span><strong>Python Unicode HOWTO</strong><p>阅读 Definitions 与 Encodings，建立码点和字节的区别。</p></a>
            <a href="https://web.stanford.edu/~jurafsky/slp3/2.pdf" target="_blank" rel="noreferrer"><span>主读 · 15 分钟</span><strong>Speech and Language Processing · Chapter 2</strong><p>阅读 Unicode 与 Tokenization 的相关部分。</p></a>
            <a href="https://huggingface.co/learn/llm-course/en/chapter6/1" target="_blank" rel="noreferrer"><span>选读 · 10 分钟</span><strong>Hugging Face Tokenizers</strong><p>了解现代 Tokenizer 的训练和处理流程。</p></a>
          </section>

          <nav className="lesson-footer-nav" aria-label="课程翻页">
            <Link href="/">← 返回学习路线</Link>
            <span>Day 002 将在 Day 001 笔记订正后开放</span>
          </nav>
        </div>
      </section>
    </main>
  );
}
