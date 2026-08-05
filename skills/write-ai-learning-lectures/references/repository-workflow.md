# AI-learning repository workflow

## Repository layout

* GitBook root: `docs/`, configured by `.gitbook.yaml`.
* Main navigation: `docs/SUMMARY.md`.
* Roadmap: `docs/roadmap/README.md`.
* Weekly overview: `docs/week-XX/README.md`.
* Daily pages: `docs/week-XX/day-XXX.md`.
* Portable lecture skill: `skills/write-ai-learning-lectures/`.

## Sync before work

1. Check the working tree.
2. Pull `origin/main` with fast-forward-only behavior.
3. Inspect recent commits because GitBook writes changes back to GitHub.
4. Read the latest target file instead of relying on conversation memory.
5. If the user changed formatting or deleted files, preserve those decisions.

The user has intentionally removed `docs/learning-method.md` and `docs/notes-template.md`. Do not restore them unless explicitly requested.

## Edit safely

* Use `apply_patch` for content edits.
* Never replace a user-edited page with an older commit wholesale.
* Use historical versions only to understand intent or recover material the user explicitly requests.
* When adding a day, update both `docs/SUMMARY.md` and the weekly `README.md`.
* Preserve completed checkboxes in the roadmap.
* Use GitBook-compatible Markdown and existing frontmatter conventions.

## Verify

Run proportional checks:

1. `git diff --check`.
2. Local Markdown link validation.
3. Code examples and recorded outputs.
4. Headings and navigation entries with `rg`.
5. `git diff` review to ensure unrelated user edits were not changed.
6. Fetch once more before committing if the work took long enough for a concurrent GitBook edit to be plausible.

## Publish

When the user requested repository changes:

1. Stage only relevant files.
2. Commit with a concise English message describing the content change.
3. Push `main` to `origin`.
4. Verify the remote branch points to the new commit.
5. Return direct GitHub links to the changed learning pages.

When the user asks for a proposal, diagnosis, or review only, do not write or push until approval is given.
