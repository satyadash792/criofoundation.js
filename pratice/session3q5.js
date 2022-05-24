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
  let result=records[id].hasOwnProperty("tracks");
  if(prop!=="track" && value!==""){
    return records[id][prop]=value;
    }
     else if(prop==="tracks" && !result){
      let arr=[value];
      records[id].tracks=arr;
      return records;
    }
    else if(prop==="track" && value!==""){
      records[id][prop].push(value);
      return record;
    }
    else{
      delete records[id][prop];
    return records;
  }
  
}
console.log(recordCollection);

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
 console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(recordCollection);