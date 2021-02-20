//// Metod parametra po umol4aniju tolko s 6 standarta////

function calc(a,b){
  return a * b;
}

console.log(calc(2,3)); // --> 6
console.log(calc(2)); // --> NaN
console.log(calc()); // --> NaN



function calc(a = 4, b = 2){ // mi postavili 4 i 2 po umol4aniju
  return a * b;
}
console.log(calc(2)); // --> 4
console.log(calc()); // --> 4



///////// v starih kodah mozhno vstretit takoe /////////////
function showMessage(from,text){
  if(text == undefined){
    text = 'text is not added';
  }
  console.log(`${from}: ${text}`);
}
showMessage('Vasya'); // --> Vasya: text is not added
showMessage('Vasya', 'Say hello'); // --> Vasya: Say hello



///////// s 6 standarta mozhno pisat tak /////////////
function showMessage(from = 'anonym',text = 'empty text'){
  console.log(`${from}: ${text}`);
}
showMessage(); // --> anonym: empty text
showMessage('Vasya'); // --> Vasya: empty text




//////////////////////////////////////////////////
/////////////// Destrukturizacija ///////////////
/////////////////////////////////////////////////

const arrayName = ['Vasya', 'Pupkin', 'Driver'];
////////////////////////////////////////
let[firstName, lastName] = arrayName;   
// pojavilis 2 novie peremennie: 
firstName = 'Vasya' 
lastName = 'Pupkin'
///////////////////////////////////////

console.log(firstName, lastName); // --> Vasya Pupkin
console.log(firstName); // --> Vasya
console.log(lastName); // --> Pupkin

firstName = firstName.toUpperCase();
console.log(firstName);       // --> VASYA

///////////////////////////////////////////
let [, lastName, profession] = arrayName;
///////////////////////////////////////////
console.log(profession); // --> Driver








/////////////////////////////////////////////////////////////////////
////////////////////// Destrukturizacija objekta ///////////////////
///////////////////////////////////////////////////////////////////
const user = {
  name: 'Vanya',
  age: 30,
}

for(let[key,value] of Object.entries(user)){ // Object.entries vidaet massiv, poetomu of
  console.log(`${key}: ${value}`);           // --> name: Vanya
                                            // --> age: 30
}


/////

let [red, black, ...colors] = ['red', 'black', 'green', 'yellow', 'blue'];

console.log(red); // --> red
console.log(black); // --> black
console.log(colors); // --> [ 'green', 'yellow', 'blue' ]


/////


let [firstName, lastName] = [];

console.log(firstName); // --> undefined
console.log(lastName); // --> undefined


let [firstName = 'guest', lastName = 'ananymous'] = [];
console.log(firstName); // --> guest
console.log(lastName); // --> ananymous


let [firstName = 'guest', lastName = 'ananymous'] = ['Vasya'];
console.log(firstName); // --> Vasya
console.log(lastName); // --> 'ananymous'




/////////////////////////////////////////////////////////////////////
////////////////////// Destrukturizacija objekta ///////////////////
///////////////////////////////////////////////////////////////////


const object = {
  title: 'box',
  color: 'black',
  material: 'wood'
};

const{title, color, material} = object;

console.log(material); // --> wood
console.log(title); // --> box
console.log(color); // --> black


const{title, color: boxColor, material} = object;
console.log(boxColor); // --> black


//////////////// Д О Б А В Л Я Е М С В О Й С Т В О   /////////////////
const options = {
  title: 'menu',
};

let{width = prompt('width?'), title = prompt('title?'))} = options;
console.log(title); // --> 1000 // 4to vveli v prompt
console.log(width); // --> 500 // 4to vveli v prompt


let{width = 1000, title = 'empty'} = options;
console.log(title); // --> empty
console.log(width); // --> 1000

console.log(options); // --> {title: 'menu'}


const{material} = object;




///////////////////////////////////////////////////////////////////////
//////////////// Д Е К О Н С Т Р У К Т У Р И З А Ц И Я ///////////////
//////////////////  О Б Ъ Е К Т А   В   О Б Ъ Е К Т Е  ///////////////
//////////////////////////////////////////////////////////////////////

const object = {
  title: 'box',
  color: 'black',
  material: 'wood',
  size:{
    width: 200,
    height: 200,
    length: 200,
  }
};

const{material, size} = object;
console.log(size); // --> { width: 200, height: 200, length: 200 }


const{width, height, length} = object.size;
console.log(width); // --> 200
console.log(height); // --> 200
console.log(length); // --> 200
console.log(length, width, height); // --> 200 200 200
console.log(object.size); // --> { width: 200, height: 200, length: 200 }




////////////// ЕСЛИ МЫ СНАЧАЛА ЗАДАЁМ ПЕРЕМЕННЫЕ И МЫ ХТИМ ДЕК-ТЬ В НИХ////////////

let material;
let size;

({material, size} = object);

console.log(material, size); 

///////////////////////////////////////////////////////////



const complexObject = {
  size:{
    width: 100,
    height: 200,
  },
  items: ['Apple', 'Orange'],
  fill: true
};



const {size: {width,height},items: [f1, f2],fill} = complexObject;


console.log(f1); // --> Apple
console.log(f1, width, f2, height, fill); // --> Apple 100 Orange 200 true
f1 = 'Cherry'; // --> мы поменяли яблоко на черри только для f1 но не в объекте complexObject


//////////////////////////////////////////////////////////////////////////////
////////////////// Добавляем что-то во вложенный ... ////////////////////////
//////////////////////////////////////////////////////////////////////////////
complexObject.items[0] = 'Cherry'; // заменяем яблоко на черри
complexObject.items.push('Cherry'); // добавляем черри в массив items
complexObject.items[items.length] = 'Cherry'; // добавляем черри в массив items
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
complexObject = {}; /// const  поменять нельзя,  так как объявляется, что нужно новое место памяти мы пытаемся переклеить этикетку
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////
////////////////////////// Р Е К У Р С С И Я /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// функция вызывает саму себя


//5! = 5 * 4 * 3 * 2 * 1    --> 4! * 5
//4! = 4 * 3 * 2 * 1        --> 3! * 4
//3! = 3 * 2 * 1            --> 2! * 3
//2! = 2 * 1                --> 1! * 2
//1! = 0 * 1                --> 0! * 1
//0! = 1                    


function recursiveFactorial(n){
  if(n == 0){
    return 1;
  }else{
    return recursiveFactorial(n-1) * n; // 1 vizov (c 4) -> recursiveFactorial(3) * 4  -> 6 * 4
  }                                     // 2 vizov (c 3) -> recursiveFactorial(2) * 3  -> 2 * 3
}                                       // 3 vizov (c 2) -> recursiveFactorial(1) * 2  -> 1 * 2
                                        // 4 vizov (c 1) -> recursiveFactorial(0) * 1  -> 1 * 1
console.log(recursiveFactorial(4));

// (4-1) = 3) * 4                    --->  3 * 4
// (3-1) = 2) * 3 * 4                --->  2 * 3 * 4 
// (2-1) = 1) * 2 * 3 * 4            --->  1 * 2 * 3 * 4 
// (1-1) = 0 -> 1) * 1 * 2 * 3 * 4   --->  1 * 1 * 2 * 3 * 4


