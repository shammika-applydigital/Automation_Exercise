import { Page, expect } from "@playwright/test";
import { link } from "fs";

export default class ProductDetailsPage {
  constructor(public page: Page) {}

  async setQuantity(quantity) {

    const quantityInput = this.page.locator('input#quantity');
    await quantityInput.fill(quantity.toString());
  }

  async addToCart() {
    // const addToCartButton = this.page.locator('button', {hasText:"Add to cart"});
    const addToCartButton = this.page.locator("//button[contains(.,'Add to cart')]");
    await addToCartButton.click();
  }

  async clickViewCartLink(){
    // const viewcartLink = this.page.locator('link' , { hasText : "View Cart"});
    const viewcartLink = this.page.locator("//u[normalize-space(text())='View Cart']")
    await viewcartLink.click();
  }

  async proceedToCheckout() {
    const checkoutButton = this.page.locator('text=Proceed To Checkout');
    await checkoutButton.click();
  }



}