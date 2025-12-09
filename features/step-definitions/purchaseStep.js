import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/loginPage.js'
import HomePage from '../pageobjects/homePage.js'
import CartPage from '../pageobjects/cartPage.js'

When(/^I add the second product to the cart$/, async () => {
    await HomePage.addSecondProduct();
});

When(/^I proceed to checkout with "([^"]+)" "([^"]+)" "([^"]+)"$/, async (firstName, lastName, zipCode) => {
    await CartPage.checkout(firstName, lastName, zipCode);
});
Then(/^I should see the order confirmation$/, async () => {
    await CartPage.successMessage.waitForDisplayed({ timeout: 5000 });
});