'use strict';

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
     if (isNaN(parseInt($('#rightSide').val()))===false) {
         let left = parseInt($('#leftSide').val());
         let middle = $('#middle').val();
         let right = parseInt($('#rightSide').val());
         let num = $('#leftSide').html();
         switch (middle) {
             case "+":
                 $('.text-area').val('');
                 num = left + right;
                 $('#leftSide').val(function(){
                     return num.toFixed(2);
                 });
                 break;
             case "-":
                 $('.text-area').val('');
                 num = left - right;
                 $('#leftSide').val(function(){
                     return num.toFixed(2);
                 });
                 break;
             case '*':
                 $('.text-area').val('');
                 num = left * right;
                 $('#leftSide').val(function(){
                     return num.toFixed(2);
                 });
                 break;
             case '/':
                 $('.text-area').val('');
                 num = left / right;
                 $('#leftSide').val(function(){
                     return num.toFixed(2);
                 });
                 break;
         }
     }
});