# GOV-repository-maintenance-standard.md — Repository Maintenance Standard

**Status:** Draft. **Document type:** Governance.

Defines what it means for the repository to be well-maintained, and who
is responsible for keeping it that way.

## Purpose

To prevent drift: broken links, stale content, orphaned files, and
structure that no longer matches reality.

## Scope

Applies to the entire repository: code, data, and documentation.

## Maintenance responsibilities

1. Every collaborator who changes a file is responsible for keeping
   related files consistent (e.g. updating `js/data-fallback.js` when
   `/data` changes, per `SYSTEM_RULES.md` rule 2).
2. A document's Related Documents section must stay accurate; if a
   related document is renamed or retired, dependent documents should be
   updated to match, subject to `GOV-change-management-standard.md`
   classification.
3. JM owns final sign-off on maintenance changes, same as any other
   change.

## What "well-maintained" means

1. No broken internal links.
2. No orphaned files (files not referenced from any index or folder
   README).
3. No folder holding content outside its stated purpose (`SYSTEM_RULES.md`
   rule 16).
4. Every JSON file's schema matches its description in `data/README.md`.
5. Every document's stated lifecycle stage
   (`GOV-documentation-lifecycle.md`) matches its actual state.

## Stale content

1. Content becomes a maintenance concern when it no longer reflects the
   current repository — not on a fixed schedule, but whenever a review or
   audit finds it (`GOV-repository-review-process.md`,
   `GOV-repository-audit-standard.md`).
2. Stale content is corrected, superseded, or archived — never silently
   left in place once identified.

## Related Documents

- `SYSTEM_RULES.md`
- `GOV-repository-review-process.md`
- `GOV-repository-audit-standard.md`
- `GOV-repository-validation-standard.md`
