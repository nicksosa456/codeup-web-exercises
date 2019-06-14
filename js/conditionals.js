(function () {

"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var number = confirm("Would you like to enter a number?");
//
// if (number === true) {
//     var enteredNum = Number(prompt("Please enter your number: "));
//     if ((enteredNum % 2) === 0) {
//         alert("That number is even.");
//     } else if ((enteredNum % 2) === 1){
//         alert("That number is odd.");
//     } else {
//         alert("That is not a number.");
//     }
//     if (enteredNum) {
//         alert("That number is "+(enteredNum+100)+" if you add 100.");
//     } else {
//         alert("That is not a number.");
//     }
//     if (enteredNum > 0) {
//         alert("That number is positive.");
//     } else if (enteredNum < 0) {
//         alert("That number is negative.");
//     } else {
//         alert("That is not a number.");
//     }
// } else {
//     alert("Fine, don't enter one.");
// }


//    Functions below ALMOST work

// function oddOrEven(num) {
//     if ((num % 2) === 0) {
//         alert("That number is even.");
//     } else if ((num % 2) === 1) {
//         alert("That number is  odd.");
//     }
//     // return (num & 1) ? "That number is odd." : "That number is even.";
// }
// function plusHundred(num) {
//     if (num) {
//         alert("That number is "+(num + 100)+" if you add 100.");
//     }
//     // return alert("That number is "+(num + 100)+" if you add 100.");
// }
// function negOrPos(num) {
//     if (num > 0) {
//         alert("That number is positive.");
//     } else {
//         alert("That number is negative");
//     }
// }
// if (number === true) {
//     var enterNum = Number(prompt("Please enter your number: "));
//     if (enterNum) {
//         alert(oddOrEven(enterNum) + '/n' + plusHundred(enterNum) + '/n' + negOrPos(enterNum)) ;
//     // alert(plusHundred(enterNum));
//     // alert(negOrPos(enterNum));
//     } else {
//         alert("That is not a number.");
//     }
// } else {
//     alert("Fine then don't do it.");
// }




/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(a) {
    if (a === 'red') {
        return console.log("My bottle is also red.");
    } else if (a === 'orange') {
        return console.log("Carrots are orange.");
    } else if (a === 'yellow') {
        return console.log("Rubber ducks are yellow");
    } else if (a ==='green') {
        return console.log("Forests tend to be green");
    } else if (a === 'blue') {
        return console.log("That is the color of the sea.");
    } else if (a ==='indigo') {
        return console.log("Is a darker purple, I guess.");
    } else if (a ==='violet') {
        return console.log("Some flowers can be this color.");
    } else {
        return console.log("I don't know much about that color.");
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// analyzeColor(randomColor);
// analyzeColor('black');

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch (randomColor) {
//     case 'red':
//         console.log("My bottle is also red.");
//         break;
//     case 'orange':
//         console.log("Carrots are orange.");
//         break;
//     case 'yellow':
//         console.log("Rubber ducks are yellow");
//         break;
//     case 'green':
//         console.log("Forests tend to be green");
//         break;
//     case 'blue':
//         console.log("That is the color of the sea.");
//         break;
//     case 'indigo':
//         console.log("Is a darker purple, I guess.");
//         break;
//     case 'violet':
//         console.log("Some flowers can be this color.");
//         break;
//     default:
//         console.log("I don't know much about that color.");
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Please enter a color:");
// analyzeColor(userColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luck, total) {
    switch (luck) {
        case 0:
            alert("Sorry, no discount today."+"\n"+"Your total is $"+total);
            // Number(console.log("Your total is $"+(0)+total));
            break;
        case 1:
            alert("You receive 10% off today, how nice!"+"\n"+"Your new total is $"+Number((total-(total*.10)).toFixed(2)));
            // Number(console.log("Your new total is $"+(total-(total*.10)).toFixed(2)));
            break;
        case 2:
            alert("Looking good, you got 25% off!"+"\n"+"Your new total is $"+Number((total-(total*.25)).toFixed(2)));
            // Number(console.log("Your new total is $"+(total-(total*.25)).toFixed(2)));
            break;
        case 3:
            alert("Hey, look at you, 35% your purchase today!"+"\n"+"Your new total is $"+Number((total-(total*.35)).toFixed(2)));
            // Number(console.log("Your new total is $"+(total-(total*.35)).toFixed(2)));
            break;
        case 4:
            alert("Your luck got you 50% off today!"+"\n"+"Your new total is $"+Number((total-(total*.50)).toFixed(2)));
            // Number(console.log("Your new total is $"+(total-(total*.50)).toFixed(2)));
            break;
        case 5:
            alert("WOW you get everything for free today!!"+"\n"+"Your new total is $0!");
            break;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var userTotal = prompt("What is the total for your bill?");
alert("Your lucky number today is: "+luckyNumber);
calculateTotal(luckyNumber, userTotal);

})();