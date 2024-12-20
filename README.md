# README: QA Engineer Skill Test

## **Overview**

This project contains an automated test script for verifying critical user flows on a clothing store website ([https://automationexercise.com/](https://automationexercise.com/)) using the Playwright framework. The test case focuses on automating the end-to-end process from browsing products to verifying the "Register / Login" modal during checkout.

---

## **Framework Selection**

**Choice**: Playwright

**Justification**:
- **Ease of Use**: Simple API and fast setup.
- **Cross-Browser and Cross-Device Testing**: Built-in support for multiple browsers and devices.
- **Community Support**: Active community with robust documentation.
- **Rich Features**: Auto-wait, accessibility checks, and tracing.

---

## **Project Structure**

- **`src/`**: Contains the test scripts and Page Object Model (POM) implementation.
  - **`pages/`**: Includes POM classes for different sections of the website.
    - **`HomePage.ts`**: Handles the homepage functionality.
    - **`SignupPage.ts`**: Manages signup and registration workflows.
    - **`ProductPage.ts`**: Covers product listing and search functionalities.
    - **`ProductDetailsPage.ts`**: Deals with product details and selection.
    - **`CheckoutPage.ts`**: Implements checkout flow.
    - **`PaymentPage.ts`**: Handles payment-related steps.
  - **`tests/`**: Contains the test case scripts.
    - **`TC_01_productCheckout.test.ts`**: Automates the product checkout flow.
    - **`TC_02_register_optional.test.ts`**: Automates the optional user registration and order confirmation flow.
- **`reports/`**: Stores execution reports (e.g., Ortoni reports).
- **`README.md`**: Project documentation.

---

## **Key Features**

- Modular and reusable script structure using the Page Object Model (POM).
- Cross-device testing (Desktop and Mobile viewports).
- Integration of random data generation using Chance.js.
- Optional accessibility testing using Lighthouse.

---

## **Setup Instructions**

### **Prerequisites**

1. Node.js and npm installed ([Download Node.js](https://nodejs.org/)).
2. Playwright installed globally or locally in your project.
3. A code editor (e.g., VS Code) for running and editing scripts.

### **Install Dependencies**

Run the following command to install required dependencies:

```bash
npm install
```

To install the **Chance.js** library for generating random test data:

```bash
npm install chance
```

To install the **Ortoni Report** library for test reporting:

```bash
npm install -D ortoni-report
```

---

## **How to Execute the Test**

1. **Run the Main Test Case**:
   To execute the automation script for the user flow, use the following command:

   ```bash
   npx playwright test
   ```

2. **Generate Reports**:
   After executing the test, a detailed report will be generated in the `Ortoni-report` folder.

   To view the report:

   ```bash
   npx ortoni-report show-report
   ```

---

## **Libraries and Tools Used**

### **Core Libraries**

- **Playwright**: For browser automation and testing.
- **Chance.js**: For generating random test data (e.g., names, emails, and quantities).

### **Reporting Tool**

- **Ortoni Report**: For generating enhanced test execution reports.

---

## **Key Features**

- Modular and reusable script structure using the Page Object Model (POM).
- Cross-device testing (Desktop and Mobile viewports).
- Integration of random data generation using Chance.js.

---

## **Repository Structure**

```
📦project-folder
 ┣ 📂src
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜HomePage.ts
 ┃ ┃ ┣ 📜SignupPage.ts
 ┃ ┃ ┣ 📜ProductPage.ts
 ┃ ┃ ┣ 📜ProductDetailsPage.ts
 ┃ ┃ ┣ 📜CheckoutPage.ts
 ┃ ┃ ┗ 📜PaymentPage.ts
 ┃ ┣ 📂tests
 ┃ ┃ ┣ 📜TC_01_productCheckout.test.ts
 ┃ ┃ ┗ 📜TC_02_register_optional.test.ts
 ┣ 📂Ortoni-report
 ┃ ┗ 📜index.html
 ┣ 📜README.md
 ┣ 📜package.json
 ┗ 📜playwright.config.ts
```

---

## **Test Reporting**

- **Ortoni Report**: Generate detailed HTML reports for each test execution, stored in the `Ortoni-report` folder as `index.html`.

---

## **Troubleshooting**

- **Dependency Issues**: Ensure all dependencies are installed via `npm install`.
- **Browser Launch Fails**: Use the Playwright CLI to check browser installation:
  ```bash
  npx playwright install
  ```
- **Test Failures**: Check logs and screenshots generated during test execution in the `playwright-report/` folder.

---

## **Contact**

For any questions or issues, reach out to me at **shammika.dahanayaka@applydigital.com**.

