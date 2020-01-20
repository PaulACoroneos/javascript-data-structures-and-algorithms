//note this is the brute force approach O(N^2). I am working on implementing the greedy approach

//METHOD 1 "brute force"

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++)
                if(nums[i] + nums[j] ===target) //did we find a match?
                    return [i,j];
    }
    return undefined;
};