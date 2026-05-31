# Design: app-skeleton

**Date:** 2026-05-31
**Status:** Approved

## Overview

A lean, opinionated Next.js 15 skeleton repo to use as a personal scaffold at the start of AI-powered take-home coding
interviews. The goal is to eliminate setup decisions under time pressure and give Claude a clear guide for producing
high-quality, deliberate, explainable code.

---

## Repo Location

`/Users/shira/Projects/app-skeleton`

---

## Folder Structure

```
app-skeleton/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← root layout, minimal
│   │   ├── page.tsx            ← "use client", main UI shell (empty)
│   │   ├── globals.css
│   │   └── api/
│   │       └── .gitkeep        ← API routes go here per feature
│   ├── components/
│   │   └── .gitkeep            ← shared UI components
│   ├── lib/
│   │   └── .gitkeep            ← all business logic, framework-agnostic
│   └── db/
│       └── .gitkeep            ← SQLite file lives here (gitignored)
├── .plans/                     ← implementation plans (per interview)
├── docs/                       ← design docs, notes
├── .env.example                ← committed, shows required vars
├── .env.local                  ← gitignored, filled per interview
├── CLAUDE.md                   ← interview guide for Claude
├── README.md                   ← submission template
├── next.config.ts
├── tailwind.config.ts
├── prettier.config.js
├── jest.config.ts
└── .gitignore
```

---

## CLAUDE.md Content

Sections:

1. **Context** — timed take-home interview; goal is working, deliberate, explainable code
2. **Before writing any code** — confirm brief is read; ask clarifying questions if anything is ambiguous; write a
   short plan to `.plans/` first
3. **Architecture rules** — business logic only in `src/lib`; API routes thin (fetch + return JSON); any component with
   state/events gets `"use client"`
4. **Step-by-step workflow** — one feature at a time; write Jest test in `src/lib` before implementing; commit after
   each working feature
5. **Code quality checklist** — API keys in `.env.local` (never committed); `.env.example` updated; errors surfaced to
   user (not swallowed); consistent naming
6. **Next.js 15 pitfalls** — missing `"use client"`, importing server components into client components, fetch caching
   surprises
7. **What interviewers evaluate** — condensed rubric: does it work, architecture, code quality, AI usage quality, senior
   signal

---

## Supporting Files

### `.env.example`

```
API_KEY=
DATABASE_URL=./db/app.db
```

### `README.md` template sections

- How to run locally (`cp .env.example .env.local`, fill keys, `npm install && npm run dev`)
- Assumptions (blank — filled during interview)
- What I'd improve with more time (blank — filled during interview)

### `.gitignore`

- `.env.local`
- `db/*.db`
- `node_modules/`
- `.next/`

### `prettier.config.js`

- Single quotes, semicolons, 2-space indent, Tailwind class-sorting plugin

### `jest.config.ts`

- Configured for Next.js with `ts-jest`
- Test targets: `src/lib/**`

---

## Tooling

| Tool           | Purpose                        |
|----------------|--------------------------------|
| Next.js 15     | App Router, API routes, SSR    |
| Tailwind CSS   | Utility-first styling          |
| Prettier       | Consistent formatting          |
| Jest + ts-jest | Unit tests for `src/lib` logic |

---

## Out of Scope

- Pre-built DB utilities or working boilerplate code
- Interview-specific API integrations
- Authentication or multi-user support
