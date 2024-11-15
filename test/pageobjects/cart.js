import SauceBasePage from './basePage.js';
import SecurityPage from './security.js';
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
        return $('.btn btn_secondary btn_small cart_button');
    }

    get continueBtn () {
        return $('#continue');
    }

    get inventoryItem () {
        return $('.inventory_item_name ');
    }

    get addItemCartBtn () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get finishBtn () {
        return $('#finish');
    }

    get backHomeBtn () {
        return $('#back-to-products');
    }

        // async cartRunAll() {
       async cartOpen (){
            await Login.openBasePage();
            await Login.loginAccess();
            await this.shoppingCartBtn.click();
            
        };

    


    
}



export default new CartArea();