const palindromes = function (str) {
    
    // Create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as a new string
    const cleanedStr = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    // Reverse the string to compare
    const reversedStr = cleanedStr.split('').reverse().join('');

    // return the boolean of the comparison
    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
