function level(scale){
  let map=new Map();
  map.set("beginner","0-19");
  map.set("familiar","20-39");
  map.set("proficient","40-59");
  map.set("expert","60-79");
  map.set("guru","80-99");
  console.log(map);
  let level="god";
  map.forEach((value,key)=>{
    let range=value.split("-");
    if(scale >=parseInt(range[0]) && scale <=parseInt(range[1])){
      level=key;
    }
  });
  return "you are "+level;
}
console.log("Satya");
console.log(level(30));