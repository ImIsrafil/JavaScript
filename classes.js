"use strict";

class Student {
    constructor(name, id, gpa) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;
    }
    getFullDetailsInfo() {
        console.log(`Student name is ${this.name}. his/her GPA is ${this.gpa}. his/her id is ${this.id}`);
    }
    set studentsName(name) {
        this.name = name;
    }
    get fullDetailsInfo() {
        return [this.name, this.id, this.gpa];
    }
}

const student1 = new Student("Israfil", 1000, 4.70);

console.log(student1);

student1.getFullDetailsInfo();

student1.studentsName = "Sophia";
console.log(student1.fullDetailsInfo);


// inheritance


class Car {
    constructor(brand) {
        this.carName = brand;
    }
    present() {
        return `I have a ${this.carName}`;
    }
}

class Model extends Car{
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return `${this.present()} it's model is ${this.model}`;
    }
}


const car1 = new Model("Ford", "Mustang");

console.log(car1.show());