/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function(gain) {
    let prefix = []
    for(let alt of gain){
        prefix.push( prefix[prefix.length - 1] ? prefix[prefix.length - 1] + alt : alt );
    }
    return Math.max(...prefix) < 0 ? 0 : Math.max(...prefix);
}












// var largestAltitude = function(gain) {
//     let prefix = [0]
//     let max = 0
//     for(let i = 0; i < gain.length; i++){
//         prefix.push(gain[i] + prefix[prefix.length - 1])
//         max = Math.max( ...prefix)
//     }
//     return max
// };