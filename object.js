var friend1 = {
    name: "Alessa",
    country: "United State",
    eyeColor: "Blue",
    age: 17,
    lan: ["English", "France"],
};

console.log(friend1.name);
console.log(friend1.country);

console.log("");

var friend2 = {
    name: "Karolina",
    country: "Germany",
    eyeColor: "Brown",
    age: 19,
    lan: ["German", "English", "France"],
};

console.log(friend2.name);
console.log(friend2.lan);


// Object Constructor Function

function Friend(name, country, eyeColor, age, lan) {
    this.name = name;
    this.country = country;
    this.eyeColor = eyeColor;
    this.age = age;
    this.lan = lan;
    this.display = function() {
        console.log("My name is " + this.name);
        console.log("My country is " + this.country);
        console.log("My eye color is " + this.eyeColor);
    }
}


var friend3 = new Friend("Cate Line", "England", "Blue", 17, ["English", "Arbi", "Bangla"]);

console.log(friend3.name);
console.log(friend3.country);

var friend4 = new Friend("Kaety", "England", "Brown", 17, ["English"]);

console.log(friend4.name);
console.log(friend4.country);

friend4.display();