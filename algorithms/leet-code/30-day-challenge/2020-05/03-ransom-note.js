/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    //base cases
    if (magazine.length === 0 && ransomNote.length > 0) return false;
    if (ransomNote === magazine || ransomNote.length === 0) return true;

    const magTable = {};
    const ransomTable = {};

    //build hash table for magazine
    for (let char = 0; char < magazine.length; char++) {
        magTable[magazine[char]] ? (magTable[magazine[char]] += 1) : (magTable[magazine[char]] = 1);
    }

    //build hash table for ransonNote
    for (let char = 0; char < ransomNote.length; char++) {
        ransomTable[ransomNote[char]] ? (ransomTable[ransomNote[char]] += 1) : (ransomTable[ransomNote[char]] = 1);
    }

    //now go through ransomnote table and check versus mag table
    for (const char of Object.keys(ransomTable)) {
        if (magTable[char] < ransomTable[char] || !magTable[char]) {
            return false;
        }
    }
    return true;
};
