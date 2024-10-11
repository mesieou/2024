/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // declare a monotonic queue to track the greatest number
    let stack = [];
    
    // declare a hash map
    let map = {};
    // loop through nums2
    for(let i = 0; i < nums2.length; i++){
        // while there is something in the queue and num > last number in the stack

        
        while(stack.length != 0 && stack[stack.length - 1] < nums2[i]){
            //pop the last number from the stack and add it to the hash map
            map[stack.pop()] = nums2[i] ;
        }
        // insert the new number into the stack
        stack.push(nums2[i])
    }
    
    
    // map any rest numbers in the stack until there is nothing in the stack
    while(stack.length != 0){
        map[stack.pop()] = -1;
    }
    
    //loop through the nums1 to find the next greast value in the map
    return nums1.map(num => map[num])
        
};