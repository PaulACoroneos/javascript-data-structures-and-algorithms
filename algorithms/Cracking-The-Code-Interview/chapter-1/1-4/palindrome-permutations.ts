const palindromePermutations = (str: string) => {
    const hashTable: Record<string, number> = {};

    //trim whitespaces and lowercase
    const trimmedStr = str.toLowerCase().replace(/ /g, '');

    //loop through str to generate hashtable
    for (let i = 0; i < trimmedStr.length; i++) {
        hashTable[trimmedStr[i]] ? hashTable[trimmedStr[i]]++ : (hashTable[trimmedStr[i]] = 1);
    }

    //now lets check each entry in hash table and determine our odd character count
    let oddCount = 0;
    for (let i = 0; i < trimmedStr.length; i++) {
        if (hashTable[trimmedStr[i]] % 2 !== 0) oddCount++;
    }

    console.log(hashTable);

    //case 1. string is odd length and we have only 1 odd length then its true
    if (trimmedStr.length % 2 !== 0 && oddCount === 1) return true;

    //case2. string is even length and no odd character counts
    if (trimmedStr.length % 2 === 0 && oddCount === 0) return true;

    //otherwise we violated the rules, return false
    return false;
};

export default palindromePermutations;
