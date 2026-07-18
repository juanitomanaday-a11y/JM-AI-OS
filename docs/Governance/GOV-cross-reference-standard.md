# GOV-cross-reference-standard.md — Cross-Reference Standard

**Status:** Draft. **Document type:** Governance.

Defines how one document links to or cites another. For the conceptual
relationship between documents, see
`GOV-document-relationship-standard.md`.

## Purpose

To keep references between documents unambiguous and checkable.

## Scope

Applies to any place one document names, links to, or cites another.

## Rules

1. Reference a document by its exact file name (e.g. `SYSTEM_RULES.md`),
   not a paraphrase.
2. Reference a specific rule by document and rule number where one exists
   (e.g. "`SYSTEM_RULES.md` rule 7"), rather than restating the rule's
   text.
3. Use relative paths for links within the repository.
4. Do not copy content from another document into a new one when a
   reference will do — this prevents the two from drifting apart. See
   `GOV-repository-quality-standard.md` on duplication.
5. A cross-reference must resolve — the named document, section, or rule
   must actually exist. Broken cross-references are a maintenance issue
   (`GOV-repository-maintenance-standard.md`) and a validation failure
   (`GOV-repository-validation-standard.md`).

## Related Documents

- `GOV-document-relationship-standard.md`
- `GOV-repository-validation-standard.md`
- `GOV-repository-quality-standard.md`
