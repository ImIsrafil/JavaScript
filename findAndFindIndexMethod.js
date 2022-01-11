const numbers = [ 5, 20, 15, 5, 7, 13, 30 ];

const fristEvenNumber = numbers.find(x => x % 2 === 0);

console.log(fristEvenNumber);


const fristEvenNumbersPosition = numbers.findIndex(x => x % 2 === 0);

console.log(fristEvenNumbersPosition);