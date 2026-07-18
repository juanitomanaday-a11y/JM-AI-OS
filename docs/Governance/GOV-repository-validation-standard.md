# GOV-repository-validation-standard.md — Repository Validation Standard

**Status:** Draft. **Document type:** Governance.

Defines the criteria the repository must meet to be considered valid.
This is a standard, not an automated check — no automation is introduced
by this document.

## Purpose

To define, in checkable terms, what "the repository is in a valid state"
means.

## Scope

Applies to the entire repository: structure, data, and documentation.

## Validation criteria

1. Every JSON file in `/data` matches the schema described in
   `data/README.md`.
2. Every ID (`c-###`, `t-###`, `p-###`) is unique and zero-padded, per
   `SYSTEM_RULES.md` rule 4.
3. Every folder holds only content matching its stated purpose, per
   `GOV-folder-structure-standard.md`.
4. Every document follows the naming convention for its type, per
   `GOV-naming-convention-standard.md`.
5. Every cross-reference resolves, per `GOV-cross-reference-standard.md`.
6. `js/data-fallback.js` matches the current contents of `/data`, per
   `SYSTEM_RULES.md` rule 2.
7. No document exists outside the lifecycle states defined in
   `GOV-documentation-lifecycle.md`.

## When validation happens

Validation is performed as part of a Repository Review or Repository
Audit, and before a Repository Release. It is a manual check against the
criteria above; this standard does not mandate or specify any automated
tooling.

## Related Documents

- `data/README.md`
- `SYSTEM_RULES.md`
- `GOV-folder-structure-standard.md`
- `GOV-repository-audit-standard.md`
- `GOV-repository-release-standard.md`
