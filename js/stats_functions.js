// set Conquerors arrays, merge team players with game stats
var c1 = [...conquerorsPlayers];
var c2 = [...conquerorsNames];
const conquerorsStatsArray = c1.map(t1 => ({...t1, ...c2.find(t2 => t2.player === t1.player)}));

let obj = {}

conquerorsStatsArray.forEach((item)=> {
    if(obj[item.player]) {
        obj[item.player].CSPM = parseFloat(obj[item.player].CSPM) + parseFloat(item.CSPM);
        obj[item.player].assists = parseFloat(obj[item.player].assists) + parseFloat(item.assists);
        obj[item.player].kills = parseFloat(obj[item.player].kills) + parseFloat(item.kills);
        obj[item.player].deaths = parseFloat(obj[item.player].deaths) + parseFloat(item.deaths);
    } else {
        obj[item.player] = item
    }
})

let valuesArr = Object.values(obj)
console.log(valuesArr);