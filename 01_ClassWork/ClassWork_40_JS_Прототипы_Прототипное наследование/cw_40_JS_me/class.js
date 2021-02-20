/////////////////////////////
//////// К Л А С С Ы ////////
/////////////////////////////

class Rectangle{
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
  calcArea(){
    return this.height * this.width;
  }
  print(){
    console.log(`w: ${this.width}, h: ${this.height}`);
  }
}

const square = new Rectangle(10,10);
console.log(square.calcArea()); // --> 100

const rect = new Rectangle(20,40);
console.log(rect.calcArea()); // --> 800

console.dir(square);
/* -->
Rectangle
height: 10
width: 10
__proto__: Object
    calcArea: ƒ calcArea()
    constructor: class Rectangle
    __proto__: Object
*/

////////////////////////////////////////////
///////// E X T E N D S ///// S U P E R ////
///////////////////////////////////////////

class ColorRectangleWithText extends Rectangle{
  constructor(height,width, text, bgColor){
    super(height,width);
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps(){
    console.log(`Text is ${this.text}, color is ${this.bgColor}.`);
  }
  print(){
    super.print()
    console.log(`color: ${this.bgColor}`);
  }
}

const colorRect = new ColorRectangleWithText(100,20, 'Hello world', 'red');
console.log(colorRect.calcArea()); // --> 2000
colorRect.showMyProps(); // --> Text is Hello world, color is red.
console.dir(colorRect);
/* -->
ColorRectangleWithText {
  height: 100,
  width: 20,
  text: 'Hello world',
  bgColor: 'red'
} 
*/

square.print();
colorRect.print();

/* 

w: 10, h: 10
w: 20, h: 100
color: red

 */

