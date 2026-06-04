# 🚀 Playwright Automation Testing Framework

A professional, production-ready automation testing framework designed for verifying web platform modules (specifically focusing on the News Creation and Validation functionality). This project is built using a modern quality assurance tech stack, prioritizing scalability, execution speed, and detailed comprehensive reporting.

---

## 🛠 Tech Stack

* **Language:** TypeScript
* **Testing Framework:** [Playwright](https://playwright.dev/)
* **Design Pattern:** Page Object Model (POM)
* **Reporting:** Allure Report + Native Playwright HTML Report
* **CI/CD Platform:** GitHub Actions (Docker-based execution)
* **Report Hosting:** GitHub Pages

---

## 🏗 Project Architecture

The repository is structured following strict software engineering principles to separate test logic from page element representations:

* `pages/` — Page Object classes containing locators and action methods for UI interaction.
* `tests/` — Test specifications (specs) categorized by logical modules (Layout, Validation, Functional Flows).
* `utils/` — Utility helpers, including `env.ts` for secure environment variable management.
* `.github/workflows/` — Continuous Integration (CI/CD) pipeline configurations.

---

## 📋 Automated Test Scenarios

The framework covers **8 core high-priority test cases** that validate the critical paths of the target module:

1. **Layout Validation:** Verifies the presence, visibility, and correct DOM injection order of all form fields.
2. **Field Validation:** Tests boundary values, edge cases, and character limits for input fields (including negative verification).
3. **Functional Flows:** Validates tag selection limits, state mutations of action buttons ("Publish" / "Create"), and dynamic overlay handling.
4. **Global Auth Setup:** Implements automated storage state preservation to handle secure session authentication globally before execution.

---

## ⚙️ Local Setup & Execution

### 1. Clone the Repository
```bash
git clone [https://github.com/MF-s/TAQC-Project-Team03.git](https://github.com/MF-s/TAQC-Project-Team03.git)
cd TAQC-Project-Team03

---

### 2. Install Dependencies
```bash
npm ci
npx playwright install --with-deps

---

### 3. Environment Configuration

Create a .env file in the root directory of the project to feed your credentials locally. This file is excluded from git tracking via .gitignore for security:
```bash
BASE_URL=https://www.greencity.cx.ua
USER_EMAIL=your-qa-user@example.com
USER_PASSWORD=your-secure-password

---

### 4. Run Tests Locally
```bash
npx playwright test

---

🚀 CI/CD Pipeline & Automated Reporting

This project features a fully automated verification cycle powered by GitHub Actions:

- Trigger Actions: Tests are automatically executed on every push or pull_request targetting the main branch.
- Dockerized Environment: Execution runs inside the official Microsoft Playwright Docker container to guarantee identical, environment-agnostic execution.

- Automated Deployment: Post-execution, the pipeline automatically:

  1. Compiles a fresh Allure Report.

  2. Injects chronological testing history.

  3. Purges stale artifacts and deploys the production-ready static report site directly to the gh-pages branch

📊 Live Interactive Test Reports: https://mf-s.github.io/TAQC-Project-Team03/#

🛑 Known System Limitations

- Certain test cases are expected to fail during execution due to uncovered product defects and deviations from the technical specifications (e.g., validation limit mismatches in input fields). These are deliberately tracked within the reporting dashboard.