class LoginPage {
    get nameInput() { return $('~test-Username'); }
    get passInput() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }

    async login(username, password){
        await this.nameInput.waitForDisplayed({ timeout: 5000 });
        await this.nameInput.setValue(username);

        await this.passInput.waitForDisplayed({ timeout: 5000 });
        await this.passInput.setValue(password);

        await this.loginButton.waitForDisplayed({ timeout: 5000 });
        await this.loginButton.click();
    }
}

export default new LoginPage();