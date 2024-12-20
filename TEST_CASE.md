# Test Case Document: QA Engineer Skill Test

## **Test Case Title**
Automating the Critical User Flow for a Clothing Store Website

---

### **Preconditions**
- The user has access to the test website: [https://automationexercise.com/](https://automationexercise.com/).
- The Playwright framework is installed and configured.
- The environment supports desktop and mobile viewport testing.

---

### **Test Steps**

#### **Main User Flow**
1. **Launch the website**
   - Navigate to [https://automationexercise.com/](https://automationexercise.com/) using Playwright.

2. **Go to the Products section**
   - Click on the "Products" section from the homepage navigation bar.

3. **View the third product in the product list**
   - Locate and select the third product displayed in the "Products" list.
   - Navigate to the product details page.

4. **Enter a random quantity**
   - Generate a random number between 1 and 20 using a function or library like `faker`.
   - Input the generated quantity in the quantity field.

5. **Add the product to the cart**
   - Click on the "Add to Cart" button.

6. **Proceed to checkout**
   - Click on the "Cart" button in the navigation bar.
   - Proceed to checkout by clicking "Proceed to Checkout."

7. **Register/Login modal verification**
   - Confirm that the "Register / Login" modal appears as part of the checkout process.

#### **Optional Steps**
8. **Register a new user account**
   - Fill out the registration form using random data generated by `faker` for name, email, and password.
   - Submit the form and verify account creation.

9. **Confirm the order**
   - Navigate back to the cart.
   - Confirm the order and complete the checkout process.

10. **Logout**
    - Log out of the application by clicking the "Logout" button in the navigation bar.

---

### **Expected Results**
- The website loads and navigates correctly to each page.
- The "Products" section displays a list of available products.
- The third product’s details page is displayed correctly.
- The random quantity is accepted, and the product is added to the cart.
- The checkout process is initiated, and the "Register / Login" modal appears.
- (Optional) A new user account is created successfully.
- (Optional) The order is confirmed, and the user logs out.

---

### **Postconditions**
- The cart is cleared after completing the test.
- The user session is terminated upon logout.

---

### **Execution Notes**
- Run the script in both desktop and mobile viewports to ensure responsiveness.
- Use Playwright’s built-in device emulation for mobile testing.
- Log and report any failures or discrepancies during test execution.

---
