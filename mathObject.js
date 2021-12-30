var x = 25;
var y = Math.sqrt(x);
console.log(y);

x = -5;
y = Math.abs(x);
console.log(y);

x = 5;
y = Math.pow(x, 2);
console.log(y);

x = 90;
y = Math.sin(x);
console.log(y);

x = 2.5;
y = Math.floor(x);
console.log(y);

x = 2.5;
y = Math.ceil(x);
console.log(y);

x = 2.1;
y = Math.ceil(x);
console.log(y);

x = 2.3;
y = Math.round(x);
console.log(y);

x = 2.4;
y = Math.round(x);
console.log(y);

x = 2.5;
y = Math.round(x);
console.log(y);

console.log(Math.max(10, 30, 25));
console.log(Math.min(20, 25, 35 , 15, 30));


// Variable with random value 0 - 10
x = Math.floor((Math.random() * 11));
console.log(x);