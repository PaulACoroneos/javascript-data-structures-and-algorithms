//method 1. char map
// interface StrMap {
//     [key: string]: any;
// }

// const buildCharacterMap = (str: string, regex: RegExp) => {
//     const strMap: StrMap = {};
//     [...str.replace(regex, '').toLowerCase()].forEach((letter) => {
//         strMap[letter] = !!strMap[letter] ? strMap[letter]++ : 1;
//     });
//     return strMap;
// };

// export const anagrams = (str1: string, str2: string) => {
//     const alphanumericRegex = /\^w/g;
//     const str1Map = buildCharacterMap(str1, alphanumericRegex);
//     const str2Map = buildCharacterMap(str2, alphanumericRegex);
//     const str1Larger = Object.keys(str1).length > Object.keys(str2).length ? true : false;
//     if (str1Larger) {
//         return Object.entries(str1Map).every(([letter, qty]) => qty === str2Map[letter]);
//     }
//     return Object.entries(str2Map).every(([letter, qty]) => qty === str1Map[letter]);
// };

//string comparison w/ sort
export const anagrams = (str1: string, str2: string) => {
    const alphanumericRegex = /\^w/g;
    const alphanumericStr1 = [...str1.replace(alphanumericRegex, '').toLowerCase()].sort().join('');
    const alphanumericStr2 = [...str2.replace(alphanumericRegex, '').toLowerCase()].sort().join('');
    return alphanumericStr1 === alphanumericStr2;
};
