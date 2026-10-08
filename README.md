# Maxim ⚡

> **Offline-first Python IDE, distributed & collaborative first.**
> Being developed towards a polyglot runtime support IDE.

Maxim is an open-source development platform built around a single unified TypeScript core, spanning three deployment tiers:
- 🌐 **Web Edition ($0)**: Zero-install offline-first browser Python IDE powered by Pyodide (WASM) in a Web Worker and IndexedDB persistence.
- 💻 **Desktop Edition (Free Upgrade)**: Tauri application bundling an autonomous LangGraph agent loop (Planner → Coder → Tester → Reviewer), Docker container sandboxing, local Ollama LLMs, and real filesystem directory sync.
- ☁️ **Cloud Edition (Always-Free VM)**: Go Gateway, Postgres `SKIP LOCKED` job queue, ephemeral sandbox runners, and telemetry on Oracle Always-Free VM.

---

## 🏗️ Repository Architecture

```text
monorepo (pnpm + Turborepo)
├── apps/
│   ├── web/            Next.js: landing, download page, /editor (client-only)
│   └── desktop/        Tauri shell (loads the shared UI as static files)
├── packages/
│   ├── ui/             Shared React UI: Monaco, tree, tabs, diff, panels (no Next-specific code)
│   ├── core/           Interfaces, capability flags, session model, event-log schema
│   └── eval/           Task harness and scoring
├── services/
│   ├── agent/          Python: LangGraph agent (used by desktop sidecar AND cloud workers)
│   ├── gateway/        Go: auth, quotas, SSE/WebSocket streaming
│   ├── scheduler/      Go: Postgres-backed job queue, leases, retries
│   ├── sandbox/        Go: container lifecycle, limits, cleanup
│   └── indexer/        Go: tree-sitter code graph (Phase 5)
└── deploy/             docker-compose.yml, k3s manifests, Terraform, Grafana dashboards
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: `v20+` or `v22+`
- **pnpm**: `v9+` or `v10+`
- **Docker**: (for local Postgres backend)

### 2. Install Dependencies & Build
```bash
pnpm install
pnpm build
```

### 3. Start Development Server
```bash
# Starts Next.js web application (Landing + Web Editor)
pnpm --filter @maxim/web dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the landing page, or [http://localhost:3000/editor](http://localhost:3000/editor) to access the editor shell.

### 4. Start Local Database (Postgres)
```bash
docker compose up -d
```

---

## 📅 Roadmap & Execution Phases

- [x] **Phase 0: Foundations** — Monorepo (pnpm + Turbo), TypeScript, `@maxim/core` interfaces & capability flags & event-log schema, `@maxim/ui` shared components, Next.js web app shell, Docker Compose Postgres, CI workflow.
- [ ] **Phase 1: Web Edition** — Pyodide Web Worker runner, IndexedDB / OPFS storage, Monaco editor, Serwist service worker offline caching, project export/import zip.
- [ ] **Phase 2: Desktop & Agent** — Tauri shell, Python FastAPI sidecar, LangGraph agent loop, Docker sandbox runner, Ollama local models, human approval diffs.
- [ ] **Phase 3: Personalization** — Learned developer rules, repo style profile, and acceptance metric tracking.
- [ ] **Phase 4: Cloud Backend** — Go Gateway, GitHub OAuth, Postgres job queue, SSE streaming, OpenTelemetry + Prometheus/Grafana.
- [ ] **Phase 5: Code Graph** — Tree-sitter AST indexing, React Flow call-graph visualization.
- [ ] **Phase 6: Visual Debugger** — debugpy DAP integration over function graph.

---

## 📄 License
MIT
