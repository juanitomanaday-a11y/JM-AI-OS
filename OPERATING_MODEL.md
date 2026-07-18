# OPERATING_MODEL.md — Read This First

You are an AI collaborator working inside **JM-AI-OS**, the operations
command center for JM. This file gets you productive
in under five minutes.

Read in this order: **AI.md → SYSTEM_RULES.md → README.md → data/version.json**.

---

## 1. What this repository is

A static web dashboard and single source of truth for JM's work:
tasks, clients, projects, decisions, and an activity log — all stored as
plain JSON, rendered by one vanilla JavaScript file, deployable on
GitHub Pages with zero tooling. It will grow for years. Keep it boring,
readable, and portable.

## 2. Folder map

```
index.html          Dashboard shell. No business data ever lives here.
css/style.css       All styling. Design tokens at the top.
js/app.js           All logic. Small single-purpose functions.
js/data-fallback.js Auto-mirror of /data for file:// use. Regenerate when data changes.
data/               THE source of truth. Seven JSON files. See data/README.md.
docs/SOP/           Standard operating procedures.
docs/Templates/     Reusable templates.
docs/Reports/       Generated or written reports.
assets/             Images and static assets.
.github/workflows/  Reserved for future GitHub Actions. Empty by design.
```

## 3. Coding philosophy

- Simplicity beats cleverness. If two implementations work, ship the simpler one.
- One function, one job. One folder, one purpose.
- No frameworks, no dependencies, no build steps, no npm — ever.
- Everything must run by opening `index.html` in a browser, offline.
- Optimize for the next AI understanding your code in five minutes.

## 4. JSON schema overview

All data files live in `/data`. Full field definitions: `data/README.md`.

| File | Holds | Key rule |
|---|---|---|
| config.json | App settings | Never business data |
| version.json | Current version | Bump on every meaningful change |
| clients.json | Client list | IDs `c-###` are permanent |
| tasks.json | Task tracker | IDs `t-###` are permanent; `client_id` links to clients |
| projects.json | Project list | IDs `p-###` are permanent |
| decisions.json | Decision log | Only official when `approved_by` = JM |
| history.json | Action log | Append-only; log every change you make |

## 5. Collaboration rules

Four collaborators, one pipeline:

**AI** (research) → **AI** (architecture & risk review) →
**AI** (execution) → **JM** (approval).

- JM is the final decision maker. Nothing is official without JM approval.
- Stay in your lane. Researchers don't ship code; executors don't invent strategy.
- Never guess facts, IDs, or paths. If a detail is missing, ask JM one question.
- Mark assumptions `[ASSUMPTION:]` and items needing sign-off `[CONFIRM:]`.

## 6. Naming conventions

- Files and folders: exactly as they exist now. Never rename core folders.
- IDs: `c-###` clients, `t-###` tasks, `p-###` projects. Zero-padded, never reused.
- Dates: `YYYY-MM-DD`. Timestamps: ISO with timezone (`+08:00` for JM).
- JavaScript: `camelCase` functions and variables, descriptive names, no abbreviations.
- CSS: design tokens in `:root`, class names in `kebab-case`.
- Docs: place in `docs/SOP`, `docs/Templates`, or `docs/Reports` — nowhere else.

## 7. How to add a new feature

1. Read SYSTEM_RULES.md. Confirm the feature doesn't break a rule.
2. If it needs new data, extend a JSON schema by **adding** fields — never
   renaming or removing existing ones (backwards compatibility).
3. Update `data/README.md` with any new fields.
4. Add a small, single-purpose render function in `js/app.js`.
5. Add the container element to `index.html` and styles to `css/style.css`.
6. Regenerate `js/data-fallback.js` if any JSON changed.
7. Append to `history.json`. Update `version.json`.
8. Present to JM for approval. Log the decision in `decisions.json`.

## 8. Things that must never change

- The tech stack: HTML + CSS + vanilla JS + local JSON. Nothing else.
- The `/data` folder as the single source of truth.
- Existing IDs, field names, and core folder names.
- The four-collaborator pipeline with JM as final approver.
- The zero-dependency, open-index.html-and-it-works guarantee.
