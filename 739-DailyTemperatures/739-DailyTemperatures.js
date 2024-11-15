/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //intialise the stack and the answer with the number of temperatures given witi 0s
    let ans = new Array(temperatures.length).fill(0), stack = [];
    // loop through the tempereatures
    temperatures.forEach((temp, i) =>{
        //while there are items in the stack and the last element of the stack is less than the current temperature
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temp){
            // pop the last element of the stack
            let smallestTempIndex = stack.pop();
            // use the pop element as index to update it in the answer. The answer is the difference between current index and the popped element
            ans[smallestTempIndex] = i - smallestTempIndex;
        }
        //push the current index to the stack
        stack.push(i)
    })
      return ans;
};