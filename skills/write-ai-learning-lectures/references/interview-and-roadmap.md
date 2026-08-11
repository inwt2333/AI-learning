# Interview and roadmap standard

## Roadmap principles

* Preserve 112 days, 16 weeks, one technical detail per day, and the weekly 4 core + 2 deep + 1 experiment rhythm.
* Preserve completed days and their numbering.
* Keep classics that explain modern systems, but compress avoidable historical repetition.
* Introduce a modern topic only after the learner has its prerequisites.
* Prefer durable mechanisms over model-name news.
* Cover NLP/LLM/Agent breadth while keeping a continuous implementation gradient.

Modern coverage should include, where prerequisites allow:

* RoPE, Pre-Norm/Post-Norm, RMSNorm, SwiGLU, GQA and MoE;
* data quality, SFT packing, LoRA/QLoRA, preference optimization, RLVR/GRPO, reasoning budgets and distillation;
* KV Cache, quantization, FlashAttention, PagedAttention, continuous batching and serving metrics;
* contrastive embeddings, InfoNCE, ANN/HNSW, reranking and hybrid retrieval;
* RAG evaluation, error attribution, iterative retrieval and regression tests;
* tool calling, explicit workflows/state machines, MCP, tracing, permissions and Agent evaluation.

## Daily practice and interview layer

Keep this compact so it does not replace the lecture.

Place the interview material and self-test questions under one shared second-level practice heading, such as `练习与面试准备`. Use subsections inside that block for the 30-second answer, progressive questions, handwritten task, project defense, and additional self-checks. Do not create a separate top-level `自测题` section.

### 30-second answer

Provide a concise answer to “what is it, why does it exist, and what is the main tradeoff?”

### Progressive follow-ups

Include 3–5 questions that move through:

1. Definition.
2. Mechanism or equation.
3. Tensor shape or code behavior.
4. Engineering tradeoff.
5. Failure diagnosis.

### Handwritten task

Add one small task such as:

* implement 10–30 lines without a high-level wrapper;
* calculate parameter count, memory, complexity, or an evaluation metric;
* trace tensor dimensions;
* repair a deliberately incorrect snippet.

### Project defense

Add one scenario that forces a design decision or error analysis. Require evidence such as a metric, ablation, trace, latency measurement, or counterexample.

## Cumulative projects

Prefer weekly experiments that build two coherent projects rather than unrelated demos:

1. **Mini LLM Lab**: tokenizer → attention → Transformer block → SFT/LoRA → inference benchmark.
2. **Reliable RAG Agent**: retrieval → reranking → RAG evaluation → tools/MCP → tracing, security, latency, and cost.

Each project artifact should preserve configuration, metrics, genuine outputs, failure cases, and a short explanation suitable for a resume or interview.

## Coding preparation boundary

The AI route should strengthen Python, PyTorch, tensor reasoning, testing, and complexity analysis. It does not replace a separate data-structures-and-algorithms practice track. Do not consume core lecture days with unrelated LeetCode topics unless the user asks to merge the tracks.
