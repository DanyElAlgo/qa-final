class CartPage{
    get removeButton()  {}
    get checkoutButton(){}
    get firstNameInput(){}
    get lastNameInput() {}
    get zipCodeInput()  {}
    get continueButton(){}
    get finishButton()  {}
    get successMessage(){}
    get backHomeButton(){}

    async removeFirstProduct(){
        await this.removeButton.waitForDisplayed({ timeout: 5000 });
        await this.removeButton.click();
    }
    async checkout(firstName, lastName, zipCode){
        await this.checkoutButton.waitForDisplayed({ timeout: 5000 });
        await this.checkoutButton.click();

        await this.firstNameInput.waitForDisplayed({ timeout: 5000 });
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.waitForDisplayed({ timeout: 5000 });
        await this.lastNameInput.setValue(lastName);
        await this.zipCodeInput.waitForDisplayed({ timeout: 5000 });
        await this.zipCodeInput.setValue(zipCode);
        await this.continueButton.waitForDisplayed({ timeout: 5000 });
        await this.continueButton.click();

        await this.finishButton.waitForDisplayed({ timeout: 5000 });
        await this.finishButton.click();

        await this.successMessage.waitForDisplayed({ timeout: 5000 });
        await this.backHomeButton.waitForDisplayed({ timeout: 5000 });
        await this.backHomeButton.click();
    }
}

export default new CartPage();