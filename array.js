var friends = ["Dianna", "Alessa", "Krissty", "Cate line", "Jesica"];

var items = friends.length;

console.log(items);
console.log(friends);
console.log(friends[2]); // access an array element by referring to the index number

friends[0] = "Selina"; // This statement changes the value of the first element in cars
console.log(friends); // With JavaScript, the full array can be accessed by referring to the array name


friends[friends.length] = "Alize";
console.log(friends);
console.log(friends[friends.length - 1]);





var friends = new Array("Dianna", "Krissty", "Cate line", "Jesica");
console.log(friends);


// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.

// Spaces and line breaks are not important. A declaration can span multiple lines:
var friendsAges = [
    10, 
    16, 
    17, 
    15, 
    20, 
    19
];

// can hold different types of data value in a single Array at the same time


var car = ["ford", "Black", 200];


var myfriends = [
    {name: "eliza", eyeColor: "Blue", age: 17},
    {name: "Alessa", eyeColor: "Brown", age: 15},
    {name: "Karolina", eyeColor: "Blue", age: 18},
    {name: "Sophia", eyeColor: "Black", age: 19},
    "Alize",
    20,
    ["Saab", "Volvo", "Ford"],
    true,
    false
];

console.log(myfriends);


// Looping Array Elements

for (var i = 0; i < myfriends.length; i++) {
    console.log(myfriends[i] + " looped");
}


// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements".

console.log(typeof myfriends);

var fruits = ["apple", "banana", "cherry"];

// The real strength of JavaScript arrays are the built-in array properties and methods

var len = fruits.length; // find number of array elements in an array using the length property
console.log(len);
console.log(fruits);

fruits.push("orange"); // Adding a new element to an array is using push() method
console.log(fruits);

fruits.pop(); // Removing the last element of an array is using pop() method
console.log(fruits);

fruits[fruits.length] = "Lemon"; // New element can also be added to an array using the length property
console.log(fruits);

// WARNING !
// Adding elements with high indexes can create undefined "holes" in an array


// How to Recognize an Array
// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object"
console.log(typeof fruits);

// Solution 1:
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

var isArray = Array.isArray(fruits);
console.log(isArray);

// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor

var isArray = fruits instanceof Array;
console.log(isArray);