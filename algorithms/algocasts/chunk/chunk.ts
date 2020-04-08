//mutating version
// export const chunk = (arr: Array<number>, size: number) => {
//     const chunkedArr = [];
//     while (arr.length) {
//         chunkedArr.push(arr.splice(0, size));
//     }
//     return chunkedArr;
// };

//immutable option
export const chunk = (arr: Array<number>, size: number) => {
    const chunkedArr = [];
    let offset = 0;
    while (offset < arr.length) {
        chunkedArr.push(arr.slice(offset, offset + size));
        offset += size;
    }
    return chunkedArr;
};
