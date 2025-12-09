class HomePage{
    get addProduct1()         { return $('android=new UiSelector().description("test-ADD TO CART").instance(0)');}
    get addProduct2()         { return $('android=new UiSelector().description("test-ADD TO CART").instance(1)');}
    get removeProductSingle() { return $('android=new UiSelector().description("test-REMOVE")')} //VERY, VERY HARDCODED D:
    get cartButton()          { return $('android=new UiSelector().className("android.widget.ImageView").instance(3)')}
    get menuButton()          { return $('android=new UiSelector().className("android.widget.ImageView").instance(1)')}
    get logoutButton()        { return $('android=new UiSelector().description("test-LOGOUT")')}

    async addFirstProduct(){
        await this.addProduct1.waitForDisplayed({ timeout: 5000 });
        await this.addProduct1.click();
    }
    async addSecondProduct(){
        await this.addProduct2.waitForDisplayed({ timeout: 5000 });
        await this.addProduct2.click();
    }
    async removeFirstProduct(){
        await this.removeProductSingle.waitForDisplayed({ timeout: 5000 });
        await this.removeProductSingle.click();
    }
    async logout(){
        await this.menuButton.waitForDisplayed({ timeout: 5000 });
        await this.menuButton.click();

        //esperar 2 segundos
        await this.logoutButton.waitForDisplayed({ timeout: 5000 });
        await this.logoutButton.click();
    }
    
}

export default new HomePage();