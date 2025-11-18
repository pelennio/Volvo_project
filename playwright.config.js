import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  timeout: 30 * 1000, // 30 seconds per test

  reporter: [["list"]], // Console reporter for test visibility

  use: {
    baseURL: "https://www.volvocars.com/us/",
    headless: true, // false only for local debugging
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // wait max 10s for actions
    launchOptions: {
      slowMo: 50, // slows down actions for easier debugging
    },

    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Uncomment for Safari testing
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
