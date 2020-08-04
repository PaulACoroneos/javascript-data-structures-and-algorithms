const checkPermutations = (stra: string, strb: string) => {
    //base case
    if (stra.length !== strb.length) return false;

    const hashTable: Record<string, number> = {};

    //fill up hash table w/ stra vals
    for (let i = 0; i < stra.length; i++) {
        hashTable[stra[i]] ? (hashTable[stra[i]] = 1) : hashTable[stra[i]]++;
    }

    //now audit hash table against strb
    for (let i = 0; i < strb.length; i++) {
        if (hashTable[strb[i]]) {
            hashTable[strb[i]]--;
        } else {
            return false;
        }
    }

    return true;
};

export default checkPermutations;
