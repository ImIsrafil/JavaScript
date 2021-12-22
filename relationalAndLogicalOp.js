// Ralational Operator ->    > , >= , < , <= , ==, ===, != , !==

var num1 = 10;
var num2 = 20;
var num3 = 15;
var condition;

condition = num1 > num2;
console.log(condition);

condition = num1 < num2;
console.log(condition);

condition = num1 >= num2;
console.log(condition);

condition = num1 <= num2;
console.log(condition);

condition = num1 >= 10;
console.log(condition);

condition = num1 <= 10;
console.log(condition);

condition = num1 >= 5;
console.log(condition);

condition = num1 == "10";
console.log(condition);

condition = num1 == 10;
console.log(condition);

condition = num1 == "5";
console.log(condition);

condition = num1 === "10";
console.log(condition);

condition = num1 === 10;
console.log(condition);

condition = num1 != "10";
console.log(condition);

condition = num1 != 10;
console.log(condition);

condition = num1 != 5;
console.log(condition);

condition = num1 !== "10";
console.log(condition);

condition = num1 !== 10;
console.log(condition);

condition = num1 !== "5";
console.log(condition);

condition = num1 !== 5;
console.log(condition);


// Logical Operator ->     && , || , !

condition = num1 < num2 && num2 > num3;
console.log(condition);

condition = num1 < num2 && num2 < num3;
console.log(condition);

condition = num1 > num2 && num2 < num3;
console.log(condition);

condition = num1 < num2 || num2 > num3;
console.log(condition);

condition = num1 < num2 || num2 < num3;
console.log(condition);

condition = num1 > num2 || num2 < num3;
console.log(condition);

condition = !false;
console.log(condition);

condition = !(num1 > num2);
console.log(condition);

condition = !true;
console.log(condition);

condition = !(num1 < num2);
console.log(condition);
