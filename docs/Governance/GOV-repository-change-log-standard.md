# GOV-repository-change-log-standard.md — Repository Change Log Standard

**Status:** Draft. **Document type:** Governance.

Defines what belongs in the repository's change log (`data/history.json`)
and how it differs from the decision log (`data/decisions.json`). Does
not redefine either schema — see `data/README.md`.

## Purpose

To keep the distinction between "what happened" (history) and "what was
decided" (decisions) clear and consistently applied.

## Scope

Applies to every change made to the repository, including documentation
changes introduced by this and future batches.

## The two logs

1. `data/history.json` is the append-only record of actions — what
   changed, when, and by whom, per `SYSTEM_RULES.md` rule 6.
2. `data/decisions.json` is the record of official decisions — what was
   decided, why, and whether JM approved it, per `SYSTEM_RULES.md` rule 7.
3. Every Major Change gets an entry in both. Every Minor Change gets an
   entry in `data/history.json` only, per
   `GOV-change-management-standard.md`.

## What qualifies as a loggable action

1. Creating, revising, or moving a document.
2. Any change to `/data`.
3. Any change to the folder structure.
4. Completing a Repository Review or Repository Audit.

## Log entry requirements

Use the fields already defined in `data/README.md` (`timestamp`, `actor`,
`action` for history; `date`, `decision`, `reason`, `approved_by` for
decisions). This standard does not add new fields.

## Related Documents

- `data/README.md`
- `SYSTEM_RULES.md`
- `GOV-change-management-standard.md`
- `GOV-approval-process.md`
