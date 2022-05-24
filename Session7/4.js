// function createCar(name,color){
//   return{
//     name,
//     color,
//     carDetails: function(){
//       console.log("car name : "+this.name);
//     }
//   }
// }
// const car1=createCar("Bmw","black");
// console.log(car1.carDetails());
// console.log(car1);

function createCar1(name,color){
  
    this.name=name,
    this.color=color,
   this.carDetails=function(){
      console.log("car name : "+this.name);
   }
}
const car2=new createCar1("Bmw","black");
console.log(car2.carDetails());
console.log(car2);



 