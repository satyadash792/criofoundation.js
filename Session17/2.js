const sample = [5, 10, 13, 25, 12, 12, 8, 13, 65, 1];
const mean  = (values) => values.reduce((tot,val) => tot+val)/values.length;
console.log(mean());
const median =(values)=>{
let  sortArr=values.sort(function(a, b){return a-b});
if(sortArr.length%2==0)
return sortArr[sortArr.length/2];
else
return  (sortArr[sortArr.length-1/2]+sortArr[sortArr.length-1/2])/2;
}
const average=(sample,method)=>
  method(sample);
}