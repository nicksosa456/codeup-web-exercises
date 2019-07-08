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
$('h3').each(function() {
    $(this).click(function(event){
        event.preventDefault();
        $(this).next().css('font-weight', 'bold');
    });
});
$('li').click(function(event){
    event.preventDefault();
    $(this).parent().children().first().css('color', 'blue');
});

