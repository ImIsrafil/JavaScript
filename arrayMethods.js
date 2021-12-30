var friends = ["Alessa", "Karolina", "Dianna", "Crissty", "Cate line", "Maria"];

console.log(friends);
console.log(friends.length);

friends.push("Eliza"); // Adding an item to the array

console.log(friends);
console.log(friends.length);

friends.pop(); // Removing the last item of an array

console.log(friends);
console.log(friends.length);

friends.shift(); // The shift() method is quit same to the pop() 
console.log(friends); //but shift() will remove an array item from the first index.

friends.unshift("Jesica"); // Adding an element as first item to an array
console.log(friends);

// The splice() method 
// friends.splice(startPosition, numberOfItemTobeRemoved, newItem, neItem, ..., newItem);

friends.splice(2, 0, "Anne Mariy", "Shakira"); // Adding elements using splice() method
console.log(friends);

friends.splice(2, 1); // Removing 1 item from the index 2
console.log(friends);


// The slice() method
// friends.slice(startingPosition, endingPosition)

var someFriends = friends.slice(2, 5);
console.log(someFriends);

var list1 = [1, 2, 3, 4, 5];
var list2 = [6, 7, 8, 9, 10];

var numbers = list1.concat(list2); // Combine tow arrays in one using concat() method


friends.sort();
console.log(friends);

friends.reverse();
console.log(friends);

// Numberic sort

var numbersList = [25, 15, 20, 10, 30, 5, 1];

console.log(numbersList);

numbersList.sort(function(a, b){return a - b});

console.log(numbersList);