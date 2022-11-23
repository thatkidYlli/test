class Animal {
        speak() {
            console.log('Animals have different sounds');
        }
    }
    class Cat extends Animal {
        speak() {
            console.log('Cat says meow meow')
        }
    }
    class Dog extends Animal {
        speak() {
            console.log('Dog says woof woof')
        }
    }
    class Fox extends Animal {
        speak() {
            console.log('Fox says UuU')
        }
    }
    
    var x = [new Cat(), new Dog(), new Fox()];
    x.forEach(function (info) {
        info.speak
    })