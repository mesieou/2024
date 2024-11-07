var maxVowels = function(s, k) {
    // initialize the left, ans, vowel counter
    let left = 0, ans = -Infinity, vowelsCount = 0;
    vowels_set = new Set(['a', 'e', 'i', 'o', 'u']);
    // loop through the s word
    s.split('').forEach((char, right) => {
        //current word is vowel increase the count
        if (vowels_set.has(char)){
            vowelsCount++;
        }
        // if the window is greater than k we need to shrink it
        if( (right - left + 1) > k){
            // if the left pointer is a vowel
            if(vowels_set.has(s[left])){
                // decrease the counter
                vowelsCount--;
            }
            // move the left pointer
            left++;
       }
       ans = Math.max(ans, vowelsCount)
    })
    return ans
};




/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 
 
 
 
 
 
 
 
 
 */
// var maxVowels = function(s, k) {
//     let left = 0, max = 0;
//     const regex = /^[aeiou]$/i;
//     let prefix = [0]; // Initialize prefix array with 0

//     // Build prefix sum array
//     for (let i = 0; i < s.length; i++) {
//         if (regex.test(s[i])) {
//             prefix.push(prefix[prefix.length - 1] + 1);
//         } else {
//             prefix.push(prefix[prefix.length - 1]);
//         }
//     }

//     // Sliding window to find the max number of vowels in any substring of length k
//     for (let right = k; right <= s.length; right++) {
//         max = Math.max(max, prefix[right] - prefix[right - k]);
//     }

//     return max;
// };

















