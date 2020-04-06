// method 1 reverse and compare
export const palindrome = (str: string) => str === str.split('').reverse().join('');

//method 2 Array.every()
// export const palindrome = (str: string) => {
//     const palindromeStrArr = [...str];
//     return palindromeStrArr.every((char, idx) => {
//         return char === palindromeStrArr[palindromeStrArr.length - idx - 1];
//     });
// };
