# /data — The Single Source of Truth

Every piece of business data in JM-AI-OS lives in this folder as plain JSON.
The dashboard reads these files. Nothing else stores data.

**Rule:** If you change any file here, also update the matching block in
`js/data-fallback.js` (the offline mirror) and add a line to `history.json`.

---

## config.json
App configuration only. Never put tasks, clients, or business data here.

| Field | Meaning |
|---|---|
| theme | UI theme. Currently only `dark`. |
| owner | System owner (JM). |
| company | Company name shown in the header. |
| repository | Repo name. |
| app_name | Display name. |
| tagline | Subtitle shown under the app name. |

## version.json
Current version of the system. Update on every meaningful change.

| Field | Meaning |
|---|---|
| version | Semantic version, e.g. `0.1.0`. |
| build | Short human label for the release. |
| last_updated | Date of last change, `YYYY-MM-DD`. |
| updated_by | Who made the change (JM, AI, AI, AI). |

## clients.json
One entry per client account. Client names are NEVER hardcoded in HTML —
the dashboard builds client cards from this file.

| Field | Meaning |
|---|---|
| id | Permanent ID, `c-###`. Never change or reuse an ID. |
| name | Client name. |
| status | `active` or `inactive`. |
| platforms | List of platforms (e.g. Seller Central). Currently empty — JM to fill in. |

## tasks.json
The task tracker. Current entries are marked `[SAMPLE]` — replace with real work.

| Field | Meaning |
|---|---|
| id | Permanent ID, `t-###`. |
| title | What needs to be done. |
| client_id | Matching `id` from clients.json, or `""` for internal work. |
| project | Project name (matches projects.json). |
| owner | Human accountable. Usually JM. |
| assigned_ai | Which AI is doing the legwork: AI, AI, AI, or `""`. |
| status | `todo`, `in_progress`, `blocked`, `completed`. |
| priority | `high`, `medium`, `low`. |
| due_date | `YYYY-MM-DD`. |

## projects.json
Groups tasks. `client_id` empty = internal project.

## decisions.json
The decision log. Nothing is official until `approved_by` says JM.

| Field | Meaning |
|---|---|
| date | `YYYY-MM-DD`. |
| decision | What was decided. |
| reason | Why. |
| approved_by | `JM` when official; `PENDING - needs JM sign-off` until then. |

## history.json
Append-only log of important actions. Every AI adds an entry when it changes
anything. Newest entries go at the end of the list.

| Field | Meaning |
|---|---|
| timestamp | ISO format with timezone, e.g. `2026-07-18T10:00:00+08:00`. |
| actor | JM, AI, AI, or AI. |
| action | Plain-language description of what happened. |
