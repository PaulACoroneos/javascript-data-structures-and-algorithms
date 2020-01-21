const oneAway = (stra: string, strb: string) => {
  if (stra.length > strb.length + 1 || strb.length > stra.length + 1) return false;
  if (stra === strb) return [...stra].filter(char => !strb.includes(char)).length > 1;
}

export default oneAway;