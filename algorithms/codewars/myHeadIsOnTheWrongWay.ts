export const fixTheMeerkat = (arr: any[]) => {
    const first = arr[0];
    const last = arr[arr.length - 1];
    arr[0] = last;
    arr[arr.length - 1] = first;
    return arr;
};

//just use reverse method
// export const fixTheMeerkat = (arr: any[]) => {
//     return arr.reverse();
// };
