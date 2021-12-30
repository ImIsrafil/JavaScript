// find max from a numberic array

var numbersList = [10, 20, 25, 15, 30, 40, 50, 35, 55];

function findMaxFromArray(arr) {
    var max = -Infinity;
    var index = Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return [max, index]; // returning max item and it's position number (index) in array
}

var max = findMaxFromArray(numbersList);
console.log(max);


// shortcut method to find max number from an array is using sort() method and length property

numbersList.sort(function(a, b) {
    return a - b;
});

var max = numbersList[numbersList.length - 1];
console.log(max);