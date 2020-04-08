// string repeat method single loop
// export const steps = (steps: number) => {
//     if (steps === 0) return '';
//     for (let count = 1; count < steps + 1; count++) {
//         console.log('#'.repeat(count) + ' '.repeat(steps - count));
//     }
// };

//2 loop
// export const steps = (steps: number) => {
//     for (let row = 0; row < steps; row++) {
//         let stair = '';
//         for (let col = 0; col < steps; col++) {
//             if (col <= row) {
//                 stair = stair + '#';
//             } else {
//                 stair = stair + ' ';
//             }
//         }
//         console.log(stair);
//     }
// };

//recursion
export const steps = (n: number, row = 0, stair = ''): void => {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
};
