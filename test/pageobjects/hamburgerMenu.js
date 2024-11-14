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

    get inventoryItem () {
        return $('.inventory_item_name ');
    }


    async hamburgerMenuSelect (){
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuClose.click();
    }

    async hamMenuAllItems (){
        await this.inventoryItem.click();
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuAllItems.click();
        await expect(SecurityPage.HomePage).toBeExisting;
    }

    async hamMenuAbout () {
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuAbout.click();
        await expect(SecurityPage.AboutPage).toBeExisting;
    }

    async hamMenuLogout () {
        await this.hamburgerMenuBtn.click();
        await this.hamburgerMenuLogOut.click();
    }

}



export default new HamburgerMenu();