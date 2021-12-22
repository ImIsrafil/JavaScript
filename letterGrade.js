var marks = 101;
var Grade;
if (marks > 100 || marks < 0) {
    Grade = "The Number is invalid";
} else if (marks >= 80 && marks <= 100) {
    Grade = "A+";
} else if (marks >= 70) {
    Grade = "A";
} else if (marks >= 60) {
    Grade = "A-";
} else if (marks >= 50) {
    Grade = "B";
} else if (marks >= 40) {
    Grade = "C";
} else if (marks >= 33) {
    Grade = "D";
} else {
    Grade = "F";
}

console.log(Grade);