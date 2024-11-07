/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   let unique_nums = new Map();
   let ans = 0
    for(let num of nums){
        unique_nums.set(num, (unique_nums.get(num) || 0) + 1)
    }

    for(let [key, val] of unique_nums.entries()){
        if(val < 2){
            ans += key
        }
    }

   return ans
//   

};