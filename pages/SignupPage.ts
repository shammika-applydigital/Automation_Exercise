import { Page, expect } from "@playwright/test";
import Chance from "chance";

export default class Signup {
  chance: Chance.Chance;

  constructor(public page: Page) {
    this.chance = new Chance();
  }

  async verifyNewUserSignUp() {
    const signUpTopic = await this.page.locator("text=New User SignUp");
    const isTextVisible = await signUpTopic.isVisible();
    expect(isTextVisible).toBe(true);
  }

  async enterNameAndEmail() {
    const randomName = `${this.chance.first()} ${this.chance.last()}`;
    const randomEmail = this.chance.email();

    const nameTextLocator = this.page.locator('[data-qa="signup-name"]');
    const emailTextLocator = this.page.locator('[data-qa="signup-email"]');
  
    await nameTextLocator.fill(randomName);
    await emailTextLocator.fill(randomEmail);
  }

  async clickSignupButton() {
    await this.page.click('button[data-qa="signup-button"]');
  }

  async verifyAccountInformation() {
    const textElement2 = await this.page.locator("text=ENTER ACCOUNT INFORMATION");
    const isTextVisible2 = await textElement2.isVisible();
    expect(isTextVisible2).toBe(true);
  }

  async fillAccountDetails() {
    const randomPassword = this.chance.string({ length: 8 });
    const dobYear = this.chance.year({ min: 1950, max: 2000 });
    const dobMonth = this.chance.integer({ min: 1, max: 12 }).toString();
    const dobDay = this.chance.integer({ min: 1, max: 28 }).toString();

    // Fill account details
    await this.page.check('input[id="id_gender1"]');
    await this.page.fill('input[name="password"]', randomPassword);
    await this.page.locator("#days").selectOption(dobDay);
    await this.page.locator("#months").selectOption(dobMonth);
    await this.page.locator("#years").selectOption(dobYear.toString());
    await this.page.check('input[name="newsletter"]');
    await this.page.check('input[name="optin"]');

    // Additional details
    const randomFirstName = this.chance.first();
    const randomLastName = this.chance.last();
    const randomCompany = this.chance.company();
    const randomAddress = this.chance.address();
    const randomCity = this.chance.city();
    const randomZipcode = this.chance.zip();
    const randomMobileNumber = this.chance.phone({ formatted: false });

    await this.page.fill('#first_name', randomFirstName);
    await this.page.fill('#last_name', randomLastName);
    await this.page.fill('#company', randomCompany);
    await this.page.fill('#address1', randomAddress);
    await this.page.fill('#address2', `Apt ${this.chance.integer({ min: 1, max: 1000 })}`);
    await this.page.locator("#country").selectOption("Canada");
    await this.page.fill('#state', randomCity);
    await this.page.fill('#city', randomCity);
    await this.page.fill('#zipcode', randomZipcode);
    await this.page.fill('#mobile_number', randomMobileNumber);
  }

  async clickCreateAccountButton() {
    const createAccountBtn = this.page.getByRole('button',{name:"Create Account"})
    await createAccountBtn.click();
  }

  async verifyAccountCreated() {
    const textElement = await this.page.locator("text=ACCOUNT CREATED!");
    const isTextVisible = await textElement.isVisible();
    expect(isTextVisible).toBe(true);
  }
}
