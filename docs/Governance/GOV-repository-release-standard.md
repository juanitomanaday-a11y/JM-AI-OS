# GOV-repository-release-standard.md — Repository Release Standard

**Status:** Draft. **Document type:** Governance.

Defines what constitutes a release of the repository. Does not redefine
the version numbering scheme — see `CONTRIBUTING.md`.

## Purpose

To make "this is a milestone" a checkable, recorded event rather than an
informal judgment.

## Scope

Applies to any MAJOR version increment of the repository, per
`CONTRIBUTING.md`'s version numbering.

## What a release is

1. A release corresponds to a MAJOR version increment in
   `data/version.json` (e.g. `0.x.x` → `1.0.0`), per `CONTRIBUTING.md`.
2. A release is a milestone approved by JM, not a routine change.

## Release criteria

1. Repository Validation passes, per
   `GOV-repository-validation-standard.md`.
2. A Repository Audit has been completed and its findings addressed, per
   `GOV-repository-audit-standard.md`.
3. No document the release depends on is left in the Draft or In Review
   lifecycle stage.
4. JM has approved the release, recorded in `data/decisions.json`.

## Release record

1. `data/version.json` is updated: `version`, `build`, `last_updated`,
   `updated_by`.
2. `data/decisions.json` gets an entry recording the release and its
   approval.
3. `data/history.json` gets an entry recording the release action.

## Related Documents

- `CONTRIBUTING.md`
- `data/README.md`
- `GOV-repository-validation-standard.md`
- `GOV-repository-audit-standard.md`
