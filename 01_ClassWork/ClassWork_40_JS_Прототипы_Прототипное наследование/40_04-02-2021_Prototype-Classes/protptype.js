function Shape(){
    this.x = 0,
    this.y = 0
}

Shape.prototype.movie = function(x,y){
    this.x +=x;
    this.y +=y;
    console.log('the shape is moved');
}

//Shape.prototype.height = 100;
const shape = new Shape();

shape.height = 100;
console.dir(shape);

function Rectangle(){
    Shape.call(this);
    this.width = 100;
    this.height = 100;                          // 
}
Rectangle.prototype = Object.create(new Shape());  // new Shape()
Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();
console.dir(rect);

console.log('is rect inctance of Rectangle ' +  (rect instanceof Rectangle));
console.log('is shape inctance of Shape ' +  (shape instanceof Shape)); 
rect.movie(1,1);

function Somthing(){

}

//Object.setPrototypeOf(rect, new Somthing());
console.dir(rect);

Array.prototype.getEven = function(){
    return this.filter((item)=> item % 2 ===0);
}

const arr = [1,2,3,4,5,6];
const evenArr = arr.getEven();
console.log(evenArr);

console.dir(Array);