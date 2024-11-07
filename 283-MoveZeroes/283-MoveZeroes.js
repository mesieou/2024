/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = 0
    let end = nums.length - 1
    nums.forEach((num, i) =>{
        //if the start pointer is behind is because there is a zero and needs change
        if(start != i){
            temp = nums[i]
            nums[i] = nums[start]
            nums[start] = temp
        }
        if(num != 0){
            start++;
        }
    })
};