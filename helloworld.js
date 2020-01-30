console.log("Hello, World");

function range(start, end) {

    var arr = [];

    var length = end - start;

    for (var i = 0; i <= length; i++) {

        arr[i] = start;
        start++;
    }

    return arr;
}

function lorand() {

    //lotto.range(10) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    ran = range(1, 45);
    var i = 0;
    while (i < 6) {
        var key = Math.floor(Math.random() * 45) + 1;
        ran[key];
        console.log(ran[key]);
        i++;
    }

}

console.log(lorand());