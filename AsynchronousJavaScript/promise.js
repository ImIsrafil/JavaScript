console.log("Welcome");

"use strict";

const promise1 = new Promise((resolve, reject) => {
    let promiseCompleted = true;
    if (promiseCompleted) {
        setTimeout(() => {
            resolve("The promise is completed");
        }, 3000);
    } else {
        reject("The promise is not completed");
    }
});

promise1.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

const promise2 = new Promise((resolve, reject) => {

    resolve("The promise2 is completed");
    reject("The promise2 is not completed");
});

promise2.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

console.log("Good Bye");