/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let r = [];
    let d = [];
    let rIndex = 0;
    let dIndex = 0;

    for(let i = 0; i < senate.length; i++){
        senate[i] == "R" ? r.push(i) : d.push(i);
    }
    
    while( rIndex < r.length && dIndex < d.length){
        if (r[rIndex] < d[dIndex]){
            r.push(r[rIndex] + senate.length);
        } else {
            d.push(d[dIndex] + senate.length);
        }

        rIndex++;
        dIndex++;
    }
    
    return rIndex < r.length ? 'Radiant' : 'Dire'
};
