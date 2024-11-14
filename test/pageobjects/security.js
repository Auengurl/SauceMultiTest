import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import SauceBasePage from './basePage.js';


class SecurityPage extends SauceBasePage {

    
    get HomePage () {
        return browser.url(`https://www.saucedemo.com/inventory.html`);
    }

    get AboutPage () {
        return browser.url(`https://saucelabs.com/`);
    }
}

export default new SecurityPage();

