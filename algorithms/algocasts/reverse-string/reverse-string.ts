//method 1. Array.reverse() method
export const reverseString = (str: string) => str.split('').reverse().join('');

//method 2. Manually do the reverse()
// export const reverseString = (str: string) => {
//     let reversed = '';
//     for (const character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// };

//method 3. reduce and array
// export const reverseString = (str: string) => [...str].reduce((reversed, character) => character + reversed, '');
