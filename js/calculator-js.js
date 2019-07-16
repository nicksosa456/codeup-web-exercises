'use strict';

$('.numbers').click(function(){
    if ($(this).val()) {
        let num = $(this).html();
        $('#leftSide').val(function(i, val){
            return val + num;
        })
    } else if (symbols.html() === true) {
        let num = $(this).html();
        $('#rightSide').val(function(i, val){
            return val + num;
        })
    }
});

const symbols = $('.symbol').click(function(){
    let num = $(this).html();
    $('#middle').val(function(){
        return num;
    })
});

$('.clear').click(function (){
    $('.text-area').val('');
});