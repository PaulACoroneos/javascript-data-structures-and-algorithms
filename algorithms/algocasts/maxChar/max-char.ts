type Chars = {
    [key: string]: any;
};

export const maxChar = (str: string) => {
    const chars: Chars = {};
    let maxChar = '';
    for (const char of str) {
        chars[char] = chars[char] + 1 || 1; //create char map, if empty set to 1.
        maxChar = chars[char] > (chars[maxChar] || 0) ? char : maxChar; //progressively figure out latest maxchar
    }
    return maxChar;
};
