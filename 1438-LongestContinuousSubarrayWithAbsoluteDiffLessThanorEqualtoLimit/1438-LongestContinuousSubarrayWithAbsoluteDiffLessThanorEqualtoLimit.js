/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    //initialise the max stack and min stack and the ans
    let maxStack = [], minStack = [], ans = -Infinity, left = 0;
    //loop through the array
    nums.forEach((num, right) => {
        // while the current num is greater than the last number of the max stack:
        while(maxStack.length > 0 && num > nums[maxStack[maxStack.length - 1]]){
            //pop the last element of the max stack
            maxStack.pop();
        }
        //while the current num is less than the last number of the min stack:
        while(minStack.length > 0 && num < nums[minStack[minStack.length - 1]]){
            //pop the last element of the min stack
            minStack.pop();
        }    
        // add the current num to both stacks
        minStack.push(right);
        maxStack.push(right);

        //check if the current absolute number between the stacks is greater than limit
        while(nums[maxStack[0]] - nums[minStack[0]] > limit){
            //if the first element position in Max Stack is greater than Min Stack
            if (maxStack[0] === left) maxStack.shift();
            if (minStack[0] === left) minStack.shift();
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    })
    //return the answer
    return ans;
};