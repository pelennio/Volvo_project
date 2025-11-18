import { expect } from "@playwright/test";

export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  // Top navigation
  get logInBtn() {
    return this.page.getByRole("button", { name: "Log In" });
  }

  get joinForFreeBtn() {
    return this.page
      .getByTestId("page-header-wrapper")
      .getByRole("button", { name: "Join for Free" });
  }

  get exploreMenu() {
    return this.page.getByTestId("megamenu-explore-button");
  }

  get searchInput() {
    return this.page.locator("input[placeholder='What do you want to learn?']");
  }

  get searchBtn() {
    return this.page.getByTestId("AutoComplete").getByRole("img");
  }

  get featuredCoursesSection() {
    return this.page.getByText("BusinessArtificial");
  }
  get trendingTopicsSection() {
    return this.page.getByText("Trending coursesMost");
  }

  get categoriesSection() {
    return this.page.getByRole("list").filter({ hasText: "Popular in" });
  }

  get footerLinks() {
    return this.page.locator("footer a");
  }

  get heroBanner() {
    return this.page
      .getByTestId("front-page-hero-banner-module")
      .getByTestId("overflow-carousel-content");
  }

  get testimonialsSection() {
    return this.page.locator("text=What our learners say");
  }

  // Cookies
  get cookiesAcceptBtn() {
    return this.page.getByRole("button", { name: "Accept" });
  }

  // Actions
  async openHomePage() {
    await this.page.goto("https://www.coursera.org/");
    await this.acceptCookies();
  }

  async acceptCookies() {
    try {
      // Wait up to 5 seconds for the cookie button
      const btn = this.cookiesAcceptBtn;
      await btn.waitFor({ state: "visible", timeout: 2000 });
      await btn.click();
      await this.page.waitForTimeout(200); // let page settle
    } catch (e) {
      // Button not found, maybe cookies already accepted
      console.log("Cookies button not visible, skipping.");
    }
  }

  async searchCourse(courseName) {
    await this.searchInput.fill(courseName);
    await this.searchBtn.click();
  }
}
