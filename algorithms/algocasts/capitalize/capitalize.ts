export const capitalize = (str: string) => {
    const splitArr = str.split(' ');
    return splitArr.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
};
