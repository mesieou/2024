/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Set([0]);
    let dfs = (room) =>{
        visited.add(room)
        console.log(visited)
        for(let neighbour of rooms[room]){
            if(!visited.has(neighbour)) dfs(neighbour);
        }
    }
    dfs(0)
    return (visited.size == rooms.length) ? true : false
};