class CartPage{
    get removeButton()  {return $('android=new UiSelector().description("test-REMOVE")')}
    get checkoutButton(){return $('android=new UiSelector().description("test-CHECKOUT")')}
    get firstNameInput(){return $('android=new UiSelector().text("First Name")')}
    get lastNameInput() {return $('android=new UiSelector().text("Last Name")')}
    get zipCodeInput()  {return $('android=new UiSelector().text("Zip/Postal Code")')}
    get continueButton(){return $('android=new UiSelector().description("test-CONTINUE")')}
    get finishButton()  {return $('android=new UiSelector().description("test-FINISH")')}
    get successMessage(){return $('android=new UiSelector().text("THANK YOU FOR YOU ORDER")')}
    get backHomeButton(){return $('android=new UiSelector().description("test-BACK HOME")')}

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