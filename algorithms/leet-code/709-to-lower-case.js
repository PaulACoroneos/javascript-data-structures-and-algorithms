/**
 * @param {string} str
 * @return {string}
 */
export const toLowerCase = (str) => {
    return str
        .split('')
        .map((str) => str.toLowerCase())
        .join('');
};
