import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import SauceBasePage from './basePage.js';
import Security from './security.js';
import standardUser from './users.js';


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

            await this.inputUsername.setValue(standardUser.username);
            console.log(`Testing with username: ${standardUser.username}`);
            await this.inputPassword.setValue(standardUser.password);
            await this.btnSubmit.click();
            await expect(Security.HomePage).toBeExisting;
            
        
        };



    openBasePage () {
        return super.openBasePage('');
    }
}


export default new Login();
