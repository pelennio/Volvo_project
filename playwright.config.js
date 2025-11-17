const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./test",
  timeout: 30 * 1000,
  use: {
    // Set the base URL for all `page.goto()` calls when a path is used
    baseURL: "https://www.volvocars.com/us/",
    headless: false,
    // Make interactions slightly slower to aid debugging / reduce bot-like speed
    launchOptions: {
      slowMo: 50,
    },
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
