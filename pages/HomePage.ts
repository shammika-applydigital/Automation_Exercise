import { expect, Page } from "@playwright/test";
// import lighthouse from "lighthouse";
// import { chromium } from "playwright";
// import fs from "fs";

export default class HomePage {
  constructor(public page: Page) {}

  async verifyHomePage() {
    expect(this.page).toHaveTitle("Automation Exercise");
  }

  async SignUplogin() {
    await this.page.click("text=Signup / Login");
  }

  async navigateToProducts() {
    const productsLink = this.page.locator("text=Products");
    await productsLink.click();
  }


}
