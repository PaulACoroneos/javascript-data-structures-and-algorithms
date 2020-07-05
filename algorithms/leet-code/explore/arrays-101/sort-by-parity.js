/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function (A) {
    let length = A.length;
    for (let idx = 0; idx < length; idx++) {
        if (A[idx] % 2 !== 0) {
            A.push(A.splice(idx, 1));
            idx--;
            length--;
        }
    }
    return A;
};
