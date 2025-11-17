# Volvo Cars US Homepage - E2E Test Suite

A comprehensive end-to-end (E2E) testing portfolio project demonstrating modern web automation best practices using **Playwright**, **Page Object Model (POM)** architecture, and industry-standard testing patterns.

## 🎯 Project Overview

This project showcases automated testing of the [Volvo Cars USA](https://www.volvocars.com/us/) homepage. It validates critical user flows, navigation elements, CTAs (calls-to-action), and UI components to ensure a seamless user experience across desktop browsers.

### Key Features

- ✅ **Comprehensive E2E Coverage**: 10+ test cases covering home page navigation, CTAs, footer, and app links
- 🏗️ **Page Object Model Architecture**: Clean separation of test logic from locators for maintainability
- 🎭 **Playwright Framework**: Modern, fast, and reliable browser automation with excellent debugging tools
- 🔧 **Reusable Utilities**: Cookie handling and common test setup patterns
- 📊 **Detailed Test Reports**: HTML test results and error context for quick debugging
- 🚀 **CI/CD Ready**: Easy integration into automated pipelines

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **Playwright** | ^1.56.1 | Browser automation & E2E testing |
| **Node.js** | Latest LTS | JavaScript runtime |
| **JavaScript** (ES6) | - | Test scripting language |

---

## 🗂️ Project Structure

```
volvo_project/
├── components/
│   └── homePage.js           # Page Object Model for Volvo homepage
├── test/
│   ├── homepage.spec.js      # Main test suite (10+ test cases)
│   └── utils/
│       └── cookieUtils.js    # Utility for cookie acceptance
├── my-playwright-profile/    # Playwright stored profiles & state
├── test-results/             # HTML reports & error logs
├── playwright.config.js      # Playwright configuration
├── package.json              # Dependencies & scripts
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- A modern browser (Chromium-based, tested with Chrome)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd volvo_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify Playwright browsers are installed**
   ```bash
   npx playwright install
   ```

---

## 📝 Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:ui
```
This opens Playwright Inspector, letting you step through tests, view DOM snapshots, and debug in real-time.

### Run a Specific Test File
```bash
npx playwright test test/homepage.spec.js
```

### Run Tests Matching a Pattern
```bash
npx playwright test --grep "navigation"
```

### Run with Headed Browser
```bash
npx playwright test --headed
```

### Generate & View HTML Report
```bash
npx playwright show-report
```

---

## 🏗️ Architecture & Design Patterns

### Page Object Model (POM)

The `components/homePage.js` file encapsulates all locators and interactions for the Volvo homepage. This approach provides:

- **Maintainability**: Update selectors in one place
- **Readability**: Test code reads like business logic, not CSS selectors
- **Reusability**: Shared locators and helper methods across tests
- **Scalability**: Easy to extend with new pages/components

**Example Usage:**
```javascript
const { HomePage } = require("../components/homePage");

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openSitenav();
  await expect(homePage.ourCarsBtn).toBeVisible();
});
```

### Test Structure

Each test follows a clear **Arrange → Act → Assert** pattern:

1. **Setup**: Navigate to URL, accept cookies, initialize POM
2. **Action**: Click buttons, scroll, submit forms
3. **Assert**: Verify visibility, attributes, and expected outcomes

---

## 📋 Test Coverage

| Test Name | Scope | Purpose |
|-----------|-------|---------|
| Home page loads with correct title | Home | Verify page loads and title is correct |
| Site navigation menu dialog has correct items | Navigation | Validate side menu opens and shows all menu items |
| Top content CTAs have correct links | CTAs | Check configure/inventory/offers/test-drive links |
| Footer contains social media links | Footer | Verify social links (Facebook, Instagram) |
| Bottom navigation is visible and contains main links | Navigation | Check footer nav links (SUVs, Wagons, etc.) |
| Explore categories section is visible | Content | Validate Electrification/Safety/Sustainability links |
| Special offers section displays promotional content | Content | Check special offers visibility |
| Volvo Cars App section is visible with App Store and Google Play links | App | Verify app store and Play Store links |
| Page loads with images and respects viewport | Responsive | Check image rendering and viewport dimensions |
| + More | - | Continuous expansion based on requirements |

---

## 🔍 Configuration Details

### Playwright Config (`playwright.config.js`)

- **Base URL**: `https://www.volvocars.com/us/`
- **Test Timeout**: 30 seconds per test
- **Browsers**: Chromium (Desktop Chrome)
- **Viewport**: 1280x720 (Desktop)
- **Headless Mode**: `false` (visible browser for debugging)
- **Slow Motion**: 50ms (aids debugging and observability)

### Environment & Profile Storage

- Playwright profiles stored in `my-playwright-profile/` for state persistence
- Test results and reports generated in `test-results/`

---

## 🛠️ Utilities & Helpers

### `test/utils/cookieUtils.js`

A reusable utility for accepting cookies before tests:

```javascript
const { acceptCookies } = require("./utils/cookieUtils");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await acceptCookies(page);  // Handles cookie consent
});
```

This reduces boilerplate and ensures consistent test setup.

---

## 📊 Test Results & Debugging

### HTML Reports

After test runs, view detailed reports:
```bash
npx playwright show-report
```

Reports include:
- Test pass/fail status
- Execution time
- Error screenshots & video (if configured)
- Call logs and DOM snapshots

### Error Context

Failed tests generate `error-context.md` files in `test-results/` with:
- Full error messages
- Step-by-step execution logs
- Browser console output
- Network activity

---

## 🎓 Learning Outcomes & Portfolio Value

This project demonstrates:

### ✅ **Testing Fundamentals**
- E2E test automation best practices
- Selector strategy and stability
- Explicit waits and timeout handling
- Test isolation and reusability

### ✅ **Playwright Expertise**
- Advanced locator strategies (`getByRole`, `has-text`, attribute selectors)
- Page interactions (click, scroll, type, submit)
- Wait conditions and visibility checks
- Browser automation lifecycle

### ✅ **Software Engineering**
- Page Object Model design pattern
- DRY (Don't Repeat Yourself) principles
- Code organization and maintainability
- Utility function abstraction

### ✅ **Real-World Scenarios**
- Testing dynamic navigation menus
- Validating link URLs and attributes
- Responsive design testing
- Third-party integrations (social, app stores)

---

## 🚀 Next Steps & Enhancements

Potential improvements for portfolio expansion:

- [ ] Add visual regression testing (Percy, Pixelmatch)
- [ ] Implement performance monitoring
- [ ] Add API testing alongside UI tests
- [ ] Create custom reporters for CI/CD integration
- [ ] Add accessibility testing (axe-core integration)
- [ ] Extend coverage to mobile viewports
- [ ] Implement data-driven testing with fixtures
- [ ] Add load testing scenarios
- [ ] Create GitHub Actions CI/CD pipeline

---

## 📞 Contact & Support

- **Project Repository**: [GitHub Link] *(Add your repo URL)*
- **Author**: Olena
- **Framework Documentation**: [Playwright Docs](https://playwright.dev)

---

## 📄 License

This project is licensed under the ISC License. See `package.json` for details.

---

## 🙏 Acknowledgments

- **Volvo Cars USA** for the real-world testing target
- **Playwright Community** for excellent tooling and documentation
- Modern testing best practices and industry standards

---

**Happy Testing! 🎭**

*Last Updated: November 2025*
