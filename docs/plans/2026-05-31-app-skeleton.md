# app-skeleton Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a lean Next.js 15 interview skeleton repo at `/Users/shira/Projects/app-skeleton` with opinionated folder structure, Tailwind, Prettier, Jest, and a CLAUDE.md that guides high-quality interview submissions.

**Architecture:** Next.js 15 App Router with `src/` directory. Business logic isolated in `src/lib/` (tested with Jest), thin API routes in `src/app/api/`, UI in `src/components/`. Supporting files: CLAUDE.md (interview guide), README.md (submission template), .env.example, .gitignore.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Prettier + prettier-plugin-tailwindcss, Jest (via next/jest), SQLite (placeholder only)

---

## File Map

| File                                | Action                       | Responsibility                          |
| ----------------------------------- | ---------------------------- | --------------------------------------- |
| `src/app/layout.tsx`                | Create (via create-next-app) | Root layout, minimal                    |
| `src/app/page.tsx`                  | Modify                       | Empty shell with `"use client"`         |
| `src/app/globals.css`               | Keep                         | Tailwind base styles                    |
| `src/app/api/.gitkeep`              | Create                       | Placeholder for API routes              |
| `src/components/.gitkeep`           | Create                       | Placeholder for shared components       |
| `src/lib/.gitkeep`                  | Create                       | Placeholder for business logic          |
| `src/lib/__tests__/example.test.ts` | Create                       | Verify Jest works                       |
| `src/db/.gitkeep`                   | Create                       | Placeholder for SQLite DB               |
| `.plans/.gitkeep`                   | Create                       | Placeholder for interview plans         |
| `docs/`                             | Exists                       | Design docs (spec + this plan)          |
| `CLAUDE.md`                         | Create                       | Interview guide for Claude              |
| `README.md`                         | Create                       | Submission template                     |
| `.env.example`                      | Create                       | API_KEY= and DATABASE_URL= placeholders |
| `.gitignore`                        | Modify                       | Add db/\*.db, .env.local                |
| `prettier.config.js`                | Create                       | Single quotes, 2-space, Tailwind plugin |
| `jest.config.ts`                    | Create                       | next/jest config, jsdom environment     |
| `next.config.ts`                    | Keep                         | Default from create-next-app            |
| `tailwind.config.ts`                | Keep                         | Default from create-next-app            |

---

## Task 1: Bootstrap Next.js 15 project

**Files:**

