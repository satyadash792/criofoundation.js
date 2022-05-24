const circle1=new createCicle(1,{1,2});
const circle2=new createCicle(radius);
function createCircle() {
         
        this.radius=1;

        this.location={
            x:0,
            y:0
        }
        this.draw=function(){
            console.log(`${this.location.x}, ${this.location.y}`);
        }
        this.move=function(newX,newY){
            this.location.x=newX;
            this.location.y=newY;
        }
    
    }

    const circle1=new createCircle();
    circle1.draw(1,1);
    ciclle1.move(10,10);
    const circle2=new createCircle();