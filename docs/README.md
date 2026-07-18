# /docs — Documentation Center

Three folders, three purposes. Nothing else goes in /docs.

## SOP/
Standard Operating Procedures. One Markdown file per procedure.
Every SOP includes: objective, prerequisites, step-by-step procedure,
quality checkpoints, expected outcome, common issues, and automation
opportunities.

Naming: `SOP-<short-name>.md` (e.g. `SOP-account-health-audit.md`).

## Templates/
Reusable templates: task templates, report skeletons, checklist formats,
email/Slack message templates.

Naming: `TPL-<short-name>.md`.

## Reports/
Written or generated reports: audits, weekly summaries, retrospectives.

Naming: `RPT-YYYY-MM-DD-<short-name>.md` so reports sort chronologically.

---

Rule: when a document is added or replaced, log it in `data/history.json`.
