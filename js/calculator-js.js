'use strict';

const isFloat = num => {
    if (+num === +num && +num !== (+num|0)){
        return true
    }
};

const symbolFunc = $('.symbol').click(function(){
    let num = $(this).html();
    $('#middle').val(function(){
        return num;
    })
});

const numberFunc = $('.numbers').click(function(){
    if ($('#middle').val() === '+' || $('#middle').val() === '-' || $('#middle').val() === '/' || $('#middle').val() === '*') {
        let num = $(this).html();
        $('#rightSide').val(function(i, val){
            return val + num;
        })
    } else {
        let num = $(this).html();
        $('#leftSide').val(function(i, val){
            return val + num;
        })
    }
});

const clearFunc = $('.clear').click(function (){
    $('.text-area').val('');
});

const equalsFunc = $('.equals').click(function(){
     if (isNaN(Number($('#rightSide').val()))===false) {
         let left = Number($('#leftSide').val());
         let middle = $('#middle').val();
         let right = Number($('#rightSide').val());
         let num = $('#leftSide').html();
         $('.text-area').val('');
         switch (middle) {
             case "+":
                 num = left + right;
                 $('#leftSide').val(function(){
                     if (isFloat(num) === true) {
                         return num.toFixed(2);
                     } else {
                         return num
                     }
                 });
                 break;
             case "-":
                 num = left - right;
                 $('#leftSide').val(function(){
                     if (isFloat(num) === true) {
                         return num.toFixed(2);
                     } else {
                         return num
                     }
                 });
                 break;
             case '*':
                 num = left * right;
                 $('#leftSide').val(function(){
                     if (isFloat(num) === true) {
                         return num.toFixed(2);
                     } else {
                         return num
                     }
                 });
                 break;
             case '/':
                 num = left / right;
                 $('#leftSide').val(function(){
                     if (isFloat(num) === true) {
                         return num.toFixed(2);
                     } else {
                         return num
                     }
                 });
                 break;
         }
     }
});


//number 1
let test = "hello world";

const checkCase = (string) => {
    if (string === string.toUpperCase()) {
        return true;
    } else if (string === string.toLowerCase()) {
        return true;
    } else return false;
};
console.log(checkCase(test));


//number 2
let num = [4, 2, 1, 3, 5];
let arr  = [];
let x = 0;

num.forEach(function(number){
    x +=number;
    arr.push(x);
    return arr;
});
console.log(arr);

//number 3

let res = test.split('');
// console.log(res);

const checkSame = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] != null && array[i] === array[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(checkSame(res));

//number 4
let phone = "210-367-FOOD";
let newArray = [];
let newPhone;

const changeLetters = (phoneNumber) => {
    let phoneArr = phoneNumber.split('');
    let thing;
    for (let i = 0; i < phoneArr.length; i++){
        if (phoneArr[i] !== "-" && isNaN(phoneArr[i])===true) {
            switch (phoneArr[i]) {
                case "A":
                case "B":
                case "C":
                    thing = 2;
                    newArray.push(thing);
                    break;
                case "D":
                case "E":
                case "F":
                    thing = 3;
                    newArray.push(thing);
                    break;
                case "G":
                case "H":
                case "I":
                    thing = 4;
                    newArray.push(thing);
                    break;
                case "J":
                case "K":
                case "L":
                    thing = 5;
                    newArray.push(thing);
                    break;
                case "M":
                case "N":
                case "O":
                    thing = 6;
                    newArray.push(thing);
                    break;
                case "P":
                case "Q":
                case "R":
                case "S":
                    thing = 7;
                    newArray.push(thing);
                    break;
                case "T":
                case "U":
                case "V":
                    thing = 8;
                    newArray.push(thing);
                    break;
                case "W":
                case "X":
                case "Y":
                case "Z":
                    thing = 9;
                    newArray.push(thing);
                    break;
            }
        } else {
            newArray.push(phoneArr[i]);
        }
    }
    newPhone = newArray.join('');
    return newPhone;
};

console.log(changeLetters(phone));

//number 5

let a = ['a','b','c'];

const moreArrays = (array) => {
    let b = [];
    for (let i = 1; i < array.length; i++) {
        let copy = array.slice();
        let bit = copy.splice(0, i);
        b.push([bit, copy]);
    }
    return b;
};

console.log(moreArrays(a));