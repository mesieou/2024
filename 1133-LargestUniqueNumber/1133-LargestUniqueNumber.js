/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    visited = new Map()
    ans = -Infinity
    nums.forEach((num, i) => {
        visited.set(num, (visited.get(num) || 0) + 1);
    })
    for(let [key, frequency] of visited){
        console.log(frequency)
        if(frequency < 2){
            ans = Math.max(ans, key);
        }
    }

    return  nums.length == 0 || ans == -Infinity ? -1 : ans
};