import SauceBasePage from './basePage.js';


class HamburgerMenu extends SauceBasePage {

get hamburgerMenu () {
    return $('#react-burger-menu-btn');
}

get logOut() {
    return $('#logout_sidebar_link');
}
}


export default new HamburgerMenu();