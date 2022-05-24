const charCountInHello={
  h : 1,
  e : 2,
  l : 1,
  o : 1
}
const convertMap = (res) =>
{
    if(typeof res !== "object")
    {
             throw new TypeError("This is not a object")
    }
    else
    {
        const myMap = new Map(Object.entries(res))
         return myMap;
    }
  
}


console.log(convertMap(charCountInHello));