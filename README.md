# play-wright-tdd

A Playwright-based test automation framework for web applications, supporting cross-browser testing, Page Object Model (POM), environment-based configuration, tag-based execution, and HTML reporting.  
The framework is designed for maintainability, scalability, and easy integration with CI/CD pipelines.

---

## 🚀 Features
- Cross-browser testing (Chrome, Firefox, Safari)
- Page Object Model (POM) design pattern
- Centralized locator and config management (JSON-based)
- Tag-based test execution (`@smoke`, `@login`, etc.)
- HTML report generation
- Parallel execution support
- CI/CD friendly (Jenkins, GitHub Actions)

---

## 📦 Prerequisites
Ensure the following are installed on your system:

- **Node.js** (v16 or above)
- **npm** (comes with Node.js)

Verify installation:
```bash
node -v
npm -v

⚙️ Installation
Clone the repository and install dependencies:
npm install

This will install Playwright and all required packages.
▶️ How to Run Tests
1️⃣ Run All Tests
npm run test

2️⃣ Run Tests by Tag
You can execute tests based on tags such as @smoke, @login, etc.
npm run tag -- "@smoke"
More examples:
npm run tag -- "@smoke|@regression"

3️⃣ Run Tests in UI Mode
npm run test:ui

4️⃣ View HTML Report
After execution, open the HTML report:
npm run report
Reports are generated inside the reports/ folder.

📁 Project Folder Structure play-wright-tdd
play-wright-tdd/
│
├── node_modules/          # Installed dependencies
│
├── pages/                 # Page Object Model (POM) classes
│   ├── BasePage.js
│   └── DemoWebShopPage.js
│
├── tests/                 # Test specifications
│   └── login.spec.js
│
├── utils/                 # Utility/helper classes
│   ├── json_utility.js
│   └── screenshot_util.js
│
├── resources/         # Test resources
│   ├── config.json    # Environment & execution config
│   └── locators.json  # Centralized locators
│
├── reports/               # Playwright HTML reports
│
├── test-results/          # Raw Playwright execution results
│
├── playwright.config.js   # Playwright configuration
├── package.json           # Project scripts & dependencies
├── package-lock.json      # Dependency lock file
├── .gitignore
└── README.md
