/**
 * @param {string} word
 * @return {boolean}
 */
// var detectCapitalUse = function(word) {
//     const testingRegex =  /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/;
//     return testingRegex.test(word)

// };
const detectCapitalUse = function (word) {
    //case 1.  all uppercase
    if (word.toUpperCase() === word) return true;

    //case 2. all lowercase
    if (word.toLowerCase() === word) return true;

    //case 3. 1 capital, rest lower
    if (`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}` === word) return true;

    return false;
};
