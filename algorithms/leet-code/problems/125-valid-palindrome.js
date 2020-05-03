//method 1 reverse join method
// const isPalindrome = function (s) {
//     const alphaNumRegex = /[^0-9a-z]/gi;
//     //base case
//     if (s.length <= 1) return true;

//     const sanitizedStr = s.toLowerCase().replace(alphaNumRegex, '');
//     return sanitizedStr.split('').reverse().join('') === sanitizedStr;
// };

//method 2. 2 pointer
const isPalindrome = function (s) {
    const alphaNumRegex = /[^0-9a-z]/gi;
    //base case
    if (s.length <= 1) return true;

    const sanitizedArr = s.toLowerCase().replace(alphaNumRegex, '').split('');
    for (let i = 0, j = sanitizedArr.length - 1; i < sanitizedArr.length; i++, j--) {
        if (sanitizedArr[i] !== sanitizedArr[j]) {
            return false;
        }
    }
    return true;
};
