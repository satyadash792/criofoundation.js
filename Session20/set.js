const ids = ["6awwby61l", "4pg04jthz", "6awwby61l", "4ncg1rbrw", "4ncg1rbrw"];
const getUniqueIds=function(arr){
   if(typeof arr !== "object")
    {
             throw new TypeError("This is not a object")
    }
 const mySet=new Set(arr);
 return mySet;
}
console.log(getUniqueIds(ids));