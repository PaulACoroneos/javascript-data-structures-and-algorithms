/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const parenthMap = { '(': ')', '{': '}', '[': ']' };
    const stack = [];

    if (s === '') return true;
    if (s.length % 2 !== 0 || s.length == 1) return false;

    for (let i = 0; i < s.length; i++) {
        if (parenthMap[s[i]]) {
            stack.push(s[i]);
        } else {
            const openParenth = stack.pop();

            if (parenthMap[openParenth] !== s[i]) {
                return false;
            }
        }
    }
    return !stack.length;
};
