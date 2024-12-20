import { Page, expect } from "@playwright/test";

export default class CheckoutPage {
  constructor(public page: Page) {}

  async verifyRegisterLoginModal() {
    const registerLoginModal = this.page.locator("#checkoutModal");
    await expect(registerLoginModal).toBeVisible();
  }

  async verifyCartContainsText(productName: string, expectedText: string) {
    const cartItemText = await this.page.textContent(`text=${productName}`);
    expect(cartItemText).toContain(expectedText);
  }

  async clickSignUplogin(){
    const linkRegister_login = await this.page.getByRole('link',{name:"Register / Login"})
    await linkRegister_login.click();
  }

  async clickCartButton() {
    await this.page.click("text=Cart");
  }

  async proceedToCheckout() {
    const checkoutButton = this.page.locator('text=Proceed To Checkout');
    await checkoutButton.click();
  }

  async clickPlaceOrderBtn(){
    const placeOrderBtn = this.page.getByRole('link',{name:"Place Order"})
    await placeOrderBtn.click();
  }

}
