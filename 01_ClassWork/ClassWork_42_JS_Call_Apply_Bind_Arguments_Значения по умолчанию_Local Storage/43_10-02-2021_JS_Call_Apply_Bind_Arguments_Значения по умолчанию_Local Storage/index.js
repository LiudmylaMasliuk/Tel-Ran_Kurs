function sayName(){
  console.log(this);
  console.log(`${this.name} ${this.surname}`);
}

sayName(); // this --> Window

const user = {
  name: 'John',
}

// call и apply вызывают функцию сразу
sayName.apply(user, ['Smith']); // привязываем контекст
sayName.call(user, 'Smith'); // привязываем контекст


function personalMessage(message){
  console.log(`${this.name} say :${message}`);
}

personalMessage('hello!'); // --> undefined say hello

// bind просто связывает, но не вызывает сразу --> поэтому создаём новую переменную для функции и вызываем её
const messageFromJohn = personalMessage.bind(user);

messageFromJohn('Nice to see you!') // --> John say: Nice to see you!




////////////////////////////////////////////////////////////////

//////// параметры по умолчанию ////////

// старый синтаксис //
function getSomething(num, num1){
  let n = num || 100;
  let n1 = num1 || 5;
  console.log(n + n1);
}
// в этом была проблема старого синтаксиса
getSomething(0,5); // --> 105 // 0 is null -> 100



// новый синтаксис //
function getSomething(num = 100, num1 = 5){
  console.log(num + num1);
}

getSomething(0,5); // --> 5


//////////////////////////////////////////////////////
////////////////// A R G U M E N T S /////////////////
//////////////////////////////////////////////////////

function fun1(){
  console.log(arguments);
}

fun1(); // --> [Arguments] {}
fun1('Anna', 'John', 'Jack'); // --> [Arguments] { '0': 'Anna', '1': 'John', '2': 'Jack' }

////

function summAll(){
  let sum = 0;
  for(let key in arguments){
    sum += arguments[key];
  }
  return sum;
}

console.log(summAll(1,2)); // --> 3
console.log(summAll(1,2,3)); // --> 6
console.log(summAll(1,2,3,5,7,2,9)); // --> 29


