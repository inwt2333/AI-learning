# Daily lecture standard

## Learner profile

Write for an AI student who has studied some machine learning, NLP, and Agent basics but remembers many ideas only by name. Assume limited confidence in coding. Avoid both introductory fluff and unexplained research-level jumps.

## Scope and depth

* Teach one technical detail per day.
* Keep the conceptual gradient from definition to implementation to underlying principle to engineering tradeoff.
* Target material that can normally be understood and practiced in roughly 60–90 minutes, but do not add a rigid timetable unless requested.
* Make the lecture complete enough that the learner does not have to read an entire textbook chapter or paper first.
* Keep original papers, standards, and official documentation as optional verification and extension material.

## Required content

Adapt the headings to the topic, but normally cover:

1. The single question being answered.
2. Concrete learning goals.
3. Strict definitions and distinctions from easily confused concepts.
4. The complete input → processing → output data flow.
5. The underlying algorithm, equations, assumptions, and edge cases.
6. A minimal implementation with accessible code.
7. Genuine execution output and a line-by-line interpretation of important results.
8. Model-, tokenizer-, language-, or task-specific boundaries.
9. Engineering tradeoffs and failure modes.
10. Common misconceptions.
11. One shared practice section that integrates the compact interview layer, with collapsible answers where appropriate. Do not append a `自测清单` checklist; the user removed those from published lectures.
12. Authoritative references annotated by purpose.
13. A one-page recap.

Do not force every heading when it would be artificial. Preserve the full explanatory depth.

## Explanation style

* Lead with the problem, then introduce terminology.
* Use plain Chinese and define English terms when first introduced.
* Explain why a step exists before showing an API call.
* Use a small table only when it clarifies exact comparisons or mappings.
* Use a data-flow diagram when at least three dependent transformations are involved.
* Distinguish “usually”, “for this model”, and “always”.
* State when a recommendation depends on the task, training distribution, tokenizer, language, or deployment environment.

## GitBook math and Markdown conventions

GitBook renders math with KaTeX, and its inline delimiter is also `$$`:

* Wrap **inline math in double dollar signs**: `$$|V|$$`. Never use single `$...$`; GitBook does not render it as math, and GitBook-side edits strip the dollar signs, silently turning `$k$` into plain `k` (observed in the Day 009/010 GitBook merges).
* Keep **display math** as a `$$ ... $$` block on its own lines.
* Avoid math delimiters inside headings and table cells; GitBook strips them there. Write plain text such as `1+ln(tf)` or `ln(N/df)` instead.
* Prefer `*` bullets and bare code fences for plain-text blocks; GitBook normalizes `-` bullets and removes the `text` fence language, so matching its output keeps diffs clean.
* Source for the inline `$$` rule: GitBook docs on [inline content](https://gitbook.com/docs/create-content/formatting/inline.md) and [Math & TeX blocks](https://gitbook.com/docs/create-content/blocks/math-and-tex.md).

## Weekly overview page

Each `docs/week-XX/README.md` is the week's index, summary, comparison sheet, and quick reference — not a bare link list. Keep these sections in order:

1. The one-line week theme (existing intro).
2. 每日安排: the numbered links to each day.
3. 概念速查: one table per week with the columns `概念 | 关键定义 | 公式 / 数量关系 | 详见` (one row per major concept, linked to its day). Definitions and formulas must be copied or compressed from that week's published lectures — never introduce new claims, formulas, or numbers that the lectures do not contain.
4. 横向对比: small comparison tables for the week's competing options (algorithms, metrics, representations, easily confused pairs), each sourced from the lectures' own comparisons, with the source day named in the heading. Add a short sourced note line only when it prevents a real misreading.
5. 本周完成标准 (existing).

Apply the GitBook table conventions above: plain-text formulas, no math delimiters in cells, and escape literal pipes in cells as `\|`. When adding a day, extend the 概念速查 and 横向对比 tables in the same change so the README stays a complete summary of the week; when creating a new week's README, build all five sections from that week's lectures.

## Code standard

* Prefer standard Python and small, explicit functions before high-level frameworks.
* Explain inputs, outputs, data types, important variables, tensor dimensions, and left-closed/right-open offsets where relevant.
* Keep examples small enough to trace manually.
* Add detailed comments to Python examples so a learner with limited coding confidence can trace them line by line. Every function's docstring states its inputs, outputs, and data shapes; each non-obvious line or idiom (`dict.get`, `setdefault`, `sorted` with `key`, `enumerate`, comprehensions, set operations, tuple unpacking, `lambda`) gets a short inline note in plain Chinese; comments show what key intermediate data looks like (for example `此时 scores = {0: 2.83}`). Do not annotate obvious assignments or `print()` calls, and never change code logic just to add comments.
* Run representative examples in the workspace before publishing.
* Copy the actual output into the lecture; do not predict output from memory.
* If a dependency or model download is required, show the minimal installation/loading step.
* When an example depends on a model version or public vocabulary, name the exact checkpoint.
* Include at least one counterexample or boundary case when it materially improves understanding.

## Source standard

Prefer sources in this order:

1. Formal standards and specifications.
2. Original research papers or technical reports.
3. Official library/model documentation and model cards.
4. Authoritative textbooks or university course material.

Use secondary articles only when primary sources do not adequately explain an implementation detail. For current/frontier content, browse and verify before writing. Cite the page that directly supports each important claim.

Do not require the learner to read all references. State that they are for verification and extension unless a specific reading is essential.

## User-edited notes

The user edits the lecture directly in GitBook. After those edits:

* Treat the same page as the official learning note.
* Preserve the user's real outputs, comments, formatting, deletions, dates, and progress checkboxes.
* Do not convert the page to first-person voice.
* Do not summarize or shorten it unless explicitly requested.
* When asked to explain one confusing section, expand that section in place and leave unrelated material unchanged.

## Quality check

Before publishing, confirm:

* The lecture answers one clear technical question.
* Definitions do not silently mix layers such as bytes, code points, tokens, IDs, vectors, or model states.
* Equations define their symbols and connect back to code.
* Code output has been verified.
* The learner can explain both mechanism and tradeoff.
* Interview preparation and self-test questions appear under one shared second-level practice heading rather than as two separate lecture sections.
* Python examples include enough comments for the intended learner to trace the important logic without turning every line into prose.
* References are authoritative and optional rather than a hidden reading burden.
