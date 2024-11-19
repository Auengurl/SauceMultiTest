import { browser } from '@wdio/globals';
import { $ } from '@wdio/globals';

import SauceBasePage from './basePage.js';
import Login from './login.js';
import SecurityPage from './security.js';
import HamburgerMenu from './hamburgerMenu.js';




class CartArea extends SauceBasePage {

    get shoppingCartBtn () {
        return $('.shopping_cart_link');
    }

    get cartNotification () {
        return $('.shoping_cart_badge');
    }

    get cancelBtn () {
        return $('#cancel');
    }

    get continueShoppingBtn () {
        return $('#continue-shopping');
    }

    get checkoutBtn () {
        return $('#checkout');
    }

    get removeBtn() {
        return $(`//button[contains(@id, 'remove')]`);
    }

    get continueBtn () {
        return $('#continue');
    }


    get addItemCartBtn () {
        return $(`//button[contains(@id, 'add-to-cart')]`);
    }

    get addMultipleItems () {
        return [
            $('#add-to-cart-sauce-labs-backpack'),
            $('#add-to-cart-sauce-labs-bike-light'),
            $('#add-to-cart-sauce-labs-bolt-t-shirt'),
            $('#add-to-cart-sauce-labs-fleece-jacket'),
            $('#add-to-cart-sauce-labs-onesie'),
            $(`button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]`)
        ];
    }

    get removeMultipleItems () {
        return [
            $('#remove-sauce-labs-backpack'),
            $('#remove-sauce-labs-bike-light'),
            $('#remove-sauce-labs-bolt-t-shirt'),
            $('#remove-sauce-labs-fleece-jacket'),
            $('#remove-sauce-labs-onesie'),
            $(`button[data-test="remove-test.allthethings()-t-shirt-(red)"]`)
        ];
    }

    get finishBtn () {
        return $('#finish');
    }

    get backHomeBtn () {
        return $('#back-to-products');
    }

        
        
        
        async accessInventoryPage () {
            await Login.openBasePage();
            await expect(browser.url('https://www.saucedemo.com/'));
            await Login.loginAccess(); 
        }

       async cartOpen (){
            
            await this.shoppingCartBtn.click();
            await expect(browser.url('https://www.saucedemo.com/cart.html'));
            
            
        };

        async addItemToCart () {
            await this.accessInventoryPage();
            // await this.addItemCartBtn.click(); 
            await expect(this.shoppingCartBtn);
            
             
        }

        async removeItem () {
            await this.removeBtn.click();
        }
         
        async addMultipleItemsToCart () {

            await this.removeItem();
            const items = this.addMultipleItems;
                for (const item of items) {
                await item.click();
}
            await expect(this.shoppingCartBtn).toBeDisplayed();
            
        }

        

        async removeItemFromCart () {
            
            await this.cartOpen();
            await this.removeBtn.click();
            
        }

        async removeMultItemsFromPage () {
            await this.continueShoppingBtn.click();
            await this.addItemCartBtn.click();
            
            const items = this.removeMultipleItems;
                for (const item of items) {
                await item.click();
}
            await expect(this.shoppingCartBtn).toBeDisplayed();
        }

        async removeItemFromCartPage () {
            await this.addItemCartBtn.click();
            await this.addMultipleItemsToCart();
            await this.removeItemFromCart();
        }

        async goToCheckoutPage () {
            await this.checkoutBtn.click();
            await expect(browser.url('https://www.saucedemo.com/checkout-step-one.html'));
        }

        async cancelCheckout () {
            await this.cancelBtn.click();
            await expect(browser.url('https://www.saucedemo.com/cart.html'));
        }

        async continueShoppingSite () {
            await CartArea.continueShoppingBtn.click();
            await expect(SecurityPage.HomePage);
        }

        
        async blankCheckout () {

            await CartArea.continueBtn.click();
        }
    


    
}



export default new CartArea();