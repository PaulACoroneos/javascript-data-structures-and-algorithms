/* Is Unique */

const isUnique = (string) => {
  const uniqueArr = new Set([...string])
  return string.length === uniqueArr.size;
}

export default isUnique;