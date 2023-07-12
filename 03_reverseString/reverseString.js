const reverseString = function(str) {
    let newStr = '';
    let char = '';
    for (i = str.length; i >= 0; i--) {
        char = str.substr(i,1);
        newStr += char;
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
