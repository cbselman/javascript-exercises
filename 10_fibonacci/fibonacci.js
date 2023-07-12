const fibonacci = function(num) {
    if(num <= 0) {
        return "OOPS";
    }

    if(typeof num == "string") {
        Number(num);
    }


    let count = 1;
    let arr = [1];
    for (i = 1; i < num; i++) {
        arr[i] = count;
        count = arr[i] + arr[i-1];
    }

    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
