// Javascript strings are for storing and manipulating text.
// A JavaScript string is zero or more characters written inside
// quotes


// Example

let text = "John Doe";

// you can use double or single quotes;

// Example

let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

// You can use quotes inside a string,
// as long as they don't match the quotes surrounding the string:

// Example

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';



// String Length

// To find the length of a string, use the built-in "length" property

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

console.log(length); // console log will be 26


// Escape Character
// Because strings must be written within quotes, JavaScript
// will misunderstand this string:

// let text = "We are the so-called "Vikings" from the north.";

// The string will be chopped to "We are the so-called ".

// The solution to avoid the problem, is to use the backslash
// escape character.

// \' single quote
// \" double quote
// \\ backslash


// Example 

let text1 = "We are the so-called \"Vikings\" from the north.";



// JavaScript Strings as Objects

// Normally, JavaScript strings are primitive values, created from literals

let x = "John";

// But strings can also be defined as objects with the keyword new

let y = new String("John");

// Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results:



// JavaScript String Methods

// String methods help you to work with strings.


// String Methods and Properties

// Primitive values, like "John Doe", 
// cannot have properties or methods (because they are not objects).
// But with JavaScript, methods and properties are also available
// to primitive values, because JavaScript treats primitive values
// as objects when executing methods and properties.

// String Length
// The length property returns the length of a string:

let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let len = text2.length;


/* The String slice() Method
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1): */

let str = "Apple, Banna, Kiwi"
let part = str.slice(7, 13);

console.log(part);

// Remember: JavaScript counts positions from zero. First position is 0.
// If a parameter is negative, the position is counted from the end of the string.

// This example slices out a portion of a string from position -12 to position -6:

let str2 = "Apple, Banna, Kiwi";
let part1 = str2.slice(-12, -6);

// If you omit the second parameter, the method will slice out the rest of the string:

let part2 = str.slice(7);

// or, counting from the end:

let part3 = str.slice(-12);


// The String substring() Method

// substring() is similar to slice().

// The difference is that substring() cannot accept negative indexes.

let part4 = substring(7, 13);
// If you omit the second parameter, substring() will slice out the rest of the string.

// The String substr() Method

// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

let part5 = str.substr(7, 6);

// If you omit the second parameter, substr() will slice out the rest of the string.


