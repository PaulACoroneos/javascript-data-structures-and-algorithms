export const reverseLetter = (str: string) =>
    str
        .split('')
        .reverse()
        .join('')
        .replace(/[^A-Za-z]/g, '');
