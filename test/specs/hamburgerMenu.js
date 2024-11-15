
import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';
import hamburgerMenu from '../pageobjects/hamburgerMenu.js';


describe('hamburger menu application', () => {
        it('open and close hamburger menu', async () => {
            await Login.openBasePage();
            await Login.loginAccess();
            await HamburgerMenu.hamburgerMenuSelect();

        });

        it('select all items from hamburger menu ', async () => {  
            await HamburgerMenu.hamMenuAllItems();
    
        })

        it('logout from the hamburger menu', async () => {
            await hamburgerMenu.hamburgerMenuSelect();
            await hamburgerMenu.hamMenuLogout();
        })

        it('opens the all about section from the hamburger menu', async () => {
            await Login.openBasePage();
            await Login.loginAccess();
            await hamburgerMenu.hamburgerMenuSelect();
            await hamburgerMenu.hamMenuAbout();
            
        })
   
     });






