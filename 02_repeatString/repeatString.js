const repeatString = function(str, count) {
    let line = '';
    if (count < 0) {
        return 'ERROR';
    } else {
        for (i = 0; i < count; i++) {
            line += str;
        }
    }
    return line;
};

// Do not edit below this line
module.exports = repeatString;
