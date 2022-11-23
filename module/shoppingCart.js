console.log('Exporting module')

const cart = []

export const addToCart = function(product, quantity){
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 240
const totalQuantity = 25

export{totalQuantity, totalQuantity as tq}

export default function(product, quantity){
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`)
}