import { Page, expect } from "@playwright/test";
import Chance from "chance";

export default class PaymentPage {

  chance: Chance.Chance;

  constructor(public page: Page) {
    this.chance=new Chance();
  }

  async enterNameOnCard() {
    const randomCardName = this.chance.name();
    const nameOnCardTxt = this.page.locator('[data-qa="name-on-card"]');
    await nameOnCardTxt.fill(randomCardName);
  }

  async enterCardNumber() {
    const randomCardNumber = this.chance.cc({type: 'Visa'});
    const cardNumberTxt = this.page.locator('[data-qa="card-number"]');
    await cardNumberTxt.fill(randomCardNumber);
  }

  async enterCVC() {
    const randomCVC = this.chance.integer({ min: 100, max: 999 });
    const cvcTxt = this.page.locator('[data-qa="cvc"]');
    await cvcTxt.fill("444");
  }

  async enterExpiryMonth() {
    const expiryMonth = this.chance.month({ raw: true }).numeric;
    const monthTxt = this.page.locator('[data-qa="expiry-month"]');
    await monthTxt.fill("01");
  }

  async enterExpieryYear() {
    const currentYear = new Date().getFullYear();
    const expiryYear = this.chance.year({ min: currentYear, max: currentYear + 10 });  
    const yearTxt = this.page.locator('[data-qa="expiry-year"]');
    await yearTxt.fill("2027");
  }

  async clickPayAndConfirmButon(){
    const payButton = this.page.locator('button', { hasText: 'Pay and Confirm Order'});
    await payButton.click();
  }

  async makePaymentAndConfirmOrder (){
    await this.enterNameOnCard();
    await this.enterCardNumber();
    await this.enterCVC();
    await this.enterExpiryMonth();
    await this.enterExpieryYear();
    await this.clickPayAndConfirmButon();
  }

  async VerifySuccessfullyOrderPlaced(){
    //await this.page.waitForNavigation({'waitUntil':"networkidle"})
    const successMessage = this.page.locator('p', { hasText: 'Congratulations! Your order has been confirmed!' });
    expect(successMessage).toBeVisible();
  }

  async clickLogOut(){
    const logoutBtn = this.page.locator('a',{hasText:"Logout"})
    await logoutBtn.click();
  }

}