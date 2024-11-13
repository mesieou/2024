/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    s.split('').forEach((char, i) => {
        if(stack.length > 0 && char.toLowerCase() == stack[stack.length -1].toLowerCase() && stack[stack.length -1] != char){
            stack.pop();
        } else{
            stack.push(char);
        }
    })
    return stack.join('');
};