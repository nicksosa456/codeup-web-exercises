function showMultiplicationTable(a) {
    console.log(a+ " x 1 = "+a*1);
    console.log(a+ " x 2 = "+a*2);
    console.log(a+ " x 3 = "+a*3);
    console.log(a+ " x 4 = "+a*4);
    console.log(a+ " x 5 = "+a*5);
    console.log(a+ " x 6 = "+a*6);
    console.log(a+ " x 7 = "+a*7);
    console.log(a+ " x 8 = "+a*8);
    console.log(a+ " x 9 = "+a*9);
    console.log(a+ " x 10 = "+a*10);
}

function randomNum() {
    return Math.floor(Math.random() * 200) + 20;
}


for (var x = 0; x < 10; x++) {
    var random = randomNum();
    if (random%2===0) {
        console.log(random+" is even.");
    } else if (random%2===1) {
        console.log(random+" is odd.");
    }
}

for (var b = 1; b<10; b++) {
    var sum = '';
    for (var c = 1; c<=b; c++) {
        sum += b;
    }
        console.log(sum);
}

for (var y = 100; y > 0; y-=5) {
    console.log(y);
}

