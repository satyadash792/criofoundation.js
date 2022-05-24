// console.log("Hello");
// function Circle(radius,x,y){
//   this.radius=radius,
//   this.location={
//      x:x,
//      y:y
//   },
//   this.draw:function(){
//     console.log("hello"+this.x+"hi"+this.y);
//   } 
// }


function Circle(radius, x = 0, y = 0){
this.radius = radius;
this.location = {
  x: x,
  y: y
}
this.draw = function(){
  console.log(`x:${x}, y: ${y}`);
}
this.locatio
}

const circle1 = new Circle(5,1,9);

console.log(circle1.draw());
