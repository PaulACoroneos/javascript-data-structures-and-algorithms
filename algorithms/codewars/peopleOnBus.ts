export const number = (busStops: any) => {
    let sum = 0;
    for (let i = 0; i < busStops.length; i++)
        sum += busStops[i].reduce((acc: number, val: number) => {
            return acc - val;
        });
    return sum;
};
