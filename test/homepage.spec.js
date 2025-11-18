import { test, expect } from "@playwright/test";
import { HomePage } from "../components/homePage.js";

test.describe("Coursera Homepage Tests", () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.openHomePage();
  });

  // 1. Homepage loads successfully
  test("1. Homepage loads with correct title", async ({ page }) => {
    console.log("Page title is:", await page.title());
    await expect(page).toHaveTitle(/Coursera/i);
  });

  // 2. Log In button is visible
  test("2. Log In button is visible", async () => {
    await expect(homePage.logInBtn).toBeVisible();
  });

  // 3. Join for Free button is visible
  test("3. Join for Free button is visible", async () => {
    await expect(homePage.joinForFreeBtn).toBeVisible();
  });

  // 4. Explore menu is visible
  test("4. Explore menu button is visible", async () => {
    await expect(homePage.exploreMenu).toBeVisible();
  });

  // 5. Search input and button are visible
  test("5. Search bar is visible", async () => {
    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.searchBtn).toBeVisible();
  });

  // 6. Featured Courses section is displayed
  test("6. Featured Courses section is visible", async () => {
    await expect(homePage.featuredCoursesSection).toBeVisible();
  });

  // 7. Trending Topics section is displayed
  test("7. Trending Topics section is visible", async () => {
    await expect(homePage.trendingTopicsSection).toBeVisible();
  });

  // 8. Categories section is visible
  test("8. Browse by Subject section is visible", async () => {
    await expect(homePage.categoriesSection).toBeVisible();
  });

  // 9. Footer contains links
  test("9. Footer links are visible", async () => {
    await expect(homePage.footerLinks.first()).toBeVisible();
    const count = await homePage.footerLinks.count();
    expect(count).toBeGreaterThan(5);
  });

  // 10. Hero banner and testimonials are visible
  test("10. Hero banner and testimonials section are visible", async () => {
    await expect(homePage.heroBanner).toBeVisible();
  });
});
