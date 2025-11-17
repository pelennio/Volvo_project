class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  // ----------------------------
  // Top navigation (header)
  // ----------------------------
  get topOurCarsBtn() {
    return this.page.getByRole("button", { name: "Our Cars" });
  }
  get topShoppingToolsBtn() {
    return this.page.getByRole("button", { name: "Shopping Tools" });
  }
  get topOwnersBtn() {
    return this.page.getByRole("button", { name: "Owners" });
  }
  get topElectricBtn() {
    return this.page.getByRole("button", { name: "Electric" });
  }

  get topNavButtons() {
    return [
      this.topOurCarsBtn,
      this.topShoppingToolsBtn,
      this.topOwnersBtn,
      this.topElectricBtn,
    ];
  }

  // ----------------------------
  // Side navigation menu
  // ----------------------------
  get menuToggle() {
    return this.page.locator("#sitenav-menu-toggle-desktop");
  }
  get smallMenu() {
    return this.page.getByRole("button", { name: "Menu" });
  }

  get ourCarsBtn() {
    return this.page
      .locator("#sitenav-menu-main-menu")
      .getByRole("button", { name: "Our Cars" })
      .first();
  }
  get shoppingToolsBtn() {
    return this.page
      .locator("#sitenav-menu-main-menu")
      .getByRole("button", { name: "Shopping Tools" })
      .first();
  }
  get ownersBtn() {
    return this.page
      .locator("#sitenav-menu-main-menu")
      .getByRole("button", { name: "Owners" })
      .first();
  }
  get electricBtn() {
    return this.page
      .locator("#sitenav-menu-main-menu")
      .getByRole("button", { name: "Electric" })
      .first();
  }
  get aboutUsBtn() {
    return this.page
      .locator("#sitenav-menu-main-menu")
      .getByRole("button", { name: "About Us" })
      .first();
  }

  get sideNavButtons() {
    return [
      this.ourCarsBtn,
      this.shoppingToolsBtn,
      this.ownersBtn,
      this.electricBtn,
      this.aboutUsBtn,
    ];
  }

  async openSitenav() {
    await this.menuToggle.waitFor({ state: "visible" });
    await this.menuToggle.click();
  }

  // ----------------------------
  // Top content CTAs
  // ----------------------------
  get configureYourCarLink() {
    //bug on production site with incorrect link name
    return this.page
      .locator("#homepageTopContentSlot-shoppingTools-0")
      .getByRole("link", { name: "Special offers" });
  }
  get carsInStockLink() {
    return this.page
      .locator("#homepageTopContentSlot-shoppingTools-0")
      .getByRole("link", { name: "Cars in stock" });
  }
  get specialOffersLink() {
    return this.page
      .locator("#homepageTopContentSlot-shoppingTools-0")
      .getByRole("link", { name: "Configure your car" });
  }
  get bookTestDriveLink() {
    return this.page
      .locator("#homepageTopContentSlot-shoppingTools-0")
      .getByRole("link", { name: "Book a test drive" });
  }

  get topCTAButtons() {
    return [
      this.configureYourCarLink,
      this.carsInStockLink,
      this.specialOffersLink,
      this.bookTestDriveLink,
    ];
  }

  // ----------------------------
  // Explore categories
  // ----------------------------
  get electrificationLink() {
    return this.page.getByRole("link", { name: "Electrification" });
  }
  get safetyLink() {
    return this.page.getByRole("link", { name: "Safety" });
  }
  get sustainabilityLink() {
    return this.page.getByRole("link", { name: "Sustainability" });
  }

  get exploreCategoriesLinks() {
    return [this.electrificationLink, this.safetyLink, this.sustainabilityLink];
  }

  // ----------------------------
  // Special offers section
  // ----------------------------
  get specialOffersSection() {
    return this.page.locator("text=/Special offers|Exclusive Costco/i").first();
  }

  // ----------------------------
  // Footer links
  // ----------------------------
  get scheduleServiceLink() {
    return this.page.getByRole("link", { name: "Schedule service" });
  }
  get contactVolvoLink() {
    return this.page.getByRole("link", { name: "Contact Volvo" });
  }
  get bookTestDrive() {
    return this.page.getByRole("link", {
      name: "Book a test drive",
      exact: true,
    });
  }
  get suvLink() {
    return this.page.getByRole("link", { name: "SUVs" });
  }
  get wagonLink() {
    return this.page.getByRole("link", { name: "Wagons" });
  }

  get footerLinks() {
    return [
      this.scheduleServiceLink,
      this.contactVolvoLink,
      this.bookTestDrive,
      this.suvLink,
      this.wagonLink,
    ];
  }

  // ----------------------------
  // Social and app links
  // ----------------------------
  get facebookLink() {
    return this.page.locator('a[href*="facebook.com/VolvocarUSA"]').first();
  }
  get instagramLink() {
    return this.page.locator('a[href*="instagram.com"]').first();
  }
  get appStoreLink() {
    return this.page.locator('a[href*="apps.apple.com"]').first();
  }
  get googlePlayLink() {
    return this.page.locator('a[href*="play.google.com"]').first();
  }

  get socialLinks() {
    return [
      this.facebookLink,
      this.instagramLink,
      this.appStoreLink,
      this.googlePlayLink,
    ];
  }

  // ----------------------------
  // Images
  // ----------------------------
  get images() {
    return this.page.locator("img");
  }

  // ----------------------------
  // Utility Methods
  // ----------------------------
  async scrollToBottom() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
  }

  async acceptCookies() {
    const banner = this.page.locator("#onetrust-banner-sdk");
    const acceptBtn = this.page.locator("#onetrust-accept-btn-handler");
    if (await banner.isVisible()) {
      await acceptBtn.click();
      await banner.waitFor({ state: "hidden" });
    }
  }
}

module.exports = { HomePage };
