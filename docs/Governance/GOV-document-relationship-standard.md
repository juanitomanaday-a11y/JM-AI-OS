# GOV-document-relationship-standard.md — Document Relationship Standard

**Status:** Draft. **Document type:** Governance.

Defines how documents relate to one another structurally. For the
mechanics of linking between documents, see
`GOV-cross-reference-standard.md`.

## Purpose

To make dependencies between documents explicit, so a change in one
document's meaning can be traced to what it affects.

## Scope

Applies to all documents in the repository.

## Relationship types

1. **Governs** — a document sets a rule or standard that another document
   must comply with (e.g. `SYSTEM_RULES.md` governs everything).
2. **Implements** — a document puts a governing document's rule into
   practice (e.g. `CONTRIBUTING.md` implements `SYSTEM_RULES.md`).
3. **Related** — documents commonly used together but without a strict
   governs/implements relationship.
4. **Supersedes / Superseded By** — one document formally replaces
   another, per `GOV-documentation-lifecycle.md`.

## Recording relationships

1. Each document should carry a "Related Documents" section listing the
   documents it depends on or is commonly read alongside.
2. A governs relationship does not need to be restated in every
   implementing document beyond a reference — the rule lives once, in the
   governing document.
3. Batch 1 documents are not required to be retrofitted with a Related
   Documents section; documents in this batch and future batches include
   one.

## Related Documents

- `GOV-cross-reference-standard.md`
- `GOV-documentation-lifecycle.md`
- `GOV-documentation-governance.md`
