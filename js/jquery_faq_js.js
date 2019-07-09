"use strict";

$('#firstButton').click(function(event) {
    event.preventDefault();
    $('dd').toggleClass('invisible').toggleClass('maroon');
});

$('dt').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('highlight');
});

$('#secondFacts').click(function(event) {
    event.preventDefault();
    $('ul').each(function() {
        $(this).children().last().css('background-color', 'yellow');
    });
});

$('h3').click(function(){
    $(this).next().slideToggle();
    $(this).next().css('font-weight', 'bold');
});

$('li').click(function(event){
    event.preventDefault();
    $(this).parent().children().first().css('color', 'blue');
});

$('#hideX').click(function() {
    $(this).parent().hide();
});

$('#registerFade').hide().delay(8000).fadeIn();

//Bonus part to swap pictures

$('.leftBtn').click(function(){
    var left = $(this).parent().children().html();
    var center = $(this).parent().children().next().html();
    console.log(left);
    console.log(center);
});

$('.centerBtn').click(function(){
    var num = Math.round(Math.random());
    var left = $(this).parent().children().html();
    var center = $(this).parent().children().next().html();
    var right = $(this).parent().children().next().next().html();
    if (num === 1) {

    } else {

    }
});

$('.rightBtn').click(function(){
    var center = $(this).parent().children().next().html();
    var right = $(this).parent().children().next().next().html();
    console.log(center);
    console.log(right);
});