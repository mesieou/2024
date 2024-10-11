/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];

    function swapCase(s){
         return s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase();
    }

    s.split('').forEach(c => {
        if(stack.length > 0 && stack[stack.length - 1] == swapCase(c)){
            stack.pop();
        } else {
            stack.push(c);
        }
    })
    
    return stack.join('');
};
