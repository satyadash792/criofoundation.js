function printMatrix(arr){
  for(let i=0; i < arr.length; i++){
    let str = "";
    for(let j=0; j < arr.length; j++){
      str = str + arr[i][j] + "\t";
    }
    console.log(str)
  }
}
function generateMatrix(size){
  let k=0;
  let arr=[];
  for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
      arr.push(k);
      k++;
    }
  }return arr;

}
function transpose(arr){
  let str="";
  for(let j=0;j<size;j++){
    for(let i=0;i<size;i++){
       str=str+arr[j][i]+'\t';
    }
}return str;}
const a =generatematrix(size);
const b=printmatrix(a);
const c=transpose(a);