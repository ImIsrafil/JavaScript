var win = 0;
var lost = 0;

for (var i = 0; i < 5; i++) {
    var guessNum = parseInt(prompt("Guess a Number between 1 - 10 to match: "));
    var randomNum = Math.floor((Math.random() * 9)) + 1;

    if (guessNum === randomNum) {
        document.write("The number is Matched "+ randomNum + "<br>");
        win++;
    } else {
        document.write("The number is not Matched " + randomNum + "<br>");
        lost++;
    }
}

document.write("<h1>You have won the game " + win + " times </h1>");
document.write("<h2>You have lost the game " + lost + " times </h2>"); 