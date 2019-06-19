(function () {
    "use strict";

    var num = 2;

    while (num < 65537) {
        console.log(num);
        num*=2;
    }

    var allCones = Math.floor(Math.random() * 50) + 50;
    function random() {
        return Math.floor(Math.random() * 5) + 1;
    }

    do {
        console.log("We currently have "+allCones+" cones.");
        var soldCones = random();
        if (soldCones < allCones) {
            console.log(soldCones+" cones sold...");
        }
        if (soldCones > allCones) {
            console.log("Can't sell you "+soldCones+" when I only have "+allCones+" left..");
        }
        if (soldCones===allCones) {
            console.log("All cones sold!");
        }
        allCones -= soldCones;
    } while(allCones > 0);

})();