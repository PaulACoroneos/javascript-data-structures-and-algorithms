const urlify = (str: string) => {
  return str.replace(/\s/gi, '%20');
}

export default urlify;