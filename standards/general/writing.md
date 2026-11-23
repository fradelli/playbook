# Writing standard

Applies to rules, documents, and roadmap tasks in every Fradelli repository. The reader is a person or an agent who has to act on the text, so write only what changes a decision or an action.

## Every text

- Write in English, in plain words, active voice, and present tense.
- Put one idea in each sentence and each list item.
- Name things exactly: paths, commands, IDs, components, and values. Write dates as `2026-11-23`.
- Label what is not a fact: decision, proposal, or unknown. Never invent missing data; write it as an unknown.
- Link to the source instead of copying it. One rule or fact lives in one place.
- Leave out filler ("it is important to note", "basically"), repetition, summaries of what the reader just read, and the history of how a text was written.

## Rules

Rules are the contents of `CLAUDE.md`, `AGENTS.md`, and `standards/`.

- Write each rule in the imperative, one rule per list item: "Run `npm run roadmap:check` before every commit."
- Add the reason in a short clause only when the rule is not obvious or is often broken.
- State the scope once, at the top of the file, instead of in every rule.
- Give an example only when the rule is ambiguous without it.
- Keep history out of rules. Past decisions and evidence go to the task `Result` or to an evidence document.

## Documents

- Open with one or two sentences saying what the document is for and who uses it.
- Keep the current state separate from history; move history to an evidence or history document.
- Use headings that say what the section answers. Prefer lists and tables to long paragraphs.

## Tasks

A task tells someone who did not plan it what to deliver and how to prove it. Structure, frontmatter, and states are defined in the playbook `CLAUDE.md`.

| Section | Write | Leave out |
| --- | --- | --- |
| Title | Verb and object, in the imperative: "Create the writing standard". | The ID, the project name, vague verbs such as "improve". |
| Objective | One sentence with the outcome. | Steps, background, more than one outcome. |
| Inputs | Exact paths, the section needed, and why it is read. | "All documents", "previous result", files the task does not read. |
| Deliverables | The paths and artifacts that will exist at the end. | Activities ("analyze", "discuss"). |
| Subtasks | Ordered, verifiable steps as checkboxes. | Steps that only restate a deliverable. |
| Validation | Commands or inspections, with the expected result. | "Test everything", checks that cannot fail. |
| Acceptance criteria | One to five observable results, each answerable with yes or no by someone who did not do the work. | Activities, repeated subtasks, vague words (see below). |
| Result | After finishing: what was delivered and the evidence (PR, commit, numbers, command results) in up to ten lines, plus open points. | Logs, step-by-step diaries, anything planned for later. |

### Acceptance criteria

A criterion describes the result, not the work:

| Instead of | Write |
| --- | --- |
| "Reading is guided by task and section." | "Every task lists its inputs with exact paths and sections." |
| "All features follow the same folder structure." | "Every folder under `src/features/` has `data/`, `ui/`, and `application/`." |
| "The page works well on mobile." | "No horizontal page scroll at 390 and 320 px." |
| "Analyze the documentation." | "`docs/INVENTORY.md` lists every document with its target path." |

Words that make a criterion unverifiable: properly, correctly, appropriate, as needed, better, improved, robust, clean, intuitive, user-friendly, consistent (without saying with what).

### Optional sections

A task may add only these sections, between the required ones:

| Section | Use for | Usual place |
| --- | --- | --- |
| `Context` | Facts needed to understand why the task exists, in up to five lines. | After `Objective` |
| `Decisions` | Decisions already made that the task must follow, with date and who decided. | After `Context` |
| `Expected behavior` | Product behavior the user will see, as a short list. | After `Inputs` |
| `Authorization` | Approval that the task needs or received, with date. | After `Objective` |
| `Out of scope` | What the task deliberately does not do. | After `Acceptance criteria` |
| `Risks` | What can go wrong and how it is handled. | After `Acceptance criteria` |
| `Rollback` | How to undo the change. | After `Acceptance criteria` |

Never leave a placeholder such as "Not recorded in the original version of this task." in an open task: write the content or remove the reason it is missing.

## Epics

- `Expected outcome`: one sentence.
- `Scope` and `Out of scope`: short lists.
- `Order`: the task table with dependencies and one-line outcomes.
- `Closing criteria`: observable, like acceptance criteria.

## Enforcement

`npm run roadmap:check` rejects open tasks (not `DONE` or `CANCELLED`) without acceptance criteria, with an optional section outside the list above, or with a "Not recorded" placeholder. Open tasks that broke these rules before the check existed are listed in `scripts/writing-baseline.json` until PB-E02-T05 rewrites them; the list may only shrink. Done and cancelled tasks are historical evidence and are not checked for writing.
