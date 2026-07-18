# GOV-documentation-lifecycle.md — Documentation Lifecycle

**Status:** Draft. **Document type:** Governance.

Defines the stages a document moves through from creation to retirement,
and what each stage means. Term definitions: `GOV-glossary.md`.

## Purpose

To give every document a known state, so its reliability is clear at a
glance.

## Scope

Applies to every document defined in `GOV-documentation-governance.md`'s
scope.

## Lifecycle stages

1. **Draft** — being written or revised. Not to be treated as current
   guidance.
2. **In Review** — submitted for the Documentation Review Process
   (`GOV-documentation-review-process.md`).
3. **Approved** — passed review and received JM sign-off
   (`GOV-approval-process.md`). Recorded in `data/decisions.json`.
4. **Published** — approved and live in the repository; the current
   authoritative version.
5. **Maintained** — published and subject to ongoing upkeep under
   `GOV-repository-maintenance-standard.md`.
6. **Superseded** — replaced by a newer version of itself or by another
   document.
7. **Archived** — kept for historical reference; no longer in effect.
8. **Retired** — formally removed from active use.

## Stage transition rules

1. A document may only move to Approved after completing Documentation
   Review.
2. A document may only move to Published after it is Approved.
3. Moving a document to Superseded, Archived, or Retired is itself a
   change requiring approval, logged in `data/decisions.json` and
   `data/history.json` per `GOV-repository-change-log-standard.md`.
4. Batch 1 documents are Published and Maintained as of this batch. This
   batch does not move any of them to Superseded.

## Marking status

Each Governance Document, and new SOPs, Templates, and Reports going
forward, should carry a one-line status marker near the title (e.g.
`**Status:** Draft`). Batch 1 documents predate this convention and are
not required to be retrofitted.

## Related Documents

- `GOV-documentation-review-process.md`
- `GOV-approval-process.md`
- `GOV-repository-change-log-standard.md`
- `GOV-repository-maintenance-standard.md`
