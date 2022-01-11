const numbers = [10, 20, 30, 50, 70];

const [num1, num2, ...num3] = numbers;

console.log(num1);
console.log(num2);
console.log(num3);

// swap variables

var a = 10;
var b = 20;
var c = a + b;
b = c - b;
a = c - a;

console.log(b);
console.log(a);

var a = 10;
var b = 20;
var c = a;
a = b;
b = c;

console.log(a);
console.log(b);


let x = 50;
let y = 60;

[x, y] = [y, x];

console.log("x is " + x);
console.log("y is " + y);