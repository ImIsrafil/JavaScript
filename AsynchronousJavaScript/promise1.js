"use strict";

console.log("Welcome");

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("taskOne is resolved");
        reject("taskOne is rejected");
    });
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("taskTwo is resolved");
        }, 3000);
    });
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("taskThree is resolved");
        reject("taskThree is rejected");
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("taskFour is resolved");
        reject("taskFour is rejected");
    });
};

taskOne()
.then(res => console.log(res))
.then(taskTwo)
.then(res => console.log(res))
.then(taskThree)
.then(res => console.log(res))
.then(taskFour)
.then(res => console.log(res)).catch((err) => {
    console.log(err);
});


console.log("bye");