const oneAway = (stra: string, strb: string) => {
    //base case. If strings are more than 1 apart in length return false
    if (Math.abs(stra.length - strb.length) > 1) return false;

    const hashMap: Record<string, number> = {};
    let diffCount = 0;

    //build initial hashTable
    for (let i = 0; i < stra.length; i++) {
        hashMap[stra[i]] ? hashMap[stra[i]]++ : (hashMap[stra[i]] = 1);
    }

    //now start ticking off letters that are the same.
    for (let i = 0; i < strb.length; i++) {
        if (hashMap[strb[i]]) {
            hashMap[strb[i]]--;
        } else {
            diffCount++;
        }
        if (diffCount > 1) return false;
    }
    return true;
};

export default oneAway;
