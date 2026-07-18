# JM-AI-OS

**Operations Command Center for JM**

A lightweight, portable, static web app that serves as the single source of
truth for JM's work and the collaboration hub for four collaborators:
JM, AI, AI, and AI.

- **Zero dependencies.** Pure HTML, CSS, and vanilla JavaScript.
- **Zero build steps.** Open `index.html` and it runs.
- **Zero lock-in.** Copy the folder anywhere and it still works.

New here? AI assistants start with [`AI.md`](AI.md).
Humans start with this file. Rules live in [`SYSTEM_RULES.md`](SYSTEM_RULES.md).

---

## What it does

| Section | Purpose |
|---|---|
| Executive Summary | Live counts: total, high priority, blocked, completed, overdue |
| Task Manager | Search, sort, filter, and inline-edit every task |
| Client Overview | One card per client, built from `data/clients.json` |
| Decision Log | Every official decision, with approval status |
| AI Activity Feed | Timeline of who did what, from `data/history.json` |

Note on inline editing: the browser cannot save files. Edits made in the
dashboard are temporary and a banner says so. Permanent changes are made by
editing the JSON files in `/data` and committing to Git.

## Folder structure

```
JM-AI-OS/
├── AI.md                  # AI orientation — read first
├── README.md              # This file
├── CONTRIBUTING.md        # Change workflow
├── SYSTEM_RULES.md        # The constitution
├── index.html             # Dashboard shell (no business data)
├── css/style.css          # All styling
├── js/app.js              # All logic
├── js/data-fallback.js    # Auto-mirror of /data for offline double-click use
├── data/                  # SINGLE SOURCE OF TRUTH (7 JSON files + README)
├── docs/
│   ├── SOP/               # Standard operating procedures
│   ├── Templates/         # Reusable templates
│   ├── Reports/           # Reports
│   └── Governance/        # Governance and documentation standards
├── assets/                # Images and static files
└── .github/workflows/     # Reserved for future automation (empty)
```

## Data flow

```
/data/*.json  ──fetch──►  js/app.js  ──render──►  index.html sections
     │
     └─ mirrored into js/data-fallback.js
        (used only when the browser blocks fetch on file://)
```

1. JSON files hold all data. Git history is the change history.
2. `app.js` loads the JSON and renders every section. No data in HTML.
3. When `index.html` is opened straight from disk, browsers block reading
   local JSON, so `app.js` falls back to the mirror and shows an
   "offline mode" banner. On GitHub Pages the live JSON is always used.

## Collaboration workflow

```
AI ──► AI ──► AI ──► JM
research   architecture  execution  approval
```

Nothing is official without JM approval. Every change is logged in
`data/history.json` and versioned in `data/version.json`.
Full rules: `SYSTEM_RULES.md`. Change process: `CONTRIBUTING.md`.

## Running it

**Option A — double-click.** Open `index.html` in any modern browser.
(Uses the offline mirror; you'll see a small banner.)

**Option B — local server.** From the repo folder, run any static server
and open the shown address. Live JSON files are used.

**Option C — GitHub Pages.** See below. Live JSON files are used.

## Git workflow

1. Clone or create the `JM-AI-OS` repository on GitHub.
2. Work in small commits with plain-language messages
   (e.g. `Add task t-008 for Client 03 catalog audit`).
3. Follow `CONTRIBUTING.md`: mirror, log, version, verify, approve.
4. Push to `main`. GitHub Pages redeploys automatically.

## GitHub Pages deployment

1. On GitHub: **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**. Save.
4. The site publishes at `https://<username>.github.io/JM-AI-OS/`
   within a few minutes.

No workflow file is required for this. `.github/workflows/` stays empty
until a future automation is approved.

## Future roadmap (documented, not implemented)

These are extension points only. Each would be a new module with its own
decision log entry and JM approval before any code is written:

Asana · Slack · Gmail · Google Drive · Google Sheets ·
Amazon marketplace tools ·
GitHub Actions (scheduled reports, JSON validation on push)

Design intent: any future integration reads/writes the same `/data` JSON
schemas rather than inventing new storage, keeping JSON as the single
source of truth.

## Version

Current: see `data/version.json`.
