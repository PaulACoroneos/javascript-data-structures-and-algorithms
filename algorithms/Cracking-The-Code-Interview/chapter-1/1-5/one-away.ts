const oneAway = (stra: string, strb: string) => {
  const straArr = [...stra.toLowerCase()];
  if (stra.length > strb.length + 1 || strb.length > stra.length + 1) return false;
  if (stra === strb) return straArr.filter(char => !strb.includes(char)).length > 1;
  let count = 0;
  straArr.forEach(char => {
    if (strb.includes(char)) count++;
  })

  return count > 1;
}

export default oneAway;