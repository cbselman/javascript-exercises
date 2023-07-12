const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];

    array.forEach(slot => {
        if (!args.includes(slot)) {
            newArray.push(slot);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
