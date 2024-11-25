const reverseString = function(str) {
    const newStr = [];

    for (let i = 0; i < str.length; i++) {
        newStr.unshift(str[i]);
    }

    return newStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
