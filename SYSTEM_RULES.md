# SYSTEM_RULES.md — The Constitution of JM-AI-OS

These rules are permanent. Breaking one requires a logged decision in
`data/decisions.json` approved by JM.

## Data

1. JSON files in `/data` are the only source of truth.
2. Never duplicate business data.
   **Single sanctioned exception:** `js/data-fallback.js`, an auto-generated
   mirror that makes the app work when opened directly from disk. It must be
   regenerated every time a JSON file changes. It is a copy, never an original.
3. Never hardcode client information (or any business data) in HTML, CSS, or JS.
4. Never change or reuse an existing ID (`c-###`, `t-###`, `p-###`).
5. Never delete or rename a JSON field. Extend schemas by adding fields only.
6. `history.json` is append-only. Every meaningful change gets a log entry.
7. Nothing is official until it appears in `decisions.json` with JM approval.

## Technology

8. Never introduce frameworks (React, Vue, Angular, Svelte, etc.).
9. Never introduce dependencies, package managers, or vendor lock-in.
10. Never introduce build steps, bundlers, or minifiers.
11. Never introduce servers, databases, APIs, or cloud services as requirements.
12. The app must always work by opening `index.html` in a modern browser,
    fully offline, and by direct GitHub Pages deployment.

## Code quality

13. Never break backwards compatibility.
14. Prefer readability over optimization. If two implementations work,
    choose the simpler one.
15. Keep JavaScript modular: every function has one responsibility.
16. Every folder has one purpose. Never create unnecessary folders.
17. Never rename core folders (`css`, `js`, `data`, `docs`, `assets`).
18. Never minify code, compress JSON, or obfuscate JavaScript.
19. Every JS and CSS file begins with a comment block: Purpose, Inputs, Outputs.

## Process

20. Pipeline order is fixed: AI (research) → AI (architecture) →
    AI (execution) → JM (approval).
21. JM is the final decision maker. No exceptions.
22. No AI guesses missing facts, IDs, or paths. Ask JM one question instead.
23. Assumptions are marked `[ASSUMPTION:]`; items needing sign-off `[CONFIRM:]`.
24. Every change updates `version.json` and `history.json` before it is done.
