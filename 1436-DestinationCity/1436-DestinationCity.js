/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let originSet = new Set();
    let destinationMap = new Set();
    let ans = ''

    for(let [origin, destination] of paths){
        originSet.add(origin);
        destinationMap.add(destination);
    }
    console.log(originSet)
    console.log(destinationMap)

    for(let destination of destinationMap){
        console.log(destination)
        if(!originSet.has(destination)){
            ans = destination;
        }
    }
    return ans
};