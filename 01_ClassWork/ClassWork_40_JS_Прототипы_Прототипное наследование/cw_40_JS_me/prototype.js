
/////////////////////////////////////////////////////////
/// P R O T O T I P N O E   N A S L E D O V A N I E  ///
////////////////////////////////////////////////////////


function Shape(){
  this.x = 0,
  this.y = 0
}

Shape.prototype.move = function(x,y){
  this.x += x;
  this.y += y;
  console.log('the shape is moved');
}

// Shape.prototype.height = 100;
const shape = new Shape();
shape.height = 100;

console.dir(shape);


/////////// DELAEM IZMENENIJA V SUPER PROTOTYPE /////

function Rectangle(){
  Shape.call(this);
  this.width = 100;
  this.height = 100;
}

Rectangle.prototype = Object.create(new Shape()); 
// Object.create(new Shape() можно записать проще --> new Shape()
Rectangle.prototype.constructor = Rectangle; 

let rect = new Rectangle();

console.log('Is rect instanceof Rectangle? :' + (rect instanceof Rectangle)); 
// --> is rect instanceof Rectangle true
console.log('Is shape instanceof Shape ? :' + (shape instanceof Shape));
// --> is shape instanceof Shape true

rect.move(1,1);

/* 
Оператор instanceof проверяет, принадлежит ли объект к определённому классу. Другими словами, object instanceof constructor проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object.

object --- Проверяемый объект.
constructor --- Функция-конструктор, на которую идёт проверка.
 */


 function Something(){
 }

 Object.setPrototypeOf(rect, new Something());
 console.log(rect);




//////////////////////////////////////////////////////////////////////////////////////
//////////////////// К А К  Р А С Ш И Р И Т Ь   Б И Б Л И О Т Е К У //////////////////
//////////////////////////////////////////////////////////////////////////////////////
////////////////// Н А   У Р О В Н Е   Н А Ш Е Г О   П Р О Е К Т А ///////////////////
//////////////////////////////////////////////////////////////////////////////////////

//// здесь мы расширим библиотеку методов массивов для этого проекта

 Array.prototype.getEven = function(){
   return this.filter((item) => item % 2 === 0);
 };

 const arr = [1,2,3,4,5,6];
 const evenArr = arr.getEven();
 console.log(evenArr); // --> [ 2, 4, 6 ]

