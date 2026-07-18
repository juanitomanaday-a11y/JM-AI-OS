# GOV-folder-structure-standard.md — Folder Structure Standard

**Status:** Draft. **Document type:** Governance.

Defines the rules governing the repository's folder structure. The
current, authoritative folder map lives in `README.md` and
`OPERATING_MODEL.md`; this document does not repeat it, only the rules
that govern it.

## Purpose

To keep the repository's structure predictable and prevent uncontrolled
growth of folders.

## Scope

Applies to every folder in the repository.

## Rules

1. Every folder has exactly one purpose, per `SYSTEM_RULES.md` rule 16.
2. Core folders (`css`, `js`, `data`, `docs`, `assets`) are never renamed,
   per `SYSTEM_RULES.md` rule 17.
3. A new top-level folder may only be created when it is required to hold
   a new, distinct document or content type that does not fit an existing
   folder's stated purpose — and only as a Major Change
   (`GOV-change-management-standard.md`), approved by JM.
4. A new subfolder under `docs/` follows the same rule: one purpose, one
   naming convention, documented in `docs/README.md`.
5. Nothing is stored outside its designated folder. Documentation lives
   under `docs/`; business data lives under `data/`; there is no overlap.

## Current subfolders under docs/

`docs/SOP/`, `docs/Templates/`, `docs/Reports/` (Batch 1), and
`docs/Governance/` (this batch). See `docs/README.md` for the
authoritative, current list.

## Related Documents

- `SYSTEM_RULES.md`
- `README.md`
- `OPERATING_MODEL.md`
- `docs/README.md`
- `GOV-naming-convention-standard.md`
