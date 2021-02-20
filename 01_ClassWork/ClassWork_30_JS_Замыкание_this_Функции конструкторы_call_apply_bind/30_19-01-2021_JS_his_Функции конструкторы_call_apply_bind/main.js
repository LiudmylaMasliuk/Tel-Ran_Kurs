//////// З А М Ы К А Н И Е  (C L O S U R E) ////////

// let myName = 'Vasya'; // globale variable

// function sayHello(){
//   console.log(`hello, ${myName}`);
// }

// myName = 'Kolya';

sayHello(); // --> hello, Kolya

function getMessage(){
  let myName = 'Petya'; // lokalnie peremennie zawiweni ot izmenenij
  return function(){
    console.log(myName);
  }
}

let myName = 'Vasya';
let test = getMessage(); // zdes mit prosto sohranjaem method v peremennuju test
test(); // zdes mi vizivaem uzhe method po imeni peremennoj // --> Petya


// Iwet sna4ala vnutri funkcii, a potom uzhe snaruzh
////////////////////////////////////////////////////////
// Lexical enviroment - object, consists of:
// 1) enviroment record(with all local variables) and
// 2) link to the outer enviroment. 

// a new lexical enviroment is SAVED each time by calling a method
///////////////////////////////////////////////////////////////////////////

let phrase = 'Hello';
function say(name){
  console.log(`${phrase}, ${name}!`);
}

say('Vasya'); // --> Hello, Vasya!
say('Kolya'); // --> Hello, Kolya!
phrase = 'Good bye'; // --> Good bye, Kolya!
say('Petya'); // --> Good bye, Petya'!

/////////////////////////////////////////

function makeCounter(){
  let count = 0;
  return function(){
    return count++;
  }
}

let counter = makeCounter();
let counterNew = makeCounter(); // sozdaem nowij s4et4ik // u nego opjat na4netsja ots4et s 0
console.log(counter()); // -> 0
console.log(counter()); // -> 1
console.log(counter()); // -> 2
console.log(counter());

console.log(counterNew()); // -> 0
console.log(counterNew()); // -> 1
console.log(counterNew()); // -> 2

/////////////////////////////////////////

function makeArmy(){
  let shooters = [];
  let i = 0;
  while(i < 5){
    let shooter = function(){ // each shooter is a function
      console.log(i);
    }
    shooters.push(shooter);
    // console.log(i); // esli mi vinesem console.log za predeli funkcii , to 0 -> 1 -> 2 -> 3 -> 4 -> 5
    i++;
  }
  // i = 20; // esli tak -> to budet kazhdij raz 20
  return shooters;
}

const army = makeArmy();
army[0](); // 5
army[3](); // 5
army[4](); // 5
army[5](); // 5



function makeArmy(){
  let shooters = [];
  for(i = 0; i < 5; i++){
    let shooter = function(){ 
      console.log(i);
    }
    shooters.push(shooter);
  }
  return shooters;
}

army[0](); // 0
army[3](); // 3
army[4](); // 4
army[5](); // 5






///////////////////////////////////////////////////////////////////////
////////////////////////// П Р О Т О Т И П Ы //////////////////////////
///////////////////////////////////////////////////////////////////////

// прототипно-ориентировонное программирование

let str = 'one string';
const strObject = new String(str); // sozdanie string pri pomowi konstruktora

console.log(typeof str); // -> string
console.log(typeof strObject); // -> object

console.log('abc'.toUpperCase); // -> ABC // sna4ala pod kapotom obora4ivaetsja v nekuju obolo4ku objekta (to zhe 4to new String(str))


//////// console.dir ////////
console.dir([1,2,3]); // console.dir - eto spravka ot4et


// [1,2,3] --> Array.prototype (metodi massivov) --> Object.prototype
// function{} --> Function.prototype (metodi funkcij) --> Object.prototype
// number --> Number.prototype (metodi 4isel) --> Object.prototype

// Object.prototype --> null

// ot prototipa sozdajutsja bolee slozhnie suwnosti
// sna4ala sozdaem prototip --> potom konkretnuju suwnost
const cat = {
  feet: 4,
  tail: 1,
  ears: 2,
  voice: function(){
    console.log('meow-meow');
  }
};

const barsik = {
  color: 'black',
  age: 2, 
};

// kak skazat, 4to u barsika est vse metodi i svojstva ot proroditelja cat
// barsik.__proto__ = cat; // - deprecated (ustarevwij)
Object.setPrototypeOf(barsik,cat); // mordern method // static variant prisvaivanija prototipa

const murzik = Object.create(cat); // na osnove kota sozdaem murzika // dynamic variant prisvaivanija prototipa

const murzik = Object.create(cat, {color:{value: 'black'}, age:{value:4}}); // dobawljaem svojstva na letu

murzik.color = 'orange'; // ili tak mozhno dobavljat svojstva

console.log(barsik); // {color: 'black', age: 2} // consol log pokazivaet tolko svojstva tolko konkretnogo objekta

barsik.voice(); // --> meow-meow


//////////////////////////////////////////////////////////////////////////
//////////////// Ф У Н К Ц И И    К О Н С Т Р У К Т О Р Ы ////////////////
//////////////////////////////////////////////////////////////////////////
//
// с помощью функций собираем объект

function User(name, id){
  this.name = name;        // this - eta function
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello ${this.name}`);
  }
}
// создадим одного юзера при помощи функции конструктора 
const user1 = new User('Vasya',1);
console.log(user1);
/* 
User {
  name: 'Vasya',
  id: 1,
  human: true,
  hello: [Function (anonymous)]
}
*/
user1.hello(); // --> Hello Vasya

// создадим ещё одного юзера при помощи функции конструктора 
const user2 = new User('Anna',2);
console.log(user2);
/* 
User {
  name: 'Anna',
  id: 2,
  human: true,
  hello: [Function (anonymous)]
}
*/
user2.hello(); // --> Hello Anna



// Добавляем общей функциональности и свойств (через прототип)
User.prototype.goodBye = function(){
  console.log(`User with id ${this.id} says good-bye!`);
};
user2.goodBye(); // --> User with id 2 says good-bye!

User.prototype.ears = 2;
console.log(user1.ears); // --> 2





