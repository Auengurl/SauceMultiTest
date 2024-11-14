
import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';


describe('hamburger menu application', () => {
        it('open and close hamburger menu', async () => {
            await Login.openBasePage();
            await Login.loginAccess();
            await HamburgerMenu.hamburgerMenuSelect();
            
        });

   
     });






