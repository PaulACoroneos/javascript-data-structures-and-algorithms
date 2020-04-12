//iterative fibonacci
// export const fib = (num: number) => {
//     const result = [0, 1];
//     let count = 0;

//     while (count < num) {
//         result[count + 2] = result[count] + result[count + 1];
//         count++;
//     }
//     return result[count];
// };

type Cache = {
    [key: string]: any;
};

const memoize = (fn: Function) => {
    const cache: Cache = {};
    return (...args: any) => {
        if (cache[args]) return cache[args];
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
};

//recursive fibonacci
export const slowFib = (num: number): number => {
    if (num < 2) return num;
    return slowFib(num - 2) + slowFib(num - 1);
};

export const fib = memoize(slowFib);
