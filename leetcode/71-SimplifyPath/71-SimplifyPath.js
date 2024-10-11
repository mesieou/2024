/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    
    //dive path by '/'
    //loop through the divived path
    path.split('/').forEach(s => {
        // Check if the current character is equal to ..
        if(s == ".."){
            // if there is something in the stack
            if(stack){
                //delete the latest item in the stack
                stack.pop();
            }
        
            // Check if the current characters is equal to . or ""
        } else if( s == "." || s == ""){
            // do nothing            
        } else {
            // add it to the stack
            stack.push(s);
        }
    })
    
    //join the stack with /.
    return `/${stack.join('/')}`;
};