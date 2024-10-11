/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    
    //loop through the s
    s.split('').forEach(c => {
        // if the stack is not empty AND the character is a star
        if(stack.length != 0 && c == '*'){
            // pop the last element of the stack
            stack.pop();
        } else {
            // else append the character to the stack
            stack.push(c);
        }
    })

    return stack.join('');
};