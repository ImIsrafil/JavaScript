// Synchronous vs Asynchronous

"use strict";

const taskOne = () => console.log("This is task 1");

const taskTwo = () => console.log("This is task 2");

const taskThree = () => console.log("this is task 3");

const taskFour = () => console.log("This is task 4");

const taskFive = () => console.log("This is task 5");


// Synchronous JavaScript

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();

console.log("");

// Asynchronous JavaScript

taskOne();
taskTwo();
taskFour();
taskFive();