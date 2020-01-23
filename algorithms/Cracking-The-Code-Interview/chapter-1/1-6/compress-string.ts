const compressString = (str: string) => {
  const strArr = [...str];
  let charCount = 1;
  return strArr.map((char, index) => {
    if (char === strArr[index + 1] && strArr[index + 1] !== undefined) { charCount++; return; }
    if (charCount > 1 && char !== strArr[index + 1]) {
      const compressedChar = `${char}${charCount}`
      charCount = 1;
      return compressedChar;
    };
    return char;
  }).join('');
}

export default compressString;