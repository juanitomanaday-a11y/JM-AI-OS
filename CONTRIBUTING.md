# CONTRIBUTING.md

How humans and AI assistants make changes to JM-AI-OS.

## Before you change anything

Read, in order:

1. `AI.md` — orientation and folder map
2. `SYSTEM_RULES.md` — the constitution (non-negotiable)
3. `README.md` — project overview and data flow
4. `data/version.json` — confirm the current version you're working from

## The change workflow

1. **Plan.** State what you'll change and why. If it's an architectural
   decision, draft it for `decisions.json` first and get JM approval.
2. **Change.** Make the smallest change that does the job. Follow the
   naming conventions in `AI.md`.
3. **Mirror.** If you touched any `/data` JSON file, regenerate the matching
   block in `js/data-fallback.js` so the two stay identical.
4. **Log.** Append an entry to `data/history.json` (who, when, what).
5. **Version.** Update `data/version.json`: bump the version, set
   `last_updated` and `updated_by`.
6. **Comment.** Leave clear comments where the "why" isn't obvious.
7. **Verify.** Open `index.html` in a browser and confirm every section
   still renders. Nothing ships broken.
8. **Approve.** Present the change to JM. Official only after JM sign-off.

## Always

- Update `history.json` and `version.json` with every change
- Preserve backwards compatibility
- Keep functions small with one responsibility
- Write for the next reader (human or AI), not for yourself

## Never

- Rename core folders (`css`, `js`, `data`, `docs`, `assets`)
- Delete or rename JSON schemas or fields
- Remove backwards compatibility
- Change or reuse existing IDs
- Add frameworks, dependencies, or build tools

## Version numbering

`MAJOR.MINOR.PATCH`

- **PATCH** (0.1.0 → 0.1.1): fixes, copy edits, data corrections
- **MINOR** (0.1.0 → 0.2.0): new features or sections
- **MAJOR** (0.x.x → 1.0.0): milestone releases approved by JM
