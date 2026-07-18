# GOV-change-management-standard.md — Change Management Standard

**Status:** Draft. **Document type:** Governance.

Defines what counts as a change, how changes are classified, and who is
responsible for what in a change. The step-by-step change workflow itself
is defined in `CONTRIBUTING.md` — this document does not repeat it.

## Purpose

To make sure every change to the repository is deliberate, attributable,
and approved at the right level.

## Scope

Applies to all changes: data changes, document changes, and structural
(folder/file) changes.

## What counts as a change

1. Any addition, modification, or removal of a file, folder, or field in
   the repository is a change.
2. A change is either a **Minor Change** (wording, formatting,
   corrections that don't alter meaning or structure) or a **Major
   Change** (anything that alters meaning, scope, structure, or
   governance status).

## Responsibilities

1. Any collaborator (JM or AI) may propose a change.
2. Major Changes require JM approval before being treated as official,
   per `SYSTEM_RULES.md` rules 7 and 21.
3. Minor Changes still require logging in `data/history.json`, but do
   not require a new `data/decisions.json` entry unless JM requests one.
4. Changes to `SYSTEM_RULES.md` are always Major Changes and require an
   explicit logged decision, per `SYSTEM_RULES.md`'s preamble.

## Classification guide

| Change type | Example | Classification |
|---|---|---|
| Typo or formatting fix | Fixing a broken link | Minor |
| New document | Adding a new SOP | Major |
| New field on an existing schema | Adding a field to `tasks.json` | Major |
| Folder structure change | Adding a new top-level folder | Major |
| Policy change | Editing a rule in `SYSTEM_RULES.md` | Major |

## Relationship to the change workflow

The operational steps for making a change (plan, change, mirror, log,
version, comment, verify, approve) are defined in `CONTRIBUTING.md`. This
standard defines the classification and approval requirements that
workflow must satisfy; it does not add new steps to it.

## Related Documents

- `CONTRIBUTING.md`
- `SYSTEM_RULES.md`
- `GOV-approval-process.md`
- `GOV-repository-change-log-standard.md`
