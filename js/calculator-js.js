'use strict';


const symbolFunc = $('.symbol').click(function(){
    let num = $(this).html();
    $('#middle').val(function(){
        return num;
    })
});

const numberFunc = $('.numbers').click(function(){
    if ($('.symbol').html()===true) {
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