/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

export const numJewelsInStones = (J: string, S: string) => {
    let counter = 0;
    const jArr = J.split('');
    let jewels;
    let match;
    for (let i = 0; i < jArr.length; i++) {
        jewels = new RegExp(jArr[i], 'g');
        match = (S || '').match(jewels);
        counter += match ? match.length : 0;
    }
    return counter;
};
