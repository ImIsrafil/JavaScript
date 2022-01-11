
const numbers = [10, 20, 15, 25, 30, 35];

const numbersSqr = [];

numbers.forEach((number, index, array) => {
    numbersSqr.push(number ** 2);
    console.log(number);
    console.log(index);
    console.log(array);
});

console.log(numbersSqr);


numbers.forEach((number, index, array) => {
    array[index] = number + 5;
});

console.log(numbers);