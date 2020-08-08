//use JS string.Prototype.inclues() to implement isSubstring()
const isSubstring = (concatStr: string, strb: string) => concatStr.includes(strb);

const stringRotation = (stra: string, strb: string) => {
    //base case. Strings need to equal sized and at least greater than length 0
    if (stra.length === 0 || stra.length !== strb.length) return false;
    const concatenatedStr = `${stra}${stra}`;
    return isSubstring(concatenatedStr, strb);
};

export default stringRotation;
