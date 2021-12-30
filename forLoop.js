for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("");

for (var i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("");

var i = 0;

for ( ;i < 10; ) {
    console.log(i);
    i++;
}

console.log("");

// 1+2+3+4+....+n     #math

var limit = 50;
var sum = 0;

for (var i = 1; i <= limit; i++) {

    sum += i; // sum = sum + i

}

console.log("1 + 2 + ... + " + limit + " = " + sum);