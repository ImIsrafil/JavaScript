var number = 10;
var result = "";

if (number > 0) {
    result = "The number is Positive";
} else if (number < 0) {
    result = "The number is Negative";
} else {
    result = "The number is zero";
}

console.log(result);


var number = 0;

var result = number > 0 ? "The number is Positive" : number < 0 ? "The number is negative" : "The number is zero";

console.log(result);

console.log("");

// find max among three number using ternary operator

var num1 = 10;
var num2 = 40;
var num3 = 30;

var max = num1 > num2 && num1 > num3 ?
 "num1 is Greater " + num1 :
  num2 > num1 && num2 > num3 ?
 "num2 is Greater " + num2 :
 "num3 is Greater " + num3;

console.log(max);