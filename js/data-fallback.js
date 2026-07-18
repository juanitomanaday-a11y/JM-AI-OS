/*
  JM-AI-OS - data-fallback.js
  Purpose : Exact mirror of the /data JSON files, used ONLY when the browser
            blocks fetch() (i.e. index.html opened straight from disk).
  Inputs  : None. Loaded before app.js.
  Outputs : A global object with all data (see below).
  RULE    : The /data JSON files are the source of truth. Whenever any JSON
            file changes, regenerate this file so the two never drift apart.
            This is the ONE sanctioned data duplicate (SYSTEM_RULES.md rule 2).
*/

"use strict";

window.JM_FALLBACK_DATA = {
  "config": {
    "theme": "dark",
    "owner": "JM",
    "company": "",
    "repository": "JM-AI-OS",
    "app_name": "JM-AI-OS",
    "tagline": "Operations Command Center"
  },
  "version": {
    "version": "0.2.0",
    "build": "Batch 2: Governance and Documentation Standards",
    "last_updated": "2026-07-18",
    "updated_by": "AI"
  },
  "clients": {
    "_note": "Client names are placeholders for privacy. JM keeps the real name mapping privately. IDs are permanent - never change them.",
    "clients": [
      {
        "id": "c-001",
        "name": "Client 01",
        "status": "active",
        "platforms": []
      },
      {
        "id": "c-002",
        "name": "Client 02",
        "status": "active",
        "platforms": []
      },
      {
        "id": "c-003",
        "name": "Client 03",
        "status": "active",
        "platforms": []
      },
      {
        "id": "c-004",
        "name": "Client 04",
        "status": "active",
        "platforms": []
      },
      {
        "id": "c-005",
        "name": "Client 05",
        "status": "active",
        "platforms": []
      },
      {
        "id": "c-006",
        "name": "Client 06",
        "status": "active",
        "platforms": []
      }
    ]
  },
  "tasks": {
    "_note": "SAMPLE DATA. These tasks show the schema in action. Replace with real tasks. See data/README.md for field definitions.",
    "tasks": [
      {
        "id": "t-001",
        "title": "[SAMPLE] Build New Title Requirements sheet",
        "client_id": "c-001",
        "project": "Catalog Management",
        "owner": "JM",
        "assigned_ai": "AI",
        "status": "in_progress",
        "priority": "high",
        "due_date": "2026-07-24"
      },
      {
        "id": "t-002",
        "title": "[SAMPLE] Run monthly Account Health Audit",
        "client_id": "c-002",
        "project": "Account Health",
        "owner": "JM",
        "assigned_ai": "AI",
        "status": "todo",
        "priority": "high",
        "due_date": "2026-07-27"
      },
      {
        "id": "t-003",
        "title": "[SAMPLE] QA review of listing updates",
        "client_id": "c-003",
        "project": "QA",
        "owner": "JM",
        "assigned_ai": "AI",
        "status": "todo",
        "priority": "medium",
        "due_date": "2026-07-29"
      },
      {
        "id": "t-004",
        "title": "[SAMPLE] Draft SOP: weekly catalog change log",
        "client_id": "c-004",
        "project": "SOP Library",
        "owner": "JM",
        "assigned_ai": "AI",
        "status": "blocked",
        "priority": "medium",
        "due_date": "2026-07-22"
      },
      {
        "id": "t-005",
        "title": "[SAMPLE] Update Slack/email triage tracker",
        "client_id": "",
        "project": "Internal Ops",
        "owner": "JM",
        "assigned_ai": "AI",
        "status": "completed",
        "priority": "low",
        "due_date": "2026-07-15"
      },
      {
        "id": "t-006",
        "title": "[SAMPLE] Research pricing tool options",
        "client_id": "c-005",
        "project": "Tooling",
        "owner": "JM",
        "assigned_ai": "AI",
        "status": "todo",
        "priority": "low",
        "due_date": "2026-08-05"
      },
      {
        "id": "t-007",
        "title": "[SAMPLE] Verify catalog variation fix went live",
        "client_id": "c-006",
        "project": "Catalog Management",
        "owner": "JM",
        "assigned_ai": "AI",
        "status": "in_progress",
        "priority": "high",
        "due_date": "2026-07-16"
      }
    ]
  },
  "projects": {
    "_note": "SAMPLE DATA. Projects group tasks. 'client_id' is empty for internal projects.",
    "projects": [
      {
        "id": "p-001",
        "name": "Catalog Management",
        "client_id": "",
        "status": "active"
      },
      {
        "id": "p-002",
        "name": "Account Health",
        "client_id": "",
        "status": "active"
      },
      {
        "id": "p-003",
        "name": "QA",
        "client_id": "",
        "status": "active"
      },
      {
        "id": "p-004",
        "name": "SOP Library",
        "client_id": "",
        "status": "active"
      },
      {
        "id": "p-005",
        "name": "Internal Ops",
        "client_id": "",
        "status": "active"
      },
      {
        "id": "p-006",
        "name": "Tooling",
        "client_id": "",
        "status": "active"
      }
    ]
  },
  "decisions": {
    "decisions": [
      {
        "date": "2026-07-18",
        "decision": "JM-AI-OS built as a static site: HTML, CSS, vanilla JavaScript, and local JSON files only. No frameworks, no build tools, no dependencies.",
        "reason": "Maximizes portability, readability, and long-term maintainability. Any AI or human can understand and extend it.",
        "approved_by": "JM (mandated in the Master Execution Prompt)"
      },
      {
        "date": "2026-07-18",
        "decision": "JSON files in /data are the single source of truth. Browser edits are temporary until written back into the JSON files.",
        "reason": "A static site cannot save files. Keeping JSON canonical avoids hidden state and keeps Git as the change history.",
        "approved_by": "PENDING - needs JM sign-off"
      },
      {
        "date": "2026-07-18",
        "decision": "One sanctioned data mirror exists: js/data-fallback.js. It must be updated whenever any /data JSON file changes.",
        "reason": "Browsers block reading local JSON when index.html is opened directly from disk (file://). The mirror makes double-click-to-open work. On GitHub Pages the real JSON files are used.",
        "approved_by": "PENDING - needs JM sign-off"
      },
      {
        "date": "2026-07-18",
        "decision": "Adopted a Governance and Documentation Standards layer (Batch 2) in docs/Governance/, covering documentation lifecycle, version control, change management, repository maintenance, review, approval, quality, naming, folder structure, document relationships, cross-references, validation, audit, change log, and release standards.",
        "reason": "Establishes consistent rules for how documentation is created, reviewed, approved, versioned, and maintained as the repository grows, without altering SYSTEM_RULES.md or any Batch 1 document.",
        "approved_by": "PENDING - needs JM sign-off"
      }
    ]
  },
  "history": {
    "history": [
      {
        "timestamp": "2026-07-18T10:00:00+08:00",
        "actor": "JM",
        "action": "Approved the JM-AI-OS Master Execution Prompt and handed it to AI for execution."
      },
      {
        "timestamp": "2026-07-18T10:05:00+08:00",
        "actor": "AI",
        "action": "Created repository structure, all JSON schemas, dashboard, and documentation (v0.1.0 Initial Release)."
      },
      {
        "timestamp": "2026-07-18T10:06:00+08:00",
        "actor": "AI",
        "action": "Logged two architecture decisions as PENDING in decisions.json. Waiting on JM sign-off."
      },
      {
        "timestamp": "2026-07-18T15:30:00+08:00",
        "actor": "AI",
        "action": "Privacy scrub per JM instruction: client names replaced with placeholders (Client 01-06), company name removed from config. IDs unchanged. v0.1.1."
      },
      {
        "timestamp": "2026-07-18T16:00:00+08:00",
        "actor": "AI",
        "action": "Batch 2: created the Governance and Documentation Standards layer in docs/Governance/ (18 standards plus glossary and folder index). Added docs/Governance/ to the folder maps in README.md, OPERATING_MODEL.md, and docs/README.md. No Batch 1 documents rewritten. Logged as PENDING in decisions.json. v0.2.0."
      }
    ]
  }
};
