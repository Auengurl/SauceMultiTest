import SauceBasePage from './basePage.js';
import SecurityPage from './security.js';


class HamburgerMenu extends SauceBasePage {

    get hamburgerMenu () {
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
        await this.hamburgerMenu.click();
        await this.hamburgerMenuClose.click();
    }

    async hamburgerAllItems (){
        await this.hamburgerMenu.click();
        await this.inventoryItem.click();
        await this.hamburgerMenuAllItems.click();
        await expect(SecurityPage.HomePage).toBeExisting;
    }


}



export default new HamburgerMenu();