/**
 * @param {string} str
 * @return {string}
 */
export const toLowerCase = (str: string) => {
    return str
        .split('')
        .map((str) => str.toLowerCase())
        .join('');
};
