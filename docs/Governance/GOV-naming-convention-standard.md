# GOV-naming-convention-standard.md — Naming Convention Standard

**Status:** Draft. **Document type:** Governance.

Consolidates the naming conventions already established across the
repository, and extends them to Governance Documents. Does not change any
existing convention.

## Purpose

To keep every file, folder, and identifier named predictably.

## Scope

Applies to files, folders, and documents added under this and future
batches.

## Existing conventions (unchanged, per Batch 1)

1. Core folders (`css`, `js`, `data`, `docs`, `assets`) are never renamed,
   per `SYSTEM_RULES.md` rule 17.
2. IDs: `c-###` clients, `t-###` tasks, `p-###` projects — permanent,
   zero-padded, never reused, per `OPERATING_MODEL.md`.
3. Dates: `YYYY-MM-DD`. Timestamps: ISO with timezone.
4. JavaScript: `camelCase`. CSS: `kebab-case` classes, design tokens in
   `:root`.
5. SOPs: `SOP-<short-name>.md`. Templates: `TPL-<short-name>.md`.
   Reports: `RPT-YYYY-MM-DD-<short-name>.md`.

## New convention introduced by this batch

6. Governance Documents: `GOV-<short-name>.md`, placed in
   `docs/Governance/`.
7. `<short-name>` is lowercase, hyphen-separated, and describes the
   document's subject in as few words as possible (e.g.
   `naming-convention-standard`).

## Rules for naming new document types

8. A new document type introduced by a future batch must define its own
   prefix and folder in the same pattern (`PREFIX-<short-name>.md` in a
   dedicated `docs/<Folder>/`), and must be added to
   `GOV-folder-structure-standard.md` and `docs/README.md`.
9. No two document types share a prefix.

## Related Documents

- `OPERATING_MODEL.md`
- `docs/README.md`
- `GOV-folder-structure-standard.md`
