//METHOD 1 "brute force" O(N^2)

export const twoSum = (nums: any, target: any) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++)
            if (nums[i] + nums[j] === target)
                //did we find a match?
                return [i, j];
    }
    return undefined;
};
