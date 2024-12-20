import { Page } from "@playwright/test";

export default class ProductPage {
  constructor(public page: Page) {}

async searchProduct(productName: string) {
    await this.page.getByPlaceholder("Search Product").fill(productName);
    await this.page.click('button[id="submit_search"]');
  }

  async addToCart(productName: string) {
    const productSelector = `text=${productName}`;
    await this.page.hover(productSelector);
    await this.page.click(`a.add-to-cart`);
  }

  async viewThirdProduct() {
    //const viewProductDetails = await this.page.locator('link',{ hasText:"View Product"}).nth(2);
    const viewProductDetails = await this.page.locator("//a[contains(text(),'View Product')]").nth(2);
    await viewProductDetails.click();
  }
}
