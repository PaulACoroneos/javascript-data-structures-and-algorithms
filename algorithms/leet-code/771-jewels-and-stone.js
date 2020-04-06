/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

export const numJewelsInStones = (J, S) => {
    let counter = 0;
    //we need to use REGEX
    const J = J.split(''); //create array of terms to search agianst
    let jewels;
    let match;
    //console.log("length",J.length);
    for (let i = 0; i < J.length; i++) {
        jewels = new RegExp(J[i], 'g');
        //console.log(jewels);
        match = (S || '').match(jewels);
        //console.log(match);
        counter += match ? match.length : 0;
        //console.log("counter",counter);
    }
    return counter;
};
