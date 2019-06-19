(function () {

    "use strict";

    var enterNum = parseInt(prompt("Pick an odd number between 1 and 50."));

    function isEven(a) {
        return a%2===0;
    }


    while (true) {
        if (isEven(enterNum) || enterNum > 50 || enterNum < 0 || isNaN(enterNum)) {
            enterNum = parseInt(prompt("Please enter a valid odd number."));
        } else {
            console.log("You picked number "+enterNum);
            break;
        }
    }

    for (var num = 1; num < 50; num ++) {
        if (num%2===0) {
            continue;
        } else if (num===enterNum) {
            console.log("Skipping the number you entered: "+enterNum);
            continue;
        }
        console.log("Here is an odd number: "+num);
    }

//    TRIED THIS STUFF, DIDN'T WORK OUT VERY WELL
// function enterNum() {
//     return parseInt(prompt("Pick an odd number between 1 and 50"));
//
// }
// enterNum();
// var wantNum = enterNum();
//
// while (true) {
//     if (wantNum === false || wantNum > 50 || wantNum === (wantNum%2===0)) {
//         return parseInt(prompt("Enter a valid odd number."));
//     } else {
//         break;
//     }
// }
//
//
// for (var num = 1; num < 50; num ++) {
//     if (num%2===0) {
//         continue;
//     } else if (num===wantNum) {
//         console.log("Skipping the number you entered: "+wantNum);
//     }
//     console.log("Here is an odd number: "+num);
// }

})();