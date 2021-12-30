var friendsAndTheirAges = [
    ["Alessa", 19], 
    ["Karolina", 17], 
    ["Dianna", 18], 
    ["Cate line", 16]
];

for (var i = 0; i < friendsAndTheirAges.length; i++) {
    for (var j = 0; j < friendsAndTheirAges[i].length; j++) {
        console.log(friendsAndTheirAges[i][j]);  // Accessing 2D array
    }
}


console.log("");


var scorerAndScore = [
    ["Alessa", 30],
    ["Jesica", 250],
    ["Karolina", 35],
    ["Cate line", 20],
    ["Dianna", 40]
];

function findHighScorer(scorerAndScore) {
    var winner = "";
    var highestScore = -Infinity;

    for (var i = 0; i < scorerAndScore.length; i++) {
        if (highestScore < scorerAndScore[i][1]) {
            highestScore = scorerAndScore[i][1];
            winner = scorerAndScore[i][0];
        }
    }
    return winner;
}

var winner = findHighScorer(scorerAndScore);
console.log("The highest Scorer and Winner is " + winner);