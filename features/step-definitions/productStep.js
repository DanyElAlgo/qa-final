import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/loginPage.js'
import HomePage from '../pageobjects/homePage.js'
import CartPage from '../pageobjects/cartPage.js'

Given(/^I am on the login page$/, async () => {});

When(/^I login with "([^"]+)" and "([^"]+)"$/, async (username, password) => {
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
When(/^I check the cart$/, async () => {
    await HomePage.cartButton.waitForDisplayed({ timeout: 5000 });
    await HomePage.cartButton.click();
});
When(/^I remove the product from the cart$/, async () => {
    await CartPage.removeFirstProduct();
});
Then(/^the cart should be empty$/, async () => {
    //Verificar que el boton de checkout no este visible
    const isCheckoutVisible = await CartPage.checkoutButton.isDisplayed();
    if (isCheckoutVisible) {
        throw new Error('El carrito no está vacío');
    }
});
