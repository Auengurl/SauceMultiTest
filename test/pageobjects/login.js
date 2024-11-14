import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import SauceBasePage from './basePage.js';
import Security from './security.js';
import standard_user from './users.js';


class Login extends SauceBasePage {
   
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }



    async loginAccess (){
        for (let user of standard_user) {

            await this.inputUsername.setValue(user.username);
            console.log(`Testing with username: ${user.username}`);
            await this.inputPassword.setValue(user.password);
            await this.btnSubmit.click();
            await expect(Security.HomePage).toBeExisting;
            await this.hamburgerMenu.click();
            await this.logOut.click();
        } 
        };



    openBasePage () {
        return super.openBasePage('');
    }
}


export default new Login();
