/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
    const binary = num.toString(2).split('');
    binary.forEach((num, idx) => {
        if (num === '1') {
            binary[idx] = '0';
        } else {
            binary[idx] = '1';
        }
    });
    return parseInt(binary.join(''), 2);
};
