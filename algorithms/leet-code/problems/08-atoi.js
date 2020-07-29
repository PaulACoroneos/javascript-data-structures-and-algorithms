/**
 * @param {string} str
 * @return {number}
 */

//These don't hold true in JS. But lets store these per requirements
const MAX_SAFE_INTEGER_PROBLEM = 2 ** 31 - 1;
const MIN_SAFE_INTEGER_PROBLEM = -1 * 2 ** 31;

const getSanitizedValue = (parsedStr, polarity) => {
    const val = parseInt(parsedStr, 10);
    if (polarity === -1) {
        return -1 * val < MIN_SAFE_INTEGER_PROBLEM ? MIN_SAFE_INTEGER_PROBLEM : -1 * val;
    }
    return val > MAX_SAFE_INTEGER_PROBLEM ? MAX_SAFE_INTEGER_PROBLEM : val;
};

const myAtoi = function (str) {
    const parsedStr = str.trim();
    let polarity = null;
    const validOperators = ['+', '-'];
    const firstChar = parsedStr[0];
    const secondChar = parsedStr[1];
    const firstCharNum = parseInt(firstChar, 10);
    const secondCharNum = parseInt(secondChar, 10);

    //base case (length of 1 and num). If not a num then 0
    if (parsedStr.length === 1) {
        return firstCharNum ? firstCharNum : 0;
    }

    //handle having a polarity sign
    if (isNaN(firstCharNum)) {
        if (validOperators.includes(firstChar)) {
            polarity = firstChar === '-' ? -1 : 1;
        } else return 0; //we didnt have a +/-. or the number would cause overflow, bail out

        //case 2. We have more characters after polarity sign (corner)
        if (isNaN(secondCharNum)) {
            return 0;
        }
    }

    //now handle return
    if (polarity != null) {
        return getSanitizedValue(parsedStr.slice(1), polarity);
    } else {
        return getSanitizedValue(parsedStr, polarity);
    }
};
