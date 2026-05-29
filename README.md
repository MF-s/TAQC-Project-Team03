# GreenCity Eco-News Automation Project (Playwright + TypeScript)

Welcome to our automation repository!  
This project uses **Playwright** with the **Page Object Model (POM)** pattern and **TypeScript** to automate E2E tests for the GreenCity platform.

As a team, we are working on automating **TC1 through TC10**.  
The foundational architecture, core configuration, CI/CD pipeline, and the first two test cases (**TC1 & TC2**) are already fully implemented and ready.

---

# 🚀 Getting Started (How to Pull & Setup)

Before you start picking up tasks, make sure you have the latest codebase and all dependencies installed.

## 1. Fetch the latest updates from `main`

```bash
git checkout main
git pull origin main
```

## 2. Install project dependencies

```bash
npm ci
```

## 3. Install Playwright browsers

```bash
npx playwright install --with-deps
```

---

# 🏗️ Architecture & Git Workflow

To prevent merge conflicts and keep the repository clean:

- ❌ Do **not** write raw locators directly inside test files
- ✅ All locators and reusable actions must be placed inside:
  - `components/`
  - `pages/`

---

# 🧩 Working with `CreateNewsFormComponent`

For **TC3, TC4, TC5, and TC6**, you will be validating:

- Input fields
- Counters
- Tags
- Validation messages

All required locators are already declared inside:

```txt
src/components/create-news-form.component.ts
```

Examples:

- `titleInput`
- `contentEditor`
- `sourceInput`
- `tagsSection`

## Important

If you need additional validations or helper methods:

✅ Add them inside the existing component class  
❌ Do NOT create duplicate components for the same form

---

# 📂 Placeholders for TC7 – TC10

The placeholder files for upcoming test cases are already prepared.

| Test Case | Target File | Purpose |
|---|---|---|
| TC7 | `src/components/confirmation-modal.component.ts` | Cancel modal locators and actions |
| TC8 | `src/components/news-preview.component.ts` | Preview page validations |
| TC9 & TC10 | `src/pages/news-details.page.ts` | Single news page & Edit functionality |

---

## 🔁 Note for TC10 (Editing)

The **Edit News** form is identical to the **Create News** form.

You do **not** need to create a separate component/page for editing.

Instead:

1. Navigate using `NewsDetailsPage`
2. Click the **Edit** button
3. Re-use existing methods from:

```txt
CreateNewsFormComponent
```

---

# 📊 Test Execution & Allure Reports

The project already includes:

- ✅ Allure Reports
- ✅ `allure.step()` logging
- ✅ Automatic screenshots on failure

---

## ▶️ Run All Tests

### Run all tests in headless mode

```bash
npm run test
```

### Run a specific test file in headed mode

```bash
npx playwright test tests/create-news-validation.spec.ts --headed
```

---

# 📈 Generate Allure Report

After test execution finishes, generate and open the report:

```bash
npm run allure:report
```

This command will:

- Compile Allure results
- Attach screenshots from failed tests
- Launch a local report server in your browser

## Stop the local Allure server

Press:

```bash
Ctrl + C
```

inside the terminal.

---

# 🛠️ Branching Policy Reminder

## ❌ Never push directly to `main`

Create a separate feature branch for your work:

```bash
git checkout -b feature/tc3-tc4-validation
```

Once your task is complete:

1. Push your branch
2. Open a Pull Request against `main`

---

# ✅ Team Guidelines

- Keep tests independent
- Re-use existing components/pages
- Avoid duplicated locators
- Keep assertions readable
- Prefer reusable helper methods over repeated code

---

# 🚀 Good luck team!

Let’s write some clean and stable automation code 💚
