import Login from '../pageobjects/login.js';
import CartArea from '../pageobjects/cart.js';




describe('cart page and components', () => {
    // open the cart from the cart page
    // it('cart page opens from cart icon on inventory page', async () => {
    //     await CartArea.accessInventoryPage();
    //     await CartArea.cartOpen();
    // })

    // Can add something to the cart - 
        // -add several things to the cart (where the number adds up)
    it('add item to cart shows in cart icon', async () => {
            
            await CartArea.addItemToCart();
    
        })
     // -add several things to the cart (where the number adds up)
    // it('add multiple items to the chart to see if the icon changes', async () => {
    //     await CartArea.addMultipleItemsToCart();
    // })

     
    // it('remove item from cart page', async () => {
    //     await CartArea.removeItemsFromCart();

    // })

    
})


// Testing the Cart Positive

// Can add something to the cart - add several things to the cart (where the number adds up)
// Shopping cart badge



// Remove objects from the cart - remove button 
// Object should disappear and be removed from the cart number


// Checkout button- takes to page
// 	Seperate test of the checkout button
// First name, last name, zip fields
// Happy names and numbers
// Boundary test
// Letters numbers characters
// etc
// Cancel button
// Continue button
// Cancel button 
// Finished button
// https://www.saucedemo.com/checkout-complete.html 
// Back home button
// Continuing shopping button 
// Should work and take you back to 
