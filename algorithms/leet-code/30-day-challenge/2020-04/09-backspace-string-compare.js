//attempt 1 (iterative)

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// const handleBackSpaces = (str) => {
//     const strArr = str.split('');
//     const strArrResult = [];
//     strArr.forEach((char) => {
//         if (char !== '#') {
//             strArrResult.push(char);
//         } else {
//             strArrResult.pop();
//         }
//     });
//     return strArrResult.join('');
// };
// export const backspaceCompare = function (S, T) {
//     return handleBackSpaces(S) === handleBackSpaces(T);
// };

//o(n) o(1)
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const applyBackspaceToStr = (str) => {
    const strArr = str.split('');
    while (strArr.includes('#')) {
        const idx = strArr.indexOf('#');
        idx === 0 ? strArr.splice(idx, 1) : strArr.splice(idx - 1, 2);
    }
    return strArr.join('');
};
export const backspaceCompare = function (S, T) {
    return applyBackspaceToStr(S) === applyBackspaceToStr(T);
};
