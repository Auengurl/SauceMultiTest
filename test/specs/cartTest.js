import Login from '../pageobjects/login.js';
import CartArea from '../pageobjects/cart.js';


describe('cart page and components', () => {
    // it('cart page opens from cart icon on inventory page', async () => {
    //     await Login.openBasePage();
    //     await Login.loginAccess();
    //     await CartArea.cartOpen();
    // })

    // it('add item to cart shows in cart icon', async () => {
    //     await Login.openBasePage();
    //     await Login.loginAccess();
    //     await CartArea.addItemToCart();
    // })

    it('remove item from cart page', async () => {
        await CartArea.removeItemsFromCart();

    })
})


