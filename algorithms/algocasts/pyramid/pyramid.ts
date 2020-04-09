// iterative solution
// export const pyramid = (levels: number): void => {
//     const midpoint = Math.floor((2 * levels - 1) / 2);
//     for (let row = 0; row < levels; row++) {
//         let level = '';
//         for (let col = 0; col < 2 * levels - 1; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// };

// recursive solution
export const pyramid = (levels: number, row = 0, col = 0, level = ''): void => {
    if (row === levels) return;
    const midpoint = Math.floor((2 * levels - 1) / 2);

    if (col < 2 * levels - 1) {
        const add = midpoint - row <= col && midpoint + row >= col ? '#' : ' ';
        return pyramid(levels, row, col + 1, level + add);
    }
    console.log(level);
    return pyramid(levels, row + 1);
};
