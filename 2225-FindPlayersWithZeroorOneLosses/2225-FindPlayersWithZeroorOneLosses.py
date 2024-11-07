/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    // matches = [[2,3],[1,3],[5,4],[6,4]]
    
    //create a map for winners and one for loosers
    let loosersMap = new Map()
    let allplayersSet = new Set()
    let loosersSet = new Set()
    
    //loop into each of the matches to distribute players
    matches.forEach((match, index) => {
      //add all the players
       allplayersSet.add(match[0]).add(match[1]);
        
      // add the loosers
      loosersSet.add(match[1]);
      loosersMap.set(match[1], (loosersMap.get(match[1]) || 0) + 1 );
    })
    
    // get the winner players
    let winnersArr = [...allplayersSet].filter(number => !loosersSet.has(number)).sort((a,b) => a - b)
    
    //get the looser players
    let loosersArr = [];
    for(let [player, frequency] of loosersMap){
        if(frequency === 1) {
            loosersArr.push(player);
        }
    }
    
    //sort loosersArr
    loosersArr.sort((a,b) => a - b)
    
    return [winnersArr, loosersArr];
                    
};
