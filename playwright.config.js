import { defineConfig, devices } from '@playwright/test';
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  timeout: 30_000, // 30 seconds per test

  reporter: [
    [
      "@testiny/automation/reporters/playwright",
      {
        enable: true,
        project: "Volvo_portfolio", // your Testiny project key
        sourceName: "ui-tests", // optional, identifies test suite
        token: process.env.TESTINY_API_KEY, // store as GitHub secret
      },
    ],
    ["list"], // optional: adds a console reporter for local visibility
  ],

  use: {
    baseURL: "https://www.volvocars.com/us/",
    headless: true, // false only for local debugging
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000, // wait max 10s for actions
    launchOptions: {
      slowMo: 50, // slows down actions for easier debugging
    },
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
