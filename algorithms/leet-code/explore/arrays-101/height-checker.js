/**
 * @param {number[]} heights
 * @return {number}
 */

function merge(node1, node2) {
    const result = [];
    while (node1.length > 0 && node2.length > 0) {
        if (node1[0] < node2[0]) {
            result.push(node1.shift());
        } else {
            result.push(node2.shift());
        }
    }
    return result.concat(node1.length ? node1 : node2);
}

function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
    const left = arr.slice(0, middle); // items on the left side
    const right = arr.slice(middle); // items on the right side

    return merge(mergeSort(left), mergeSort(right));
}

const heightChecker = function (heights) {
    let moveCnt = 0;
    mergeSort(heights).forEach((height, idx) => {
        if (height !== heights[idx]) moveCnt++;
    });
    return moveCnt;
};
