/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let ans = [];
    for(rightAsteroid of asteroids){
                
        while(ans.length > 0 && ans[ans.length - 1] > 0 && rightAsteroid < 0){
            let leftAsteroid = ans.pop();
            if(Math.abs(leftAsteroid) > Math.abs(rightAsteroid)){
                ans.push(leftAsteroid);
                rightAsteroid = null;
                break;
            } else if(Math.abs(leftAsteroid) === Math.abs(rightAsteroid)){
                rightAsteroid = null;
                break;
            }
        } 
        
        if(rightAsteroid !== null){
            ans.push(rightAsteroid);
        }
    }
    return ans;
};