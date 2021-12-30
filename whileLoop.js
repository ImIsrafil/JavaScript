var i = 0;
while (i < 20) {
    console.log(i);
    i++;
}

console.log("");

var n = 20;
var sum = 0;
var i = 1;
while (i < n) {
    if(i % 2 === 0) {
        sum += i;
    }
    i++;
}

console.log(sum);