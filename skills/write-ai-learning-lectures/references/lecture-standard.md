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
11. One shared practice section that integrates the compact interview layer and self-test questions, with collapsible answers where appropriate.
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

## Code standard

* Prefer standard Python and small, explicit functions before high-level frameworks.
* Explain inputs, outputs, data types, important variables, tensor dimensions, and left-closed/right-open offsets where relevant.
* Keep examples small enough to trace manually.
* Add necessary comments to Python examples. Comments should explain inputs and outputs, non-obvious state changes, formulas, boundary handling, or deliberately simplified behavior; do not annotate every obvious assignment or `print()` call.
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
