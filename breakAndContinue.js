// The break statement "jumps out" of a loop.

// The continue statement "jumps over" one iteration in the loop.

for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i === 10) {
        break;
    }
    console.log(i);
}

console.log("");

for (var i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

console.log("");

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


var i = 3;

switch (i) {
    case 5:
        console.log("This is 5");
        break;
    case 2:
        console.log("This is 2");
    case 3:
        console.log("This is 3");
    case 4:
        console.log("This is 4");
        break;
    case 6:
        console.log("This is 6");
    case 7:
        console.log("This is 7");
        break;
    default:
        console.log("This number is out of range");
}
