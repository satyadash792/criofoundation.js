function updateTodo(todoDB,index, newItem) {
  const copy = [...todoDB]; 
  copy[index] = newItem;
  return copy;
}
function getTodo(value) {
  if(value){
   return a
  }
}
function insertTodo(todoDB, item, index) {
    let copy = [...todoDB];
    copy.splice(index-1,0,item)
    return copy
}