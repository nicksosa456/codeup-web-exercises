"use strict";
$().ready(
    function(){

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
                default:
                    $('#container').css('background-image', "url(img/wrong-button.png)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    break;
            }
        });


        var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
        var arr = [];
        var count = 0;

        $(document).keyup(function(event){
            if (event.key === konamiCode[count]) {
                count++;
                arr.push(event.key);
                if (arr.length === konamiCode.length) {
                    $('#container').css('background-image', "url(img/contra.jpg)").css('background-repeat', 'no-repeat').css('background-position', 'center');
                    var audio = new Audio('audio/contra_title.mp3');
                    audio.play();
                    count = 0;
                    arr = [];
                }
            } else {
                arr = [];
                count = 0;
            }
        });

    });