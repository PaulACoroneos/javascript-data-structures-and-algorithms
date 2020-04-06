export const isIsogram = (string: string) => {
    let used = '';
    const str = string.toLowerCase().split('');
    for (let i = 0; i < str.length; i++)
        if (used.indexOf(str[i]) > -1) return false;
        else used += str[i];
    return true;
};
