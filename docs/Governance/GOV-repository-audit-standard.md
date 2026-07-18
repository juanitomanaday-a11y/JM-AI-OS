# GOV-repository-audit-standard.md — Repository Audit Standard

**Status:** Draft. **Document type:** Governance.

Defines the standard for a formal repository audit — the most
comprehensive form of check, distinct from the lighter-weight Repository
Review (`GOV-repository-review-process.md`).

## Purpose

To provide a comprehensive, recorded verification that the repository
complies with every governance standard, at a point in time.

## Scope

Applies to the entire repository, evaluated against every standard in
`docs/Governance/`.

## What an audit covers

1. All Repository Validation criteria
   (`GOV-repository-validation-standard.md`).
2. All Repository Quality attributes
   (`GOV-repository-quality-standard.md`).
3. Compliance of every document with
   `GOV-documentation-quality-standard.md`.
4. Confirmation that no duplicate or conflicting concepts exist across
   documents.
5. Confirmation that every document's recorded lifecycle stage matches
   its actual state.

## Difference from a review

A Repository Review (`GOV-repository-review-process.md`) is a lighter,
more frequent check focused on structure and consistency. A Repository
Audit is comprehensive, covers every standard, and produces a formal,
recorded outcome.

## Audit outcome

1. The audit's findings are recorded in `data/decisions.json` as a
   decision entry, with `approved_by` set once JM has reviewed the
   findings.
2. Any issue found is handled as a change, classified per
   `GOV-change-management-standard.md`.
3. An audit does not itself change anything; it only records findings.

## When an audit happens

An audit may be requested by JM, or precede a Repository Release
(`GOV-repository-release-standard.md`). This standard does not mandate a
fixed schedule or automated trigger.

## Related Documents

- `GOV-repository-review-process.md`
- `GOV-repository-validation-standard.md`
- `GOV-repository-quality-standard.md`
- `GOV-repository-release-standard.md`
