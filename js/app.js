/*
  JM-AI-OS — app.js
  Purpose : Loads all JSON data and renders every dashboard section.
  Inputs  : /data/*.json (preferred), or window.JM_FALLBACK_DATA from
            js/data-fallback.js when the browser blocks local file reads.
  Outputs : DOM content inside index.html. Nothing is written to disk —
            browser edits are temporary until the JSON files are updated.
  Rules   : Small functions, one job each. No frameworks. No hardcoded
            business data — everything comes from /data.
*/

"use strict";

/* =========================================================
   1. DATA LOADING
   ========================================================= */

// Names of the JSON files we load, without extension.
const DATA_FILES = ["config", "version", "clients", "tasks", "projects", "decisions", "history"];

// All loaded data lives here after startup. Read-only by convention.
const DB = {};

// True when we had to use the offline mirror instead of live JSON.
let usingFallback = false;

// Fetch one JSON file from /data. Throws if it cannot be loaded.
async function fetchJson(name) {
  const response = await fetch("data/" + name + ".json");
  if (!response.ok) {
    throw new Error("Could not load data/" + name + ".json");
  }
  return response.json();
}

// Load every data file. If fetch is blocked (file:// mode), fall back
// to the mirror in js/data-fallback.js and show the offline banner.
async function loadAllData() {
  try {
    const results = await Promise.all(DATA_FILES.map(fetchJson));
    DATA_FILES.forEach(function (name, i) { DB[name] = results[i]; });
  } catch (error) {
    if (window.JM_FALLBACK_DATA) {
      usingFallback = true;
      DATA_FILES.forEach(function (name) {
        DB[name] = window.JM_FALLBACK_DATA[name];
      });
      show("offline-banner");
    } else {
      document.body.innerHTML =
        "<p style='padding:40px;font-family:sans-serif'>Could not load data. " +
        "Open this page through GitHub Pages or a local server, " +
        "or restore js/data-fallback.js.</p>";
      throw error;
    }
  }
}

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */

function el(id) { return document.getElementById(id); }
function show(id) { el(id).classList.remove("hidden"); }
function hide(id) { el(id).classList.add("hidden"); }

// Safe text setter — avoids injecting HTML from data files.
function setText(id, text) { el(id).textContent = text; }

// Look up a client name by id. Returns "—" for internal work.
function clientName(clientId) {
  const client = DB.clients.clients.find(function (c) { return c.id === clientId; });
  return client ? client.name : "—";
}

// Today's date as YYYY-MM-DD, for overdue checks.
function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function isOverdue(task) {
  return task.status !== "completed" && task.due_date && task.due_date < todayIso();
}

