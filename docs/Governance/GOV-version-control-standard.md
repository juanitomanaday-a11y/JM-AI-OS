# GOV-version-control-standard.md — Version Control Standard

**Status:** Draft. **Document type:** Governance.

Defines how versioning works in this repository, at two levels: the
system as a whole, and individual documents.

## Purpose

To keep "what version is this" answerable at a glance, for both the
repository and any single document in it.

## Scope

Applies to the repository's overall version (`data/version.json`) and to
individual documents that carry their own revision history.

## System version

1. `data/version.json` is the single authoritative version of the
   repository as a whole. See `data/README.md`.
2. Version numbering follows `MAJOR.MINOR.PATCH`, as defined in
   `CONTRIBUTING.md`. This governance layer does not redefine that
   scheme.
3. Every meaningful change updates `data/version.json`, per
   `SYSTEM_RULES.md` rule 24.

## Document-level versioning

1. A document's own version is independent of the system version in
   `data/version.json`. The system version tracks the repository; a
   document's revision history tracks that document.
2. Governance Documents, SOPs, Templates, and Reports revised after
   initial approval should carry a short revision note (date and summary
   of what changed) rather than a rewritten history — the goal is
   traceability, not ceremony.
3. A document under active revision is in the Draft stage
   (`GOV-documentation-lifecycle.md`) until re-approved.

## Change tracking

1. Git commit history is the record of every change made to any file,
   including documents.
2. Commit messages are plain-language and descriptive, per `README.md`'s
   Git workflow section.
3. `data/history.json` is the append-only change log for business and
   documentation changes, per `SYSTEM_RULES.md` rule 6. See
   `GOV-repository-change-log-standard.md` for what belongs there.

## Related Documents

- `CONTRIBUTING.md`
- `data/README.md`
- `GOV-repository-change-log-standard.md`
- `GOV-documentation-lifecycle.md`
