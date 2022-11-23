console.log('Exporting Module');

export const cart = [];

//export per me mujt me bart metoden ne script.js
export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart!`)
};

const totalPrice = 240;
const totalQuantity = 25;

export{totalPrice, totalQuantity as tq};

export default function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart!`)
};