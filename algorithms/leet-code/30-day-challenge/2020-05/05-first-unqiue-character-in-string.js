/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    //base cases
    if (s.length === 0) return -1;
    if (s.length === 1) return 0;
    const hashMap = {};
    const earliestMap = {};

    for (let char = 0; char < s.length; char++) {
        if (hashMap[s[char]]) {
            hashMap[s[char]] += 1;
        } else {
            hashMap[s[char]] = 1;
            earliestMap[s[char]] = s.indexOf(s[char]);
        }
    }
    for (char of Object.keys(earliestMap)) {
        if (hashMap[char] === 1) return earliestMap[char];
    }

    return -1;
};
