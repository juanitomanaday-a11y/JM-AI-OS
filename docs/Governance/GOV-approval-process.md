# GOV-approval-process.md — Approval Process

**Status:** Draft. **Document type:** Governance.

Formalizes how JM approval — already required by `SYSTEM_RULES.md` rules
7 and 21 — applies specifically to documentation.

## Purpose

To make "official" a checkable state, not a matter of interpretation.

## Scope

Applies to every document and every Major Change, per
`GOV-change-management-standard.md`.

## What requires approval

1. Any new document, before it moves from In Review to Approved
   (`GOV-documentation-lifecycle.md`).
2. Any Major Change to a Published document.
3. Any change to a governance standard itself.

## What does not require a new approval

1. Minor Changes, per `GOV-change-management-standard.md`, still require
   a `data/history.json` entry but not a new `data/decisions.json` entry.

## How approval is recorded

1. Approval is recorded as an entry in `data/decisions.json` with
   `approved_by` set to `JM`, per `data/README.md`.
2. Until that entry exists, the document or change is not official, per
   `SYSTEM_RULES.md` rule 7.
3. A pending approval is marked `PENDING - needs JM sign-off`, per the
   existing `decisions.json` convention.

## Approval criteria

1. The document or change has passed the applicable review
   (`GOV-documentation-review-process.md` or
   `GOV-repository-review-process.md`).
2. It does not violate `SYSTEM_RULES.md`.
3. It does not conflict with any other Published document.

## Related Documents

- `SYSTEM_RULES.md`
- `data/README.md`
- `GOV-documentation-review-process.md`
- `GOV-change-management-standard.md`
