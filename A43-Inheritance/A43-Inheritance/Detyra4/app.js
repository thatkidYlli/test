// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {
  constructor(name) {
    console.log("Creating student class");

    // call the super class constructor and pass in the name parameter
    super(name);
  }
}

let student1 = new Student("Jack");
student1.greet();

/* Këtu, super brenda klasës Student i referohet klasës Person. 

 Here, super inside Student class refers to the Person class. Hence, when the constructor of Student class is called,
  it also calls the constructor of the Person class which assigns a name property to it.
*/
