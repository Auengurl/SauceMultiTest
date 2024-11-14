
import Login from '../pageobjects/login.js';


describe('Login application', () => {
        it('should login with valid username and password', async () => {
            await Login.openBasePage();
            await Login.validLogin(); 
            
        });

   
     });






