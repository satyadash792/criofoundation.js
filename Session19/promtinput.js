const prompt = require('prompt-sync')();;
const name=prompt("What is your name?");
const getInput=function(a){
   return name
}
console.log(getInput(name));