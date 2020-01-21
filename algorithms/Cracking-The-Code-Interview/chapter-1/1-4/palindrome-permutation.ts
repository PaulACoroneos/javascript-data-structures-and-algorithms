const palindromePermutation = (str: string) => {
  const oddChars = new Set();
  [...str.toLowerCase()].filter(char => /\S/.test(char)).forEach(char => (
    oddChars.has(char) ? oddChars.delete(char) : oddChars.add(char)
  ))
  return str.length % 2 ? oddChars.size === 0 : oddChars.size < 2;
}

export default palindromePermutation;