"use strict";
// $().ready(
//     function(){

        $(document).keyup(function(event){
            var key = event.key;
            switch (key) {
                case 'a':
                    $('#container').css('background-image', "url(img/360_A.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case 'b':
                    $('#container').css('background-image', "url(img/360_B.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case 'ArrowUp':
                    $('#container').css('background-image', "url(img/PS3_Dpad_Up.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case 'ArrowDown':
                    $('#container').css('background-image', "url(img/PS3_Dpad_Down.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case 'ArrowLeft':
                    $('#container').css('background-image', "url(img/PS3_Dpad_Left.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case 'ArrowRight':
                    $('#container').css('background-image', "url(img/PS3_Dpad_Right.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case 'Enter':
                    $('#container').css('background-image', "url(img/PS3_Start.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '1':
                    $('#container').css('background-image', "url(img/Keyboard_Black_1.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '2':
                    $('#container').css('background-image', "url(img/Keyboard_Black_2.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '3':
                    $('#container').css('background-image', "url(img/Keyboard_Black_3.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '4':
                    $('#container').css('background-image', "url(img/Keyboard_Black_4.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '5':
                    $('#container').css('background-image', "url(img/Keyboard_Black_5.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '6':
                    $('#container').css('background-image', "url(img/Keyboard_Black_6.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '7':
                    $('#container').css('background-image', "url(img/Keyboard_Black_7.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '8':
                    $('#container').css('background-image', "url(img/Keyboard_Black_8.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '9':
                    $('#container').css('background-image', "url(img/Keyboard_Black_9.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                case '0':
                    $('#container').css('background-image', "url(img/Keyboard_Black_0.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
                default:
                    $('#container').css('background-image', "url(img/wrong-button.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
            }
        });


        var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
        var tmntTwo = ['b', 'a', 'b', 'a', 'ArrowUp', 'ArrowDown', 'b', 'a', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
        var sonic = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'a', 'Enter'];
        var punch = ['0', '0', '7', '3', '7', '3', '5', '9', '6', '3'];
        var arr = [];
        var count = 0;

        $(document).keyup(function(event){
            if (event.key === konamiCode[count]) {
                count++;
                arr.push(event.key);
                if (arr.length === konamiCode.length) {
                    $('#container').css('background-image', "url(img/contra.jpg)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    $('#head').text('You added 30 lives!');
                    var kAudio = new Audio('audio/contra_title.mp3');
                    kAudio.play();
                    count = 0;
                    arr = [];
                }
            } else if (event.key === tmntTwo[count]) {
                count++;
                arr.push(event.key);
                if (arr.length === tmntTwo.length) {
                    $('#container').css('background-image', "url(img/TMNT2-title.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    $('#head').text('You added 10 lives!');
                    var tAudio = new Audio('audio/TMNT2.mp3');
                    tAudio.play();
                    count = 0;
                    arr = [];
                }
            } else if (event.key === sonic[count]) {
                count++;
                arr.push(event.key);
                if (arr.length === sonic.length) {
                    $('#container').css('background-image', "url(img/sonic-title.jpg)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    $('#head').text('Select a Level');
                    var sAudio = new Audio('audio/sonic-title.mp3');
                    sAudio.play();
                    count = 0;
                    arr = [];
                }
            } else if (event.key === punch[count]) {
                count++;
                arr.push(event.key);
                if (arr.length === punch.length) {
                    $('#container').css('background-image', "url(img/punch-title.gif)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    $('#head').text('Fight Mike Tyson');
                    var pAudio = new Audio('audio/punch-title.mp3');
                    pAudio.play();
                    count = 0;
                    arr = [];
                }
            } else {
                arr = [];
                count = 0;
            }
        });


    // });