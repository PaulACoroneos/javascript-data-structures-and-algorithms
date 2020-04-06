export const disemvowel = (str: string) => {
    const vowels = 'aeiouAEIOU';
    let newStr = '';
    for (let i = 0; i < str.length; i++) if (vowels.indexOf(str[i]) === -1) newStr += str[i];
    return newStr;
};