- Create: all `src/app/*`, `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `.gitignore`, `postcss.config.mjs`

- [ ] **Step 1: Run create-next-app in the existing directory**

```bash
cd /Users/shira/Projects/app-skeleton && npx create-next-app@latest . --typescript --tailwind --src-dir --app --no-eslint --import-alias "@/*"
```

If prompted interactively, answer:

- Would you like to use TypeScript? → Yes
- Would you like to use Tailwind CSS? → Yes
- Would you like your code inside a `src/` directory? → Yes
- Would you like to use App Router? → Yes
- Would you like to use Turbopack? → No
- Would you like to customize the import alias? → Yes → `@/*`

- [ ] **Step 2: Verify the dev server starts**

```bash
cd /Users/shira/Projects/app-skeleton && npm run dev
```

Expected: server starts at `http://localhost:3000`, no errors in terminal. Kill with Ctrl+C.

- [ ] **Step 3: Commit the bootstrap**

```bash
cd /Users/shira/Projects/app-skeleton && git add -A && git commit -m "chore: bootstrap Next.js 15 with Tailwind"
```

Expected: commit succeeds.

---

## Task 2: Add Prettier with Tailwind plugin

**Files:**

- Create: `prettier.config.js`
- Modify: `package.json` (add format script)

- [ ] **Step 1: Install Prettier and the Tailwind plugin**

```bash
cd /Users/shira/Projects/app-skeleton && npm install --save-dev prettier prettier-plugin-tailwindcss
```

Expected: packages appear in `package.json` devDependencies.

- [ ] **Step 2: Create `prettier.config.js`**

```js
/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
```

- [ ] **Step 3: Add format script to `package.json`**

In the `"scripts"` section, add:

```json
"format": "prettier --write ."
```

- [ ] **Step 4: Verify Prettier works**

```bash
cd /Users/shira/Projects/app-skeleton && npm run format
```

Expected: files are formatted with no errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/shira/Projects/app-skeleton && git add -A && git commit -m "chore: add Prettier with Tailwind class sorting"
```

---

## Task 3: Configure Jest

**Files:**

- Create: `jest.config.ts`, `src/lib/__tests__/example.test.ts`
- Modify: `package.json` (add test script)

- [ ] **Step 1: Install Jest packages**

```bash
cd /Users/shira/Projects/app-skeleton && npm install --save-dev jest @types/jest jest-environment-jsdom
```

Expected: packages appear in `package.json` devDependencies.

- [ ] **Step 2: Create `jest.config.ts`**

```ts
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
};

export default createJestConfig(config);
```

Note: `next/jest` is built into Next.js and handles TypeScript compilation — no `ts-jest` needed.

- [ ] **Step 3: Add test script to `package.json`**

In the `"scripts"` section, add:

```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 4: Write the failing placeholder test**

Create `src/lib/__tests__/example.test.ts`:

```ts
describe('example', () => {
  it('placeholder passes', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 5: Run the test and verify it passes**

```bash
cd /Users/shira/Projects/app-skeleton && npm test
```

Expected output:

```
PASS src/lib/__tests__/example.test.ts
  example
    ✓ placeholder passes
```

- [ ] **Step 6: Commit**

```bash
cd /Users/shira/Projects/app-skeleton && git add -A && git commit -m "chore: configure Jest via next/jest"
```

---

## Task 4: Strip the default Next.js page to an empty shell

**Files:**

- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace `src/app/page.tsx` with an empty shell**

```tsx
'use client';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">App</h1>
    </main>
  );
}
```

- [ ] **Step 2: Strip `src/app/globals.css` to Tailwind base only**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 3: Verify the dev server still starts cleanly**

```bash
cd /Users/shira/Projects/app-skeleton && npm run dev
```

Expected: `http://localhost:3000` renders "App" heading, no console errors. Kill with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
cd /Users/shira/Projects/app-skeleton && git add -A && git commit -m "chore: strip default page to empty shell"
```

---

## Task 5: Create skeleton folder structure

**Files:**

- Create: `src/app/api/.gitkeep`, `src/components/.gitkeep`, `src/lib/.gitkeep` (if empty), `src/db/.gitkeep`, `.plans/.gitkeep`

- [ ] **Step 1: Create placeholder directories**

```bash
cd /Users/shira/Projects/app-skeleton && \
  mkdir -p src/app/api src/components src/db .plans && \
  touch src/app/api/.gitkeep src/components/.gitkeep src/db/.gitkeep .plans/.gitkeep
```

- [ ] **Step 2: Update `.gitignore` to exclude the SQLite DB and .env.local**

Open `.gitignore` and ensure these lines are present (add if missing):

```
# local env
.env.local

# SQLite database
src/db/*.db
db/*.db
```

- [ ] **Step 3: Create `.env.example`**

```
API_KEY=
DATABASE_URL=./src/db/app.db
```

- [ ] **Step 4: Commit**

```bash
cd /Users/shira/Projects/app-skeleton && git add -A && git commit -m "chore: add skeleton folder structure and .env.example"
```

---

## Task 6: Write CLAUDE.md

**Files:**

- Create: `CLAUDE.md`

- [ ] **Step 1: Create `CLAUDE.md`**

````markdown
# Interview Guide for Claude

## Context

This is a timed take-home coding interview (typically 2 hours). The goal is working, deliberate, explainable code — not clever code. The debrief call matters as much as the submission: you will be asked to walk through decisions line by line.

## Before Writing Any Code

1. Read the brief in full
2. If anything is ambiguous, state your assumption clearly in the README under "Assumptions" — do not silently guess
3. Write a short implementation plan to `.plans/YYYY-MM-DD-plan.md` listing features in order of priority
4. Confirm the plan covers every required feature before touching code

## Architecture Rules

- **`src/lib/`** — all business logic lives here. Framework-agnostic functions only. This is what you test with Jest.
- **`src/app/api/`** — thin API routes only. Call `src/lib` functions and return JSON. No business logic here.
- **`src/components/`** — UI components. Add `"use client"` to any component that uses `useState`, `useEffect`, or event handlers.
- **`src/db/`** — SQLite database file lives here. Add to `.gitignore`. Use `better-sqlite3` for synchronous access.

## Step-by-Step Workflow (one feature at a time)

1. Pick the next feature from the plan
2. Write a Jest test for the core logic in `src/lib/__tests__/`
3. Run `npm test` — confirm the test **fails**
4. Implement the minimal code in `src/lib/` to make it pass
5. Run `npm test` — confirm the test **passes**
6. Write the API route in `src/app/api/`
7. Wire up the UI in `src/components/` or `src/app/page.tsx`
8. Start the dev server and manually verify the feature works in the browser
9. Commit: `git commit -m "feat: [feature name]"`
10. Repeat for the next feature

## Code Quality Checklist (before submitting)

- [ ] API keys are in `.env.local` — never committed to git
- [ ] `.env.example` has all required keys with empty values (committed)
- [ ] Errors surface to the user — nothing is swallowed silently
- [ ] Loading states are shown while data is fetching
- [ ] README has working setup instructions a stranger can follow
- [ ] `npm run dev` works on a fresh clone after `cp .env.example .env.local` + filling keys

## Next.js 15 Pitfalls

**1. Missing `"use client"`** — any component using `useState`, `useEffect`, `onClick`, or other browser APIs needs `"use client"` at the very top of the file. Without it you'll get a cryptic runtime error.

**2. Importing a Server Component into a Client Component** — this breaks. Pass server-rendered content as `children` instead.

**3. Fetch caching** — Next.js 15 caches `fetch()` by default. For calls that must always be fresh:

```ts
fetch(url, { cache: 'no-store' });
```
````

## What Interviewers Evaluate

| Dimension         | What they look for                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------- |
| **It works**      | All features run on a fresh clone; error states handled gracefully                       |
| **Architecture**  | Clear FE / API / lib / DB separation; intentional, explainable choices                   |
| **Code quality**  | Env vars for secrets, errors surfaced to user, readable naming, `.env.example` committed |
| **AI usage**      | Can explain every line; knows what AI wrote vs. what was changed and why                 |
| **Senior signal** | Deliberate tradeoffs stated; aware of what's missing; knows what to fix with more time   |

**Auto-fail red flags:** API key committed to git · Can't explain a core function · Frontend calls external API directly (no backend) · README missing or app won't run from a fresh clone

**Bonus green flags:** Loading states · Error messages in UI · Handles edge cases (duplicate adds, empty search, API down) · `.env.example` committed · Mentions production concerns unprompted

````

- [ ] **Step 2: Commit**

```bash
cd /Users/shira/Projects/app-skeleton && git add CLAUDE.md && git commit -m "docs: add interview CLAUDE.md"
````

---

## Task 7: Write README.md submission template

**Files:**

- Modify: `README.md`

- [ ] **Step 1: Replace the default README with the submission template**

```markdown
# [App Name]

## How to run locally

1. Clone the repo
2. Install dependencies: `npm install`
3. Copy env file: `cp .env.example .env.local`
4. Fill in the required values in `.env.local`
5. Start the dev server: `npm run dev`
6. Open `http://localhost:3000`

## Assumptions

- [List any assumptions you made about the brief here]

## What I'd improve with more time

- [List the first things you'd change and why]
```

- [ ] **Step 2: Commit**

```bash
cd /Users/shira/Projects/app-skeleton && git add README.md && git commit -m "docs: add README submission template"
```

---

## Self-Review Checklist

After completing all tasks, verify:

- [ ] `npm run dev` starts without errors
- [ ] `npm test` passes
- [ ] `npm run format` runs without errors
- [ ] `src/lib/__tests__/example.test.ts` exists and passes
- [ ] `CLAUDE.md` is in the repo root
- [ ] `README.md` has the submission template
- [ ] `.env.example` is committed with empty values
- [ ] `.env.local` is gitignored
- [ ] `src/db/*.db` is gitignored
- [ ] `.plans/.gitkeep` exists
- [ ] `docs/` contains the spec and this plan
