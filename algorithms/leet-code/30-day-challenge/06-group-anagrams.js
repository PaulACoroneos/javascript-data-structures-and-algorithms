//attempt1

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = function (strs) {
    const strMap = {};
    strs.forEach((str, idx) => {
        const sortedStr = str.split('').sort().join('');
        if (strMap[sortedStr] && strMap[sortedStr].length) {
            return strMap[sortedStr].push(idx);
        } else {
            strMap[sortedStr] = [idx];
        }
    });
    console.log(strMap);
    return Object.values(strMap).map((strArr) => strArr.map((idx) => strs[idx]).sort());
};
