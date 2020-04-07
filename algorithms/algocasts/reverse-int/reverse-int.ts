// method 1. string
export const reverseInt = (num: number) =>
    Math.sign(num) * parseInt(num.toString().trim().split('').reverse().join(''), 10);

// method 2. shift register method
// export const reverseInt = (num: number) => {
//     const sign = Math.sign(num);
//     let absValNum = Math.abs(num);
//     let reversedNum = 0;
//     while (absValNum > 0) {
//         let remainder = 0;
//         remainder = absValNum % 10;
//         reversedNum = reversedNum * 10 + remainder;
//         absValNum = Math.floor(absValNum / 10);
//     }
//     return sign * reversedNum;
// };
