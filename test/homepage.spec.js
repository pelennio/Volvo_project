import { test, expect } from "@playwright/test";
import { HomePage } from "../components/homePage.js";

test.describe("Volvo Cars US Homepage Tests", () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto("/");
    const url = page.url();
    if (url.includes("errors.edgesuite.net") || url.includes("AccessDenied")) {
      throw new Error(`Akamai Access Denied page detected. URL: ${url}`);
    }
    await homePage.acceptCookies();
  });

  // ----------------------------
  // Test 1: Page title
  // ----------------------------
  test("Page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Volvo Car USA/i);
  });

  // ----------------------------
  // Test 2: Top navigation buttons
  // ----------------------------
  test("Top navigation buttons are visible", async () => {
    for (const btn of homePage.topNavButtons) {
      await expect(btn).toBeVisible();
    }
  });

  // ----------------------------
  // Test 3: Side navigation menu
  // ----------------------------
  test("Side navigation menu opens and displays items", async () => {
    await homePage.openSitenav();
    for (const btn of homePage.sideNavButtons) {
      await expect(btn).toBeVisible();
    }
  });

  // ----------------------------
  // Test 4: Top CTAs
  // ----------------------------
  test("Top content CTA links are visible and correct", async () => {
    const ctas = [
      { locator: homePage.configureYourCarLink, url: /\/build/ },
      { locator: homePage.carsInStockLink, url: /\/inventory/ },
      { locator: homePage.specialOffersLink, url: /\/offers/ },
      { locator: homePage.bookTestDriveLink, url: /\/dealer-locator/ },
    ];

    for (const cta of ctas) {
      await expect(cta.locator).toBeVisible();
      await expect(cta.locator).toHaveAttribute("href", cta.url);
    }
  });

  // ----------------------------
  // Test 5: Explore categories
  // ----------------------------
  test("Explore categories section is visible", async () => {
    for (const link of homePage.exploreCategoriesLinks) {
      await expect(link).toBeVisible();
    }
  });

  // ----------------------------
  // Test 6: Special offers section
  // ----------------------------
  test("Special offers section is visible", async () => {
    await expect(homePage.specialOffersSection).toBeVisible();
  });

  // ----------------------------
  // Test 7: Footer links
  // ----------------------------
  test("Footer links are visible", async () => {
    await homePage.scrollToBottom();
    for (const link of homePage.footerLinks) {
      await expect(link).toBeVisible({ timeout: 10000 });
    }
  });

  // ----------------------------
  // Test 8: Social and app links
  // ----------------------------
  test("Social and app links are visible", async () => {
    await homePage.scrollToBottom();
    for (const link of homePage.socialLinks) {
      await expect(link).toBeVisible();
    }
  });

  // ----------------------------
  // Test 9: Page loads images and respects viewport
  // ----------------------------
  test("Page loads with images and viewport is valid", async ({ page }) => {
    await expect(homePage.images.first()).toBeVisible();
    const viewport = page.viewportSize();
    expect(viewport.width).toBeGreaterThan(0);
    expect(viewport.height).toBeGreaterThan(0);
  });

  // ----------------------------
  // Test 10: Responsive mobile layout
  // ----------------------------
  test("Page layout is responsive on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await expect(homePage.smallMenu).toBeVisible();
    await homePage.smallMenu.click();
    for (const btn of homePage.sideNavButtons) {
      await expect(btn).toBeVisible();
    }
  });
});
