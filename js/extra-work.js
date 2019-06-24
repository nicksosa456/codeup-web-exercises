(function (){
    'use strict';

    //function will console log number if it is a narcissistic number.
    var isNarcissistic = function (num) {
        var toPower = num.toString().length;
        var allDigits = [];
        var result = [];
        var digits = num.toString();
        toPower = parseInt(toPower);
        for (var i = 0; i < digits.length; i++) {
            allDigits.push(parseInt(digits[i]));
        }
        for (var j = 0; j < allDigits.length; j++) {
            result.push(Math.pow(allDigits[j],toPower));
        }
        var sum = result.reduce(add, 0);
        if (num === sum) {
            // narcArray.push(num);
            console.log(num);
        }
    };

    var add = function (a, b) {
        return a + b;
    };

    var narcArray = [];

    //trying to figure out how to write the loop and use the function. needs to loop until there are 25 numbers in the array.

    var x = 0;
    while (x < 10) {
        isNarcissistic(x);
        x++;
    }


})();