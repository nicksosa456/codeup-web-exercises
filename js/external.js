"use strict";

// console.log("Hello from external JavaScript");
// alert("Welcome to my Website!");
// var color = prompt("What is your favorite color?");
// console.log("Neat, "+color+" is my favorite as well!");

// alert("Thank you for returning  your movie(s).");
// var rentalDays = Number(prompt("Please enter the total days the movie(s) were rented for: "));
// var totalPrice = rentalDays*3;
// alert("For "+rentalDays+" you owe: $"+totalPrice);

// var googleHours = Number(prompt("How  many hours did you work at Google this week?"));
// var amazonHours = Number(prompt("How many hours did you work at Amazon this week?"));
// var facebHours = Number(prompt("how many hours did you work at Facebook this week?"));
// alert("You will be paid $"+(googleHours*400+amazonHours*380+facebHours*350)+" this week.");

// var classTime = Number(prompt("What time does this class start?"));
// var studentTime = confirm("Click OK if you do NOT have a "+classTime+" class already");
// var maxClassSize = Number(prompt("What is the max class size?"));
// var currentClassSize = Number(prompt("What is the current class size?"));
// var totalClassSize = maxClassSize > currentClassSize;
// // classTime == studentTime;
// alert("Student dsoauhga"+totalClassSize && studentTime);

// console.log(classTime);
// console.log(studentTime);
// console.log(maxClassSize);
// console.log(currentClassSize);
// console.log(totalClassSize);


var premiumMember = confirm("Are you a premium member of store?");
var moreThanTwoItems = confirm("And/Or have you bought more than two (2) items?");
var offerExpirationDate = confirm("Click OK if the offer is NOT expired.");
alert("The product offer has been accepted."+(premiumMember || moreThanTwoItems) && offerExpirationDate);
