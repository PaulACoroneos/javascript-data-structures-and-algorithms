/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
    //base cases
    if (J.length === 0 || S.length === 0) return 0;

    const hashMap = {};
    for (let stone = 0; stone < S.length; stone++) {
        hashMap[S[stone]] ? (hashMap[S[stone]] += 1) : (hashMap[S[stone]] = 1);
    }
    return J.split('').reduce((count, gem) => {
        if (hashMap[gem]) count += hashMap[gem];
        return count;
    }, 0);
};
