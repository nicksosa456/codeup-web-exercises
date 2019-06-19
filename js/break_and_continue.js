function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// function isItNotNumber(input) {
//     return
// }

// var numberToStop = parseInt(prompt("Pick an odd number between 1 and 50"));

var numberToStop = 0;

while (true) {
    if (numberToStop === isNumeric() || numberToStop > 50 || numberToStop < 0) {

    }
}

for (var num = 1; num < 50; num ++) {
    if (num%2===0) {
        continue;
    }
    console.log("Here is an odd number: "+num);
}


// do {
//     var numberToStop = parseInt(prompt("Pick an odd number between 1 and 50"));
//     if(isNaN(numberToStop) === true) {
//         var numberToStop = parseInt(prompt("Please pick a valid odd number between 1 and 50"));
//         break;
//     }
// } while();
