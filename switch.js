var dayNo = 2;
var day = "";

switch (dayNo) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day);

switch (dayNo) {
    case 6:
        day = "Saturday";
        break;
    case 0:
        day = "Sunday";
        break;
    default:
        day = "Looking forward to the weekend";
}

console.log(day);


var letter = "A";
letter = letter.toLowerCase();
var isConOrVowel = "";


switch (letter) {
    case "a":
        isConOrVowel = "Vowel";
        break;
    case "e":
        isConOrVowel = "Vowel";
        break;
    case "i":
        isConOrVowel = "Vowel";
        break;
    case "o":
        isConOrVowel = "Vowel";
        break;
    case "u":
        isConOrVowel = "Vowel";
        break;
    default:
        isConOrVowel = "Consonant";
}

console.log(isConOrVowel);

//  Same action for mutiple cases

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        isConOrVowel = "Vowel";
        break;
    default:
        isConOrVowel = "Consonant";
}

console.log(isConOrVowel);