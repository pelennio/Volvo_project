import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  timeout: 30 * 1000, // 30 seconds per test

  reporter: [["list"]], // Console reporter for test visibility

  use: {
    baseURL: "https://www.volvocars.com/us/",
    headless: true, // false only for local debugging
    extraHTTPHeaders: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    },
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
