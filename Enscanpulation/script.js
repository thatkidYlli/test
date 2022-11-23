class CoffeeMachine {
    waterAmount = 0;0

    constructor(power) {
        this.power = power;
        console.log(`Created a coffee-machine, power: ${power}`);
    }
}

let CoffeeMachine = new CoffeeMachine(100);

CoffeeMachine.waterAmount = 200;

class CoffeeMachine {
    _waterAmount = -10;

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value
    }

    get waterAmount() {
        return this._waterAmount
    }
    constructor(power) {
        this._power = power
    }
}

let coffeeMachine = new CoffeeMachine(100)

coffeeMachine.waterAmount = -10;

console.log(coffeeMachine)


class CoffeeMachine {
    constructor(power) {
        this._power = power
    }

    get power() {
        return this._power
    }
}

let coffeeMachine = new CoffeeMachine(100)

alert(`Power is: ${coffeeMachine.power}W`)

coffeeMachine.power = 25

class CoffeeMachine {
    #waterLimit = 200

    #fixWaterAmount(value) {
        if (value < 0) return 0
        if (value > this.#waterLimit) return this.#waterLimit
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value)
    }
}
let coffeeMachine = new CoffeeMachine()
coffeeMachine.#fixWaterAmount(123)
coffeeMachine.#waterLimit = 1000
