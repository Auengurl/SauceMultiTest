import SauceBasePage from './basePage.js';

import Login from './login.js';



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

    // get inventoryItem () {
    //     return $('.inventory_item_name ');
    // }

    get addItemCartBtn () {
        return $(`//button[contains(@id, 'add-to-cart')]`);
    }

    get addMultipleItems () {
        return $$('button.add-to-cart');
    }

    get finishBtn () {
        return $('#finish');
    }

    get backHomeBtn () {
        return $('#back-to-products');
    }

        // async cartRunAll() {
        
        
        async accessInventoryPage () {
            await Login.openBasePage();
            await expect(browser.url('https://www.saucedemo.com/'));
            await Login.loginAccess(); 
        }

       async cartOpen (){
            
            await this.shoppingCartBtn.click();
            await expect(browser.url('https://www.saucedemo.com/cart.html'));
            // await browser.pause(3000);
            
        };

        async addItemToCart () {
            await this.accessInventoryPage();
            await this.addItemCartBtn.click(); 
            await expect(this.shoppingCartBtn);
            await browser.pause(3000);
             
        }

        async addMultipleItemsToCart () {
            await this.accessInventoryPage();
            await this.addMultipleItems.click();
            await expect(this.shoppingCartBtn);
            await browser.pause(3000);
        }

        

        // async removeItemsFromCart () {
        //     await this.accessInventoryPage();
        //     await this.addItemToCart();
        //     await this.cartOpen();
        //     await this.removeBtn.click();
            
        // }

        

    


    
}



export default new CartArea();