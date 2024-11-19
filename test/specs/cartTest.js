
import CartArea from '../pageobjects/cart.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';





describe('cart page and components', () => {
    it('cart page opens from cart icon on inventory page', async () => {
        await CartArea.accessInventoryPage();
        await CartArea.cartOpen();
    })

    it('add item to cart shows in cart icon', async () => {    
        await CartArea.addItemToCart();
    })

    it('add multiple items to the chart to see if the icon changes', async () => {
        await CartArea.accessInventoryPage();
        await CartArea.addMultipleItemsToCart();
    })

    it('items should be saved in the cart after logging out then back in', async () => {
        await HamburgerMenu.hamMenuLogout();
        await CartArea.accessInventoryPage();
        await CartArea.cartOpen();
    })
    
    it('remove item from the inventory page to see number in cart change', async () => {
        await CartArea.removeItem();
    })

    it('remove multiple items from inventory page',async () => {
        await CartArea.removeMultItemsFromPage();
    })

    it('remove item from cart page', async () => {
        await CartArea.removeItemFromCartPage();
    })

    it('checkout page accessible', async () => {
        await CartArea.goToCheckoutPage();
    })

    it('cancel checkout returns to cartpage', async () => {
        await CartArea.cancelCheckout();
    })

    it('continue shopping goes back to inventory page', async () => {
        await CartArea.continueShoppingSite();
    })

    it('when checkout page information left blank should create error warning', async () => {
        await
    })

    it('cancel the order from checkoutfield page', async () => {

    })

    it('checkout fields using valid information', async () => {
        
    })

    it('cancel the order from checkout overview page', async () => {
        
    })

    it('checkout fields using blank spaces', async () => {
        
    })

    it('checkout fields using combination of letters and numbers', async () => {
        
    })

    it('finish checkout process successfully', async () => {
        
    })

    it('back home button returns us back to homepage', async () => {
        
    })

})






