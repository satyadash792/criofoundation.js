// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop!=="track" && value!==""){
    return records[id][prop]=value;
    }
    else if(prop==="track" && (!record[id][track])){
      let arr=[];
     return record[id][prop]=arr.push[value];
    }
    else if(prop==="track" && value!==""){
     return records[id][prop].push(value);
    }
    else{
    return "should not be set";
  }
  
}
console.log(recordCollection);

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
 console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(recordCollection);