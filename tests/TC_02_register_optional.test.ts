import { test, expect } from "../base/BaseTest";

// Test case: Register a new user
test("UI Test 2 - Register User", async ({ page, baseURL, homePage, signupPage }) => {
  
  // Step 1: Navigate to the base URL
  console.log("Navigating to the homepage");
  await page.goto(`${baseURL}`);

  // Step 2: Verify the homepage is displayed correctly
  console.log("Verifying homepage elements");
  await homePage.verifyHomePage();

  // Step 3: Click on the Sign Up / Login button
  console.log("Navigating to the Sign Up / Login page");
  await homePage.SignUplogin();

  // Step 4: Verify the 'New User Sign Up' form is displayed
  console.log("Verifying New User Sign Up form");
  await signupPage.verifyNewUserSignUp();

  // Step 5: Enter name and email details
  console.log("Entering name and email details");
  await signupPage.enterNameAndEmail();

  // Step 6: Click the Sign Up button
  console.log("Submitting the Sign Up form");
  await signupPage.clickSignupButton();

  // Step 7: Verify the 'Account Information' form is displayed
  console.log("Verifying Account Information form");
  await signupPage.verifyAccountInformation();

  // Step 8: Fill in account details (e.g., password, address)
  console.log("Filling account details");
  await signupPage.fillAccountDetails();

  // Step 9: Click the 'Create Account' button
  console.log("Creating the user account");
  await signupPage.clickCreateAccountButton();

  // Step 10: Verify the account has been created successfully
  console.log("Verifying account creation");
  await signupPage.verifyAccountCreated();
});
