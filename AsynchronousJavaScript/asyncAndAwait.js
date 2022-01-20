const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Task one is completed");
    });
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task tow is complete");
        }, 2000);
    });
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("Task three is completed");
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Task four is completed");
    });
};

const taskFive = () => {
    return new Promise((resolve, reject) => {
        resolve("Task five is completed");
    });
};


async function thisIsASyncFun() {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    const t5 = await taskFive();
    console.log(t5);
}

thisIsASyncFun();