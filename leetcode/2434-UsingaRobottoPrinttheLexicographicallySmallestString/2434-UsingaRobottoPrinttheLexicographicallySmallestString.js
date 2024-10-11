/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    //declare the robot and paper stacks
    let robotStack = [];
    let paperStack = [];
    let n = s.length;
    let suffixMin = new Array(n).fill(null);

    suffixMin[n - 1] = s[n - 1]

    for( let i = n - 2; i >= 0; i--){
        if ( s[i] < suffixMin[i + 1]){
            suffixMin[i] = s[i];
        } else{
            suffixMin[i] = suffixMin[i + 1];
        }
    }

    for(let i = 0; i < n; i++){
        robotStack.push(s[i]);

        while(robotStack.length > 0 && (i === n -1 || robotStack[robotStack.length - 1] <= suffixMin[i + 1] )){
            paperStack.push(robotStack.pop());
        }
    }


    //return the paper stack  
    return paperStack.join('')
};