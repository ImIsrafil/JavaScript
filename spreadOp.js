const myFriends = ["Sophia", "Dianna", "Alyssa", "Karolina"];
const yourFriends = ["Krishty", "John Doe", "Jack"];

const allFriends = [...myFriends, ...yourFriends];

console.log(allFriends);

"use strict";

const [friend1, friend2, ...friends] = ["Sophia", "Dianna", "Alyssa", "Karolina"];

console.log(friends);

console.log(friend1);

console.log(friend2);

const person1 = {
    name: "Israfil",
    age: 20,
    nationality: "Bangali"
};

const object = {
    profession: "student",
    lang: ["Bangla", "English", "hindi"],
};

const person = {...person1, ...object};

console.log(person);