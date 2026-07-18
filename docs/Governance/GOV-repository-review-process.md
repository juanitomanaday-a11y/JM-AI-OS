# GOV-repository-review-process.md — Repository Review Process

**Status:** Draft. **Document type:** Governance.

Defines the standard for reviewing the repository as a whole — its
structure, consistency, and compliance with governance standards. For
reviewing a single document, see `GOV-documentation-review-process.md`.

## Purpose

To catch structural and cross-file problems that a single-document review
would miss.

## Scope

Applies to the repository's structure, folder organization, naming, and
cross-document consistency.

## What a repository review covers

1. Folder structure against `GOV-folder-structure-standard.md`.
2. Naming against `GOV-naming-convention-standard.md`.
3. Cross-references and document relationships against
   `GOV-cross-reference-standard.md` and
   `GOV-document-relationship-standard.md`.
4. Overall repository quality against `GOV-repository-quality-standard.md`.

## When a review happens

A repository review may be triggered by a Major Change, by JM's request,
or ahead of a release (`GOV-repository-release-standard.md`). This
standard does not mandate a fixed schedule or automated trigger.

## Outcome

1. Findings are recorded: where they materially affect repository state,
   in `data/history.json`; where they represent an official conclusion,
   in `data/decisions.json`.
2. Findings are addressed as changes, classified and handled per
   `GOV-change-management-standard.md`.
3. A repository review does not itself constitute a full audit; see
   `GOV-repository-audit-standard.md` for the more rigorous, comprehensive
   form.

## Related Documents

- `GOV-repository-audit-standard.md`
- `GOV-repository-quality-standard.md`
- `GOV-folder-structure-standard.md`
- `GOV-naming-convention-standard.md`
