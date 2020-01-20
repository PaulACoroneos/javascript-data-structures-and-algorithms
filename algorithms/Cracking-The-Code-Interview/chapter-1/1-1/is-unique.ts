/* Is Unique */

const isUnique = (str: string) => {
  const uniqueArr = new Set([...str])
  return str.length === uniqueArr.size;
}

export default isUnique;