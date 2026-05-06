# 🎭 Playwright Test Framework (TypeScript)

## 📌 Project Description

This project is a basic test automation framework built with **Playwright** and **TypeScript**.

The goal of this project is to provide a clean and scalable foundation for automated UI testing using modern approaches such as:

* Page Object Model (POM)
* Component-based architecture
* Environment-based configuration

⚠️ At this stage, no actual tests or page objects are implemented. This is only the initial setup.

---

## ⚙️ Tech Stack

* Node.js
* Playwright
* TypeScript
* dotenv

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MF-s/TAQC-Project-Team03.git
cd YOUR_REPO
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Then update values if needed:

```
BASE_URL=https://www.greencity.cx.ua/#/greenCity
HEADLESS=true
RETRIES=0
TIMEOUT=30000
```

---

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npm run test:headed
```

Run with UI:

```bash
npm run test:ui
```

---

## 📁 Project Structure

```
.
├── tests/        # Test files
├── pages/        # Page Objects (future implementation)
├── components/   # Reusable UI components
├── fixtures/     # Custom test fixtures
├── utils/        # Helper functions (e.g., env config)
├── playwright.config.ts
├── .env.example
└── README.md
```

---

## 🔧 Configuration

The project uses environment variables via `.env`:

| Variable | Description                  | Default |
| -------- | ---------------------------- | ------- |
| BASE_URL | Base application URL         | —       |
| HEADLESS | Run browser in headless mode | true    |
| RETRIES  | Number of retries            | 0       |
| TIMEOUT  | Test timeout (ms)            | 30000   |

---

## 📌 Notes

* `.env` file is ignored by Git (not committed)
* Use `.env.example` as a template
* Versions of dependencies are fixed for consistency across the team

---

## 👥 Team Workflow (Basic)

1. Create a new branch:

```bash
git checkout -b feature/your-task
```

2. Commit changes:

```bash
git add .
git commit -m "your message"
```

3. Push branch:

```bash
git push origin feature/your-task
```

4. Create a Pull Request on GitHub