// Turn "in_progress" into "In progress" for display.
function pretty(value) {
  const text = String(value).replace(/_/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Show the "edits are temporary" banner (once per session is fine).
function flagTemporaryEdit() {
  show("edit-banner");
}

/* =========================================================
   3. HEADER + FOOTER
   ========================================================= */

function renderHeader() {
  const cfg = DB.config;
  const ver = DB.version;
  setText("app-name", cfg.app_name || cfg.repository);
  setText("app-tagline", cfg.tagline || "");
  setText("app-company", cfg.company + " · Owner: " + cfg.owner);
  setText("app-version", "v" + ver.version + (usingFallback ? " · offline" : ""));
  setText("footer-updated", "Last updated " + ver.last_updated + " by " + ver.updated_by);
}

/* =========================================================
   4. EXECUTIVE SUMMARY
   ========================================================= */

function renderSummary() {
  const tasks = DB.tasks.tasks;
  const stats = [
    { label: "Total Tasks", value: tasks.length, css: "" },
    { label: "High Priority", value: tasks.filter(function (t) { return t.priority === "high" && t.status !== "completed"; }).length, css: "hot" },
    { label: "Blocked", value: tasks.filter(function (t) { return t.status === "blocked"; }).length, css: "warn" },
    { label: "Completed", value: tasks.filter(function (t) { return t.status === "completed"; }).length, css: "good" },
    { label: "Overdue", value: tasks.filter(isOverdue).length, css: "warn" }
  ];

  const container = el("summary-cards");
  container.innerHTML = "";
  stats.forEach(function (stat) {
    const card = document.createElement("div");
    card.className = "stat-card " + stat.css;
    const num = document.createElement("div");
    num.className = "num";
    num.textContent = stat.value;
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = stat.label;
    card.appendChild(num);
    card.appendChild(label);
    container.appendChild(card);
  });
}

/* =========================================================
   5. TASK MANAGER
   ========================================================= */

// Current view settings, driven by the controls above the table.
const taskView = { search: "", status: "", priority: "", client: "", sort: "due_date" };

const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 };
const STATUS_ORDER = { blocked: 0, in_progress: 1, todo: 2, completed: 3 };

// Apply search + filters to the task list.
function visibleTasks() {
  const query = taskView.search.toLowerCase();
  return DB.tasks.tasks.filter(function (t) {
    if (taskView.status && t.status !== taskView.status) return false;
    if (taskView.priority && t.priority !== taskView.priority) return false;
    if (taskView.client && t.client_id !== taskView.client) return false;
    if (!query) return true;
    const haystack = [t.id, t.title, clientName(t.client_id), t.project, t.owner, t.assigned_ai].join(" ").toLowerCase();
    return haystack.indexOf(query) !== -1;
  });
}

// Sort a copy of the task list by the chosen column.
function sortTasks(tasks) {
  const key = taskView.sort;
  return tasks.slice().sort(function (a, b) {
    if (key === "priority") return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
    if (key === "status") return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    return String(a[key]).localeCompare(String(b[key]));
  });
}

// Build one editable dropdown cell (used for status and priority).
function buildSelectCell(task, field, options) {
  const cell = document.createElement("td");
  const select = document.createElement("select");
  select.className = "cell-select";
  options.forEach(function (option) {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = pretty(option);
    if (task[field] === option) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener("change", function () {
    task[field] = select.value;   // temporary, in-memory only
    flagTemporaryEdit();
    renderSummary();
    renderTasks();
    renderClients();
  });
  cell.appendChild(select);
  return cell;
}

// Build one plain editable text cell (title, project, owner, AI, due date).
function buildEditableCell(task, field, extraClass) {
  const cell = document.createElement("td");
  if (extraClass) cell.className = extraClass;
  cell.textContent = task[field];
  cell.setAttribute("contenteditable", "true");
  cell.setAttribute("spellcheck", "false");
  cell.addEventListener("blur", function () {
    if (cell.textContent !== task[field]) {
      task[field] = cell.textContent.trim();   // temporary, in-memory only
      flagTemporaryEdit();
      renderSummary();
    }
  });
  return cell;
}

function buildBadge(value) {
  const badge = document.createElement("span");
  badge.className = "badge " + value;
  badge.textContent = pretty(value);
  return badge;
}

function renderTasks() {
  const tbody = el("task-tbody");
  tbody.innerHTML = "";
  const tasks = sortTasks(visibleTasks());

  tasks.forEach(function (task) {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.className = "mono";
    idCell.textContent = task.id;
    row.appendChild(idCell);

    row.appendChild(buildEditableCell(task, "title", "title-cell"));

    const clientCell = document.createElement("td");
    clientCell.textContent = clientName(task.client_id);
    row.appendChild(clientCell);

    row.appendChild(buildEditableCell(task, "project"));
    row.appendChild(buildEditableCell(task, "owner"));
    row.appendChild(buildEditableCell(task, "assigned_ai"));

    row.appendChild(buildSelectCell(task, "status", ["todo", "in_progress", "blocked", "completed"]));
    row.appendChild(buildSelectCell(task, "priority", ["high", "medium", "low"]));

    const dueCell = buildEditableCell(task, "due_date", "mono");
    if (isOverdue(task)) dueCell.classList.add("overdue");
    row.appendChild(dueCell);

    // Status/priority badges are shown inside the summary + client cards;
    // the table uses dropdowns so values stay editable.
    tbody.appendChild(row);
  });

  if (tasks.length === 0) { show("task-empty"); } else { hide("task-empty"); }
}

// Fill the client filter dropdown from clients.json.
function populateClientFilter() {
  const select = el("filter-client");
  DB.clients.clients.forEach(function (client) {
    const option = document.createElement("option");
    option.value = client.id;
    option.textContent = client.name;
    select.appendChild(option);
  });
}

// Wire up search, filter, and sort controls.
function bindTaskControls() {
  el("task-search").addEventListener("input", function (e) {
    taskView.search = e.target.value; renderTasks();
  });
  el("filter-status").addEventListener("change", function (e) {
    taskView.status = e.target.value; renderTasks();
  });
  el("filter-priority").addEventListener("change", function (e) {
    taskView.priority = e.target.value; renderTasks();
  });
  el("filter-client").addEventListener("change", function (e) {
    taskView.client = e.target.value; renderTasks();
  });
  el("sort-tasks").addEventListener("change", function (e) {
    taskView.sort = e.target.value; renderTasks();
  });
}

/* =========================================================
   6. CLIENT OVERVIEW
   ========================================================= */

function renderClients() {
  const container = el("client-cards");
  container.innerHTML = "";

  DB.clients.clients.forEach(function (client) {
    const openCount = DB.tasks.tasks.filter(function (t) {
      return t.client_id === client.id && t.status !== "completed";
    }).length;

    const card = document.createElement("div");
    card.className = "client-card";

    const name = document.createElement("h3");
    name.textContent = client.name;

    const cid = document.createElement("div");
    cid.className = "cid";
    cid.textContent = client.id + " · " + client.status;

    const stat = document.createElement("div");
    stat.className = "cstat";
    stat.innerHTML = "";
    const strong = document.createElement("strong");
    strong.textContent = openCount;
    stat.appendChild(strong);
    stat.appendChild(document.createTextNode(" open task" + (openCount === 1 ? "" : "s")));

    card.appendChild(name);
    card.appendChild(cid);
    card.appendChild(stat);
    container.appendChild(card);
  });
}

/* =========================================================
   7. DECISION LOG
   ========================================================= */

function renderDecisions() {
  const container = el("decision-list");
  container.innerHTML = "";

  DB.decisions.decisions.forEach(function (decision) {
    const pending = String(decision.approved_by).toUpperCase().indexOf("PENDING") !== -1;

    const item = document.createElement("div");
    item.className = "decision-item" + (pending ? " pending" : "");

    const date = document.createElement("div");
    date.className = "d-date";
    date.textContent = decision.date;

    const text = document.createElement("div");
    text.className = "d-text";
    text.textContent = decision.decision;

    const reason = document.createElement("div");
    reason.className = "d-reason";
    reason.textContent = decision.reason;

    const approved = document.createElement("div");
    approved.className = "d-approved";
    approved.textContent = "Approved by: " + decision.approved_by;

    item.appendChild(date);
    item.appendChild(text);
    item.appendChild(reason);
    item.appendChild(approved);
    container.appendChild(item);
  });
}

/* =========================================================
   8. AI ACTIVITY FEED
   ========================================================= */

// Map an actor name to a CSS class so the timeline dot gets its color.
function actorClass(actor) {
  const key = String(actor).toLowerCase();
  if (key === "AI") return "actor-AI";
  if (key === "AI") return "actor-AI";
  if (key === "AI") return "actor-AI";
  if (key === "jm") return "actor-jm";
  return "";
}

function renderActivity() {
  const container = el("activity-feed");
  container.innerHTML = "";

  // Newest first.
  const entries = DB.history.history.slice().reverse();

  entries.forEach(function (entry) {
    const item = document.createElement("div");
    item.className = "feed-item " + actorClass(entry.actor);

    const meta = document.createElement("div");
    meta.className = "f-meta";
    const actor = document.createElement("span");
    actor.className = "f-actor";
    actor.textContent = entry.actor;
    meta.appendChild(actor);
    meta.appendChild(document.createTextNode(" · " + entry.timestamp));

    const action = document.createElement("div");
    action.className = "f-action";
    action.textContent = entry.action;

    item.appendChild(meta);
    item.appendChild(action);
    container.appendChild(item);
  });
}

/* =========================================================
   9. STARTUP
   ========================================================= */

async function start() {
  await loadAllData();
  renderHeader();
  renderSummary();
  populateClientFilter();
  bindTaskControls();
  renderTasks();
  renderClients();
  renderDecisions();
  renderActivity();
}

document.addEventListener("DOMContentLoaded", start);
