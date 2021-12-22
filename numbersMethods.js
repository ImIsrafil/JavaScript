var num = 20;
console.log(typeof num);

num = num.toString(); // converting a number type data to string type data uning toString() Method.

console.log(typeof num);

num = "20.5";

num = parseInt(num); // converting a string type data to number type data using parseInt() Method.

console.log(typeof num);
console.log(num.valueOf());

num = "20.30";

num = parseFloat(num); // converting a decimal numbers string to number type decimal useing parseFloat() Method. 
console.log(num);

num = 3.59999;

num = num.toFixed(2); // toFixed() Method returns specific number of decimal point value.

console.log(num);

num = 30.668888;

num = num.toPrecision(2); // toPrecision returns specific length of number

console.log(num);

console.log(typeof Number("20"));


