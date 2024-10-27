/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let arr_with_frequencies = new Map();
    let ans = new Set()

    for(let num of arr){
        arr_with_frequencies.set(num, (arr_with_frequencies.get(num) || 0) + 1);
    }

    for(let [key, val] of arr_with_frequencies.entries()){
        console.log(val)
        ans.add(val);
    }
    console.log(ans)
    console.log(arr_with_frequencies)
    return ans.size == arr_with_frequencies.size
};