// if statement

var num = 20;

if (num % 2 === 0) {
    console.log("The number " + num + " is Even");
}
if (num % 2 !== 0) {
    console.log("The number " + num + " is Odd");
}


if (num < 18) {
    console.log("Good Day!");
}


if (num % 2 === 0) {
    console.log("The number " + num + " is Even");
} else {
    console.log("The number " + num + " is Odd");
}


if (num < 18) {
    console.log("Good Day");
} else {
    console.log("Good Evening");
}


if(num < 10) {
    console.log("Good Morning");
} else if (num < 18) {
    console.log("Good Day");
} else {
    console.log("Good Evening");
}


// find max;

var num1 = 30;
var num2 = 20;
var num3 = 15;
var Max;

if (num1 > num2) {
    if(num1 > num3) {
        Max = "Num1 is Maximum";
    } else {
        Max = "Num3 is Maximum";
    }
} else {
    if(num2 > num3) {
        Max = "Num2 is Maximum";
    } else {
        Max = "Num3 is Maximum";
    }
}
console.log(Max);


var a = 0;

if(a > 0) {
    console.log("The number is positive");
} else if (a < 0) {
    console.log("The number is nagetive");
} else {
    console.log("The number is zero");
}