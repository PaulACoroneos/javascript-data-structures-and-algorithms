/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    // O(1) optimizations
    if (needle === '' || needle === haystack) return 0;
    if (needle.length > haystack) return -1;

    let startIdx = 0;
    let needlePtr = 0;

    for (let i = 0; i < haystack.length; i++) {
        //have we found our needle?
        if (needlePtr === needle.length) return startIdx;

        //see if for given point in needle we match haystack
        if (haystack[i] === needle[needlePtr]) {
            if (needlePtr === 0) startIdx = i;
            needlePtr++;
        }
        //move start idx up by one, counteract loop i++ and reset needle
        else {
            startIdx++;
            i = startIdx - 1;
            needlePtr = 0;
        }
    }
    //check if the needle was only found at very end of loop
    if (needlePtr === needle.length) return startIdx;

    //not found
    return -1;
};
