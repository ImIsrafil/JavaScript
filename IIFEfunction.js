
// Immediately Invoked Function

(function immediatelyInvoked() {
    console.log("Hello World!");
})();

console.log("");

(function greetingWorld(greetings) {
    console.log(greetings);
})("Hello World! , Welcome to the universe of javaScript");

console.log("");

(function addition(num1, num2) {
    console.log(num1 + num2);
})(10, 30);

console.log("");


// Function Expression

var myFunction = function funcExp() { 
    console.log("Hello this is Israfil");
}


myFunction();
// the function name is optional, it is local to the function body,so it can be omitted;
console.log("");

var functionExpression = function(num1 , num2) {
    var result = num1 + num2;
    console.log(result);
};

functionExpression(10, 20);

