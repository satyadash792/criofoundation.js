const sentence = "We have almost completed js";
const regEx = /JS/;
const isPresent=function(pattern,str){
try{
return pattern.test(str)
  
}catch{
  console.log("Pattern is absent")
}
}
console.log(isPresent(sentence,regEx));

