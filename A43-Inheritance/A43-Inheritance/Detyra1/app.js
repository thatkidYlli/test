// Klasa e prindit
class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Hello ${this.name}`);
  }
}


class Student extends Person {}

let student1 = new Student("jCoders");
student1.hello();


