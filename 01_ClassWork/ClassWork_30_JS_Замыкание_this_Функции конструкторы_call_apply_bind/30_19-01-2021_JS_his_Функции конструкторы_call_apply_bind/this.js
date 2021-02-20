/////////////// this //////////////

// 'use strict' -> ориентация на более строгий стандарт написания кода

//'use strict'
age = 12;
console.log(age); // --> budet vidavat owibku, tak kak mi ne ispolzovali let // t.e. mi ispolzovali starij vid napisanija




// для функции this - eto window
// Document - html документ

// bez 'use strict'
function showThis(){
  console.log(this);
}
showThis(); // --> Window (окно нашего браузера)

/* 'use strict'
function showThis(){
  console.log(this);
}
showThis(); // --> undefined */

'use strict'
function showThis(a,b){
  console.log(this); // --> undefined
  function sum(){
    console.log(this); // --> undefined
    // return this.a + this.b; // --> error
    return a + b; // --> error
  }
  console.log(sum());
}
showThis(5,6); // --> 11


function User(name, id){
  this.name = name;        // this - eta function
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello ${this.name}`);
  }
}
const user1 = new User('Vasya',1);

//////////////////////////////////////////////////
///////////// C A L L //// A P P L Y /////////////
/////////////////////////////////////////////////
function sayName(lastName){
  console.log(this);
  console.log(this.name + lastName);
}
const user = {
  name: 'John'
};
//sayName(); // --> error

sayName.call(user,' Smith'); // { name: 'John' } John Smith
sayName.apply(user, [' Trump']); // { name: 'John' } John Trump

// apply используется если параметров много и например массив с ними надо отфилтровать

//////////////////////////////////////////////////
//////////////////// B I N D ////////////////////
/////////////////////////////////////////////////

function count(num){
  return this * num;
}
const double = count.bind(2); // свяжи мне метод count с параметром 2
console.log(double(5)); // --> 10  (5 * 2 = 10)
console.log(count(5)); // --> NaN

///////
function printMessage(){
  console.log(this);
}
const print = printMessage.bind('Hello'); // bind говорит: свяжи мне printMessage с контекстом в скобках
print(); // --> [String: 'Hello']
//////

// 1.  Обычно функция - this = window (при нестрогом режиме), undefined - при использовании 'use strict'.
// 2. Контекст у методов объекта - сам объект.
// 3. this в функциях конструкторах и классах относится к новому экземпляру объекта.
// 4. Ручная привязка  this (call, apply, bind)


const object = {
  a: 20,
  b: 14,
  sum: function(){ // функция sum относится к объекту
    console.log(this);
    function more(){ // потеря контекста // --> Window // эта функция живёт внутри блока кода другой функции, но туда не относится и для неё контекстом является глобальное окно Window // эта функция не видна снаружи, она работает только внутри этого блока кода
      console.log(this);
    }
    more(); 
  }
}

object.sum(); // --> { a: 20, b: 14, sum: [Function: sum] }
// он смотрит из маленькой коробки на более большую коробку и до космоса ему не дотянутся



const object1 = {
  a: 20,
  b: 14,
  sum: function(){
    return this.a + this.b; // funkcija lezhit vnitri bjekta, poetomu this rabotaet // this vsmotrit vnutr objekta
  }
}

console.log(object1.sum()); // -->  34





// Task01
// 'msmsm fhfh ldldl eoeoe sjs sj fkfk'
// function findShort('msmsm fhfh ldldl eoeoe sjs sj fkfk')
// vernut dlinu samogo korotkogo slova v stroke


const string = 'The cat catches a mouse';

function findShort(str){
  let array = str.split(' ').map(item => item.length);
  let shortNum = array[0];
  
  array.forEach((index) => {
    if(array[index] < shortNum)
      shortNum  = array[index];
  }) 
  return shortNum;
}

console.log(findShort(string)); // --> 1





// Task02
// s slove ne povtorjaetsja ni odnoj bukvi 
// function isIsogram('abcdef') --> true;
// function isIsogram('abbf') --> false;
// function isIsogram('abbfA') --> false;
// bolwaja i malenkaja bukvi - eto odin i tot zhe simvol

function isIsogram(str){
  let array = str.toLowerCase().split('');
  let checked = true;
  let letter = array[0];
  for(i = 0; i < array.length; i++){
    if(letter == array[i+1])
    checked = false;
  }
  return checked;
}

console.log(isIsogram('abacd')); // -> false
console.log(isIsogram('abcd')); // -> true
console.log(isIsogram('abbfA')); // -> false