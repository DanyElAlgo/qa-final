import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/loginPage.js'
import HomePage from '../pageobjects/homePage.js'
import CartPage from '../pageobjects/cartPage.js'

Given(/^I am on the login page$/, async () => {});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
Then(/^I should see products to buy$/, async () => {
    //esperar unos segundos
    await browser.pause(2000);
    await HomePage.addProduct1.waitForDisplayed({ timeout: 5000 });
});

When(/^I add the first product to the cart$/, async () => {
    await HomePage.addFirstProduct();
});
When(/^I add the second product to the cart$/, async () => {
    await HomePage.addSecondProduct();
});
When(/^I check the cart$/, async () => {
    await HomePage.cartButton.waitForDisplayed({ timeout: 5000 });
    await HomePage.cartButton.click();
});
When(/^I proceed to checkout with "([^"]+)" "([^"]+)" "([^"]+)"$/, async (firstName, lastName, zipCode) => {
    await CartPage.checkout(firstName, lastName, zipCode);
});
Then(/^I should see the order confirmation$/, async () => {
    await CartPage.successMessage.waitForDisplayed({ timeout: 5000 });
});