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
