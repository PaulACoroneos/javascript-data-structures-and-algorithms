//method 1 string.replace()
// const urlify = (str: string) => str.replace(/ /g, '%20');

//method 2. using moving window
// const urlify = (str: string) => {
//     let strCpy = str;
//     let len = strCpy.length;
//     for (let i = 0; i < len; i++) {
//         if (strCpy[i] === ' ') {
//             strCpy = `${strCpy.substr(0, i)}%20${strCpy.slice(i + 1)}`; //build new string. Strings are immutable in JS
//             len = strCpy.length;
//             i += 2; //skip 1 extra chars to reset for loop pointer AFTER %20
//         }
//     }
//     return strCpy;
// };

// export default urlify;

//method 3. character array
const urlify = (str: string[]) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            str.splice(i, 1, '%', '2', '0');
        }
    }
    return str;
};

export default urlify;
