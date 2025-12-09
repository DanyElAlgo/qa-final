import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/loginPage.js'
import HomePage from '../pageobjects/homePage.js'
import CartPage from '../pageobjects/cartPage.js'

When(/^I login as "([^"]+)" and "([^"]+)"$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I add the first product to the cart$/, async () => {
    await HomePage.addFirstProduct();
});
When(/^I check the cart$/, async () => {
    await HomePage.cartButton.waitForDisplayed({ timeout: 5000 });
    await HomePage.cartButton.click();
});
When(/^I remove the product from the cart$/, async () => {
    await CartPage.removeFirstProduct();
});
Then(/^the cart should be empty$/, async () => {
    
});
