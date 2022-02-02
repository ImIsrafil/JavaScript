function Friend(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

const greet = function(sayHi, askForMatter) {
    console.log(`${sayHi} ${this.firstName} ${this.lastName} ${askForMatter}`);
}

const friend1 = new Friend("Dianna", "Smith", "CSE");

greet.call(friend1, "Hello", "How are you?");
greet.apply(friend1, ["Hi", "what is up?"]);




function Employee(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
}


const employee1 = new Employee("John", "Doe", "CSE");

const fn = greet.bind(employee1);

fn("Hi", "what are you doing");