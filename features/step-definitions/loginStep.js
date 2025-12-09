import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/loginPage.js'
import HomePage from '../pageobjects/homePage.js'

Given(/^I am on the login page$/, async () => {
    
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see products to buy$/, async () => {
    //esperar unos segundos
    await browser.pause(2000);
    await HomePage.addProduct1.waitForDisplayed({ timeout: 5000 });
});
