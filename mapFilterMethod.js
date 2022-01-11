const numbers = [10, 15, 20, 25, 30];

const numbersSqr = numbers.map((number) => {
    return number ** 2;
});

console.log(numbersSqr);


const filteredNumbers = numbers.filter((number) => {
    return (number % 2 === 0);
});

console.log(filteredNumbers);