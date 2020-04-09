//iterative sol'n
// export const vowels = (str: string) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     [...str.toLowerCase()].forEach((letter) => vowels.includes(letter) && vowelCount++);
//     return vowelCount;
// };

//regex sol'n
export const vowels = (str: string) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};
