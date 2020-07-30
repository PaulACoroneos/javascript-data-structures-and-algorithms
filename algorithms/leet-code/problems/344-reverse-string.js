//recursion in place
// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */

// var helper = function(left,right,s) {
//   if(left < right) {
//       [s[left],s[right]] = [s[right],s[left]];
//       helper(left+1,right-1,s);
//   }
// }
// var reverseString = function(s) {
//   helper(0,s.length-1,s)
// };

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};
