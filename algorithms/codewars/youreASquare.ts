export const isSquare = (n: number) => {
    if (Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n) return true;
    else return false;
};
