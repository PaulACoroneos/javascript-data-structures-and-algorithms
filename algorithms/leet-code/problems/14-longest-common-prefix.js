/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length === 0) return prefix;
    if (strs.length === 1) return strs[0];

    const sortedStrs = strs.sort();
    const firstStr = sortedStrs[0];
    const lastStr = sortedStrs[sortedStrs.length - 1];
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr.substring(0, i + 1) === lastStr.substring(0, i + 1)) {
            prefix = firstStr.substring(0, i + 1);
        } else {
            return prefix;
        }
    }
    return prefix;
};
