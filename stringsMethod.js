var text = "Bangladesh";
var len = text.length;
console.log(len);

var char = text.charAt(2);
console.log(char);

text = text.toUpperCase();
console.log(text);

text = text.toLowerCase();
console.log(text);

var text1 = "Bangladesh";
var text2 = " is a beautiful country";

var text3 = text1.concat(text2);
console.log(text3);


var text = "I Love Bangladesh";
var text2 = text.slice(7);
console.log(text2);

var text3 = text.slice(0, 6);
console.log(text3);


var text = "a,b,c,d,e,f";
var textArray = text.split(",");
console.log(textArray);

var text = "Bangladesh";
var index = text.indexOf("g");
console.log(index);

var text = "Microsoft is awesome";
var text2 = text.replace("Microsoft", "Google");
console.log(text2);

var text = "Microsoft is awesome Microsoft";
var includes = text.includes("Microsoft");
console.log(includes);

var text = "Hello world, welcome to universe.";
var startsWith = text.startsWith("Hello");
console.log(startsWith);

var endsWith = text.endsWith("universe.");
console.log(endsWith);

var text = "    hello world";
var text2 = text.trim();
console.log(text2);

var text = "5"
var text2 = text.padEnd(4,0);
console.log(text2);