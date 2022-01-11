// Callback and higher order function
"use strict";

const square = x => console.log(`square of ${x} is ${x * x}`);


const higherOrderFunction = (num, callback) => {
    callback(num);
};

higherOrderFunction(10, square);


console.log("");


const taskOne = (callback) => {
    console.log("This is task one");
    callback();
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("This is task two");
        callback();
    }, 5000);
};

const taskThree = (callback) => {
    console.log("This is task three");
    callback();
};

const taskFour = (callback) => {
    console.log("This is task four");
    callback();
};

const taskFive = () => {
    console.log("This is task five");
};


taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});