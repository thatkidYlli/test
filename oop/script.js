class Personi{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2022 - this.birthYear);
    }
    greet(){
        console.log(`Hello ${this.fullName}`);
    }
    get age(){
        return 2022 - this.birthYear;
    }
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert (`${name} is not a full name!`)
    }
    get fullName(){
        return this._fullName;
    }
}

class Studenti extends Personi{
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course;
    }
    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }
    calcAge(){
        console.log(`I'm ${2022 - this.birthYear} years old but I feel like ${2022 - this.birthYear + 5}`);
    }
}
const ylla = new Studenti('Yll Gula', 2006, 'Gjimnazi Shkencor')