/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let sMap = new Map()
    let ans = ''
    // creating a map with the letters and their frequency
    s.split('').forEach( char =>{
        sMap.set(char, (sMap.get(char) || 0) + 1);
    })

    // converting the map into an array of arrays to use sort
    let sortedMap = [...sMap.entries()].sort((a, b) => b[1] - a[1]);

    for(let [letter, frequency] of sortedMap){
        ans += letter.repeat(frequency);
    }
    return ans;
};