//import { addToCart, totalPrice as price, tq} from "./shoppingCart.js"
//addToCart("bread", 5);
// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('pizza', 6)
// console.log('Importing module');

// price = 260;
// tq = 30;

import add, {cart} from "./shoppingCart.js"
add('burger', 1)
add('pizza', 4)
add('gjys e nja', 3)
add('fli', 1.5)
console.log(cart)