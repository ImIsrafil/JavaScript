const myFriends = ["Sophia", "Dianna", "Alyssa", "Karolina"];
const yourFriends = ["Krishty", "John Doe", "Jack"];

const allFriends = [...myFriends, ...yourFriends];

console.log(allFriends);

"use strict";

const [friend1, friend2, ...friends] = ["Sophia", "Dianna", "Alyssa", "Karolina"];

console.log(friends);

console.log(friend1);

console.log(friend2);