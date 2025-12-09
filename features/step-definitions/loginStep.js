import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/loginPage.js'
import HomePage from '../pageobjects/homePage.js'

Given(/^I am on the login page$/, async () => {
    
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I log out$/, async () => {
    await HomePage.logout();
});

