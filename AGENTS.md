# AGENTS.md

## Purpose
This file gives AI coding agents the minimal, project-specific context needed to contribute safely and efficiently to this Playwright automation repository.

## Project summary
- Node.js + Playwright + TypeScript automation framework
- Uses Playwright Test with `tests/`, `pages/`, `components/`, `fixtures/`, and `utils/`
- Environment values are loaded from `.env` via `utils/env.ts`
- `playwright.config.ts` is the main test configuration file

## How to run tests
- Install dependencies: `npm install` or `npm ci`
- Install Playwright browsers: `npx playwright install --with-deps`
- Run tests: `npx playwright test`
- CI uses `.github/workflows/playwright.yml` and runs `npx playwright test`

## Key files
- `package.json` — repo metadata, dependency list, and module type (`commonjs`)
- `playwright.config.ts` — Playwright config, base URL, browser project, trace settings, retries, timeout
- `utils/env.ts` — loads `.env` and exports `BASE_URL`, `HEADLESS`, `RETRIES`, `TIMEOUT`
- `tests/` — Playwright test files
- `pages/` — Page object classes
- `components/` — reusable page/component classes
- `fixtures/` — custom test fixture definitions

## Conventions for AI edits
- Add new Playwright tests under `tests/`
- Add new page objects under `pages/` and reuse `BasePage`/`BaseComponent`
- Keep test logic in Page Object classes when possible, not raw page selectors in tests
- Do not assume existing page objects beyond `BasePage` and `BaseComponent`
- Respect `.env.example` patterns and use `utils/env.ts` for config values
- Update README links if new commands or structure are added

## Notes for maintenance
- There are currently no npm script aliases for `test`, `test:headed`, or `test:ui` in `package.json`; the README documents these commands, but the package file is not yet updated
- CI depends on `npx playwright install --with-deps` and direct `npx playwright test`
