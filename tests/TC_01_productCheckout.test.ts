import { test } from "../base/BaseTest";
import Chance from "chance";

const chance = new Chance();


test.describe("E-commerce Flow Test", () => {

    // Test for Desktop
    test("Product purchase flow - Desktop", async ({ page, baseURL, homePage, productPage, productDetailsPage, checkoutPage, signupPage, paymentPage }, testInfo) => {
        console.log(`Running test on Desktop ${testInfo.project.name}`);
        await addToCart({ page, baseURL, homePage, productPage, productDetailsPage, checkoutPage });
        await userRegister({ checkoutPage, signupPage });
        await confirmTheOrderAndLogOut({ checkoutPage, paymentPage });
    });

    // Test for Mobile
    test("Product purchase flow - Mobile", async ({ page, baseURL, homePage, productPage, productDetailsPage, checkoutPage, signupPage, paymentPage }, testInfo) => {
        console.log(`Running test on Mobile ${testInfo.project.name}`);
        await addToCart({ page, baseURL, homePage, productPage, productDetailsPage, checkoutPage }, { width: 375, height: 812 });
        await userRegister({ checkoutPage, signupPage });
        await confirmTheOrderAndLogOut({ checkoutPage, paymentPage });
    });

}); 




// Function to add a product to the cart
export const addToCart = async ({ page, baseURL, homePage, productPage, productDetailsPage, checkoutPage },viewport?: { width: number, height: number }) => {
    if (viewport) {
        await page.setViewportSize(viewport);
    }

    try {
        const randomQuantity: number = chance.integer({ min: 1, max: 20 });

        await page.goto(`${baseURL}`);
        await homePage.navigateToProducts();
        await productPage.viewThirdProduct();
        await productDetailsPage.setQuantity(randomQuantity);
        await productDetailsPage.addToCart();
        await productDetailsPage.clickViewCartLink();
        await productDetailsPage.proceedToCheckout();
        await checkoutPage.verifyRegisterLoginModal();
    } catch (error) {
        console.error("Error during the addToCart flow:", error);
        throw error;
    }
};

// Function to handle user registration
export const userRegister = async ({ checkoutPage, signupPage }) => {
    try {
        await checkoutPage.clickSignUplogin();
        await signupPage.verifyNewUserSignUp();
        await signupPage.enterNameAndEmail();
        await signupPage.clickSignupButton();
        await signupPage.verifyAccountInformation();
        await signupPage.fillAccountDetails();
        await signupPage.clickCreateAccountButton();
        await signupPage.verifyAccountCreated();
    } catch (error) {
        console.error("Error during user registration:", error);
        throw error;
    }
};

// Function to handle proceeding to the cart, confirming the order, and logging out
export const confirmTheOrderAndLogOut = async ({ checkoutPage, paymentPage }) => {
    try {
        await checkoutPage.clickCartButton();
        await checkoutPage.proceedToCheckout();
        await checkoutPage.clickPlaceOrderBtn();
        await paymentPage.makePaymentAndConfirmOrder();
        await paymentPage.VerifySuccessfullyOrderPlaced();
        await paymentPage.clickLogOut();
    } catch (error) {
        console.error("Error during order confirmation and logout:", error);
        throw error;
    }
};

