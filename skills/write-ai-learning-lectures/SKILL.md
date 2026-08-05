---
name: write-ai-learning-lectures
description: Create, expand, correct, and publish daily AI learning lectures, GitBook notes, study roadmaps, and interview-oriented exercises for the AI-learning repository. Use when working on NLP, Transformer, LLM, retrieval, RAG, Agent, model training, inference systems, lecture research, verified code experiments, GitBook navigation, or the user's edited learning notes.
---

# Write AI Learning Lectures

Produce one-detail-per-day AI learning material that is self-contained, technically rigorous, code-accessible, current, and useful for internship interviews.

## Load the relevant standards

* Read [references/lecture-standard.md](references/lecture-standard.md) before creating, expanding, or correcting a daily lecture.
* Read [references/repository-workflow.md](references/repository-workflow.md) before reading from or writing to the AI-learning Git/GitBook repository.
* Also read [references/interview-and-roadmap.md](references/interview-and-roadmap.md) when changing the roadmap, selecting modern topics, or adding interview preparation.

## Classify the request

Choose the matching workflow:

1. **Draft the next lecture**: sync the repository, inspect the roadmap and prior days, research primary sources, write the complete page, verify code, update navigation, then commit and push if authorized.
2. **Expand or correct an existing page**: sync first, preserve the user's GitBook edits, change only the requested material, verify surrounding consistency, then publish if authorized.
3. **Continue after the user edits a lecture**: treat the edited page as the official note. Do not convert it to first-person voice, summarize it, or create a separate note unless explicitly requested.
4. **Revise the roadmap**: preserve completed days and the 112-day gradient, remove avoidable duplication, add durable modern concepts after their prerequisites, and keep weekly projects cumulative.
5. **Review or propose only**: inspect and report without modifying files until the user approves.

## Core workflow

1. Pull the latest remote changes with a fast-forward-only update.
2. Inspect the current page, related navigation, recent GitBook commits, and user edits.
3. Define the single technical question for the day and its prerequisites.
4. Research authoritative, primary sources. Browse for current models, libraries, protocols, job expectations, or other temporally unstable claims.
5. Draft the page using the required depth and structure in the lecture standard.
6. Run every important code example and record genuine outputs. Never invent a tokenizer result, tensor shape, metric, or memory calculation.
7. Add the compact interview layer without displacing the conceptual explanation.
8. Validate Markdown, local links, navigation, code, and Git diff integrity.
9. Commit and push only when the user requested repository changes.

## Non-negotiable rules

* Make the lecture itself the primary learning material; external readings are optional references.
* Preserve detailed explanations when the user asks for notes or corrections. Do not compress content merely to make it look like a summary.
* Assume the learner has heard many ML/NLP concepts but does not yet command their implementation details and has limited coding confidence.
* Explain definitions, data flow, equations, variables, tensor shapes, implementation behavior, tradeoffs, and failure modes in plain Chinese.
* Prefer stable principles over framework fashion, while including modern systems when they are materially relevant.
* Separate facts from inferences and distinguish model-specific behavior from universal rules.
* Preserve user-written outputs, comments, deletions, formatting decisions, and checked progress unless a correction is explicitly needed.
* Do not overwrite the user's GitBook edits with an older local version.
* Do not reintroduce a lecture-to-first-person-note conversion step. The user-edited lecture page is the note.
