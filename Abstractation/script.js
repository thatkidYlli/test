class Fruit {
    constructor(){
        if(this.constructor === Fruit){
            throw new Error('Class Fruit cannot be instantantiated!');
        }
        this.color === 'unknown'
    }
    someMethod(){
        throw new Error('Method someMethod() should be implented.')
    }
}

class Orange extends Fruit{
    constructor(){
        super()
        this.color = 'orange'
    }
    someMethod(){
        console.log("Hello someMethod: ", this.color)
    }
}
const orange = new Orange()
orange.someMethod()

class Product{
    constructor(name, price, quantity){
        if(this.constructor === Product){
            throw new TypeError('Cannot construct abstract class.')
        } else{
            this.name = name
            this.price = price
            this.quantity = quantity
            
        }
    }

    vat(){
        throw new TypeError('Do not call abstract method vat from child.')
    }

    total(){
        return this.quantity * this.price
    }
}

class Food extends Product{
    constructor(name, price, quantity){
     super(name, price, quantity)
    }
}
let f = new Food ('Nutella', 6.5, 5)
f.vat()

