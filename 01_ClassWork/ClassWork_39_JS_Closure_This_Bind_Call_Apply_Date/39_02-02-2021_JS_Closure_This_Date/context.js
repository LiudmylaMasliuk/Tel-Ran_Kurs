//////////////////////////////////////////////////////////
/////////////////// К О Н Т Е К С Т  /////////////////////
//////////////////////////////////////////////////////////
console.log(this); // --> window

/* function test(){
  console.log(this);
}
test();  // --> window 
*/

// function clickHandler(){
//   console.log(this);
// }
// clickHandler();  // --> window

// const btn = document.querySelector('.btn');
// btn.onclick = clickHandler;  // --> <button>click me</button>




//////////////////////////////////////////////////////////
/////////////// П О Т Е Р Я   К О Н Т Е К С Т А //////////
//////////////////////////////////////////////////////////
////////// (В Ы С В О Б О Ж Д Е Н И Е   T H I S) //////////
//////////////////////////////////////////////////////////

let person = {
  name: 'John',
  age: 23,
  display: function(){
    console.log(this);
    console.log(this.name, this.age); 
  }
}
person.display(); 
// --> {name: "John", age: 23, display: ƒ}
// --> John 23

/// вынем функцию из display и сохраним её в переменную print
let print = person.display;
print();
// --> window
// --> undefined (t.k u window net name)
// --> undefined (t.k u window net age)



/////////////////////////////////////////////////////////////////
////////// П Р И В Я З Ы В А Н И Е   К О Н Т Е К С Т А //////////
/////////////////////////////////////////////////////////////////


///////// C A L L /////////

// print.apply(person); // -> если один параметр
// print.apply(person, some); // -> если два параметра
// привязываем контекст и показываем какой

print.call(person); 
// --> {name: "John", age: 23, display: ƒ}
// --> John 23


/////////  A P P L Y //////

// print.apply(person); // -> если один параметр
// print.apply([person, some]); // -> если два параметра
print.apply(person);
// --> {name: "John", age: 23, display: ƒ}
// --> John 23 



/////////  B I N D ////////

// привязывает контекст
// работает как метод

let printPerson = print.bind(person);
printPerson();

// --> {name: "John", age: 23, display: ƒ}
// --> John 23 



///////////////////////////////////////////////////
/////// С Т Р Е Л О Ч Н Ы Е   Ф У Н К Ц И И ///////
///////////////////////////////////////////////////
// sintaksi4eskij sahar

function sum(a,b){
  return a + b;
}
const sum1 = (a,b) => a + b;

////

const btn = document.querySelector('.btn');
btn.onclick = clickHandler;

function clickHandler(){
  console.log(this);
}
//clickHandler();

let clickArrowHandler = () => console.log(this);

btn.onclick = clickArrowHandler;
// --> window

let person2 = {
  name: 'John',
  displayName: function(){
    console.log(this.name);
  }
}
person2.displayName(); // --> John

let person3 = {
  name: 'Jack',
}
//person3.display = person2.displayName;
// --> Jack

////////////////////

let person4 = {
  name: 'Jane',
  displayName: () => {
    console.log(this);
    console.log(this.name);
  }
}

let person5 = {
  name: 'Mary',
}

person5.display = person4.displayName;
// --> undefined

/////// Ф У Н К Ц И И   К О Н С Т Р У К Т О Р Ы //////

function Timer(seconds){
  this.counter = seconds;
  this.tick = function(){
    this.counter--;
    console.log(this.counter);
  }
  this.start = function(){
    let that = this;
    setInterval(function(){
      //console.log(that.counter);
      that.tick();
    }, 1000);
  }
}

const timer = new Timer(20); // {counter:20, tick: function(){counter--;}}
/* console.log(timer.counter); // --> 20

timer.tick(); // 19
timer.tick(); // 18
timer.tick(); // 17
timer.tick(); // 16
console.log(timer.counter); // --> 16 */

// setInterval(timer.tick, 1000); // потеря контекста 
// control + option + M --> otmenjaem v konsoli vipolnenie metoda

// setInterval(timer.tick.bind(timer), 1000);

timer.start();



////////  то же самое только стрелочной функцией ////////

function Timer2(seconds){
  this.counter = seconds;
  this.tick = function(){
    this.counter--;
    console.log(this.counter);
  }
  this.start = function(){
    setInterval(() => {
      this.tick();
    }, 1000);
  }
}

const timer2 = new Timer2(20);
timer2.start();


/////

function Timer3(seconds){
  this.counter = seconds;
  this.tick = () => {
    this.counter--;
    console.log(this.counter);
  }
}

const timer3 = new Timer3(20);
setInterval(timer3.tick, 1000);




