# GOV-repository-quality-standard.md — Repository Quality Standard

**Status:** Draft. **Document type:** Governance.

Defines what quality means for the repository as a structural whole. For
the quality of individual documents, see
`GOV-documentation-quality-standard.md`.

## Purpose

To keep the repository internally consistent as it grows across many
documents and contributors.

## Scope

Applies to the repository's structure and the relationships between its
files.

## Quality attributes

1. **Consistency** — the same concept is named and defined the same way
   everywhere it appears.
2. **Completeness** — every folder's stated purpose is fulfilled; no
   missing index or README where one is expected.
3. **Integrity** — every cross-reference resolves; every schema described
   in `data/README.md` matches the actual JSON files.
4. **Portability** — the repository continues to meet the
   zero-dependency, zero-build guarantees in `SYSTEM_RULES.md`.
5. **No duplication** — a concept, rule, or definition exists in exactly
   one authoritative place; other documents reference it rather than
   restate it.

## How quality is checked

Repository quality is evaluated during a Repository Review
(`GOV-repository-review-process.md`) or a Repository Audit
(`GOV-repository-audit-standard.md`), and confirmed structurally via
Repository Validation (`GOV-repository-validation-standard.md`).

## Related Documents

- `GOV-documentation-quality-standard.md`
- `GOV-repository-review-process.md`
- `GOV-repository-audit-standard.md`
- `GOV-repository-validation-standard.md`
