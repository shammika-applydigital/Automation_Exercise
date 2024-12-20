import {test as basetest} from "@playwright/test";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductPage from "../pages/ProductPage";
import SignupPage from "../pages/SignupPage";
import PaymentPage from "../pages/PaymentPage";

type Pages = {
    checkoutPage : CheckoutPage;
    homePage : HomePage;
    productDetailsPage : ProductDetailsPage;
    productPage : ProductPage;
    signupPage : SignupPage;
    paymentPage : PaymentPage;
}

const testPages = basetest.extend<Pages>({
    checkoutPage : async ({page}, use) =>{
        await use(new CheckoutPage(page));
    },

    homePage : async ({page}, use) =>{
        await use(new HomePage(page));
    },

    productDetailsPage : async ({page}, use) =>{
        await use(new ProductDetailsPage(page));
    },

    productPage : async ({page}, use) => {
        await use(new ProductPage(page));
    },

    signupPage : async ({page}, use) => {
        await use(new SignupPage(page));
    },

    paymentPage : async ({page}, use) => {
        await use(new PaymentPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;