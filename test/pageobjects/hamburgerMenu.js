import SauceBasePage from './basePage.js';
import SecurityPage from './security.js';


class HamburgerMenu extends SauceBasePage {

    get hamburgerMenuBtn () {
        return $('#react-burger-menu-btn');
    }

    get hamburgerMenuClose () {
        return $('#react-burger-cross-btn');
    }

    get hamburgerMenuAllItems () {
        return $('#inventory_sidebar_link');
    }

    get hamburgerMenuAbout () {
        return $('#about_sidebar_link');
    }

    get hamburgerMenuLogOut() {
        return $('#logout_sidebar_link');
    }

    get hamburgerMenuReset () {
        return $('#reset_sidebar_link');
    }

    get inventoryItemName () {
        return $('.inventory_item_name ');
    }

    get addItemCartBtn () {
        return $('#add-to-cart-sauce-labs-backpack');
    }


    async hamburgerMenuSelect (){
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuClose.click();
    }

    async hamMenuAllItems (){
        await this.inventoryItemName.click();
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuAllItems.click();
        await expect(SecurityPage.HomePage).toBeExisting;
    }

    async hamMenuAbout () {
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuAbout.click();
        await expect(browser.url('https://saucelabs.com/'));
    }

    async hamMenuLogout () {
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuLogOut.click();
        
    }

    async hamMenuReset () {
        await this.hamburgerMenuBtn.click();
        await this.addItemCartBtn.click();
        await this.hamburgerMenuReset.click();
        console.log('App reset');
    }

}



export default new HamburgerMenu();