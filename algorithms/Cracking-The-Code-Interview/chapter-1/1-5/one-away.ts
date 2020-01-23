const oneAway = (stra: string, strb: string) => {
  const straArr = [...stra.toLowerCase()];
  const strbArr = [...strb.toLowerCase()];
  if (Math.abs(stra.length - strb.length) > 1) return false;
  if (stra === strb) return straArr.filter(char => !strb.includes(char)).length > 1;
  let count = 0;
  if (Math.abs(stra.length - strb.length) > 0) count++
  straArr.forEach((_, index) => {
    if (straArr[index] !== strbArr[index]) count++;
  })
  return count < 2;
}

export default oneAway;