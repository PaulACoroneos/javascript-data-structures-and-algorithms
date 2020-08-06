const stringCompression = (str: string) => {
    let ptra = 0;
    let repeatCount = 1;
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] !== strArr[i + 1]) {
            //handle Repeats
            if (repeatCount > 1) {
                strArr.splice(ptra, repeatCount, repeatCount.toString(), strArr[ptra]);
                repeatCount = 1;
                i -= repeatCount;
            }
            ptra = i + 1;
        } else {
            repeatCount++;
        }
    }
    return strArr.join('');
};

export default stringCompression;
