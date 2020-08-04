//method 1. Hash Table
// const isUnique = (str: string) => {
//     //base case
//     if (str.length <= 1) return true;

//     const hashTable: Record<string, string> = {};
//     for (let i = 0; i < str.length; i++) {
//         if (hashTable[str[i]]) return false;
//         hashTable[str[i]] = str[i];
//     }
//     return true;
// };

//method 2.
const isUnique = (str: string) => {
    //base case
    if (str.length <= 1) return true;
};

export default isUnique;
