// import { addToCart, totalPrice as price,  } from './shoppingCart.js'
import * as shoppingCart from './shoppingCart.js'
shoppingCart.addToCart('pizza, 6')
// addToCart('bread', 5)

console.log('Importing module')

import add , {cart} from './shoppingCart.js'
add('bread' , 5)
add('pizza' , 7)
add('apple' , 4)
console.log(cart)