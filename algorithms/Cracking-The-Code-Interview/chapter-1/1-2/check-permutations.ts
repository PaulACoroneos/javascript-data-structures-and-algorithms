const checkPermutations = (stra: string, strb: string) => {
  if (stra.length !== strb.length) return false;
  const sortedStrA = [...stra].sort().join('');
  const sortedStrB = [...strb].sort().join('');
  return sortedStrA.includes(sortedStrB) || sortedStrB.includes(sortedStrA);
};

export default checkPermutations;