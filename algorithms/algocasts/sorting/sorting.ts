/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const bubbleSort = (arr: number[]) => {
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
};

export const selectionSort = (arr: number[]) => {
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < sortedArr.length; j++) {
            if (sortedArr[j] < sortedArr[minimum]) minimum = j;
        }
        const temp = sortedArr[i];
        sortedArr[i] = sortedArr[minimum];
        sortedArr[minimum] = temp;
    }
    return sortedArr;
};

export const merge = (left: number[], right: number[]): number[] => {
    const results: number[] = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift()!);
        } else {
            results.push(right.shift()!);
        }
    }
    return [...results, ...left, ...right];
};

export const mergeSort = (arr: number[]): number[] => {
    if (arr.length === 1) return arr;
    const left = mergeSort(arr.slice(0, arr.length / 2));
    const right = mergeSort(arr.slice(arr.length / 2));
    return merge(left, right);
};
