import SauceBasePage from './basePage.js';


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



    async hamburgerMenuSelect (){
        await this.hamburgerMenu.click();
    }

    async hamburgerAllItems (){
        await this.hamburgerMenu.click();
        await this.hamburgerMenuClose.click();
    }


}



export default new HamburgerMenu();