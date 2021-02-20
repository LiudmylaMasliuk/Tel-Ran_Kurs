

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// М Е Т О Д Ы   П Р Е О Б Р А З О В А Н И Я   М А С С И В А  //////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// S P L I T /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// makes an array from a string
let names = 'Ivan, Anna, Vasya, Olya, Petya';
let nameArray = names.split(', ');

console.log(nameArray);     // --> [ 'Ivan', 'Anna', 'Vasya', 'Olya', 'Petya' ]
console.log(nameArray[2]); // --> Vasya

nameArray.forEach(element => console.log(`message send to: ${element}`));


//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// J O I N //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

console.log(nameArray.join('-')); // --> Ivan-Anna-Vasya-Olya-Petya



////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  S P L I T   R E V E R S E   J O I N ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// split дробит массив по тому знаку, который указан в скобках
// reverse переворачивает массив справа налево
// join склеивает массив в строку и разделяет его элементы тем, что мы указываем в параметре

console.log(names.split(', ').reverse().join(' * ')); // --> Petya * Olya * Vasya * Anna * Ivan


// если мы хотим перевернуть строку, то сначала переделываем её в массив (split)
//потом переварачиваем (reverse)
// и потом склеиваем (join).
console.log('abdcdef'.split('').reverse().join(' ')); // --> f e d c d b a


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  S O R T //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// лексикографический принцип сортировки 
const letters =['b','c','f','a','e'];
letters.sort();                       // --> [ 'a', 'b', 'c', 'e', 'f' ]
console.log(letters);

        
// так как этот метод использует лексикографический принцип сортировки  
// , то использовать его можно только со строковыми элементами.
// С числовыми элементами его не исползовать. Вот что будем в этом случае:
const numbers = [2,4,16,5,23,11];
numbers.sort();              // --> [ 11, 16, 2, 23, 4, 5 ] 
console.log(numbers);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// М Е Т О Д Ы   О Б Ъ Е К Т А ///////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////


                                      Object.keys(objectName);

const user = {
  name: 'Vasya',
  age: 25,
  isMarried: true,
};

const keys = Object.keys(user);

console.log(Object.keys(user)); // --> [ 'name', 'age', 'isMarried' ]

console.log(keys.length); // --> 3 // смотрим дли ну объекта



                                      Object.values(objectName);

console.log(Object.values(user)); // --> [ 'Vasya', 25, true ]



                                      Object.entries(objectName);
// преобразует объект в массив
console.log(Object.entries(user)); // --> [ [ 'name', 'Vasya' ], [ 'age', 25 ], [ 'isMarried', true ] ]


const prices = {
   banana: 1,
   orange: 2,
   meat: 4,
};

let doublePrice = Object.entries(prices).map(([key, value]) => [key, value *2]); 
// --> [ [ 'banana', 2 ], [ 'orange', 4 ], [ 'meat', 8 ] ]
// Object.entries создаёт двумерный массив
// map на основе старого создаёт новый массив


console.log(doublePrice);


                                      Object.fromEntries(objectName);
// переводим массив обратно в объект
doublePrice = Object.fromEntries(doublePrice); // --> { banana: 2, orange: 4, meat: 8 }
console.log(doublePrice);
console.log(doublePrice.meat); // 8


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let a = 10;
let b = 20;

function doSomething(x,y){
  x *= x;
  console.log(x); // --> 100
  y /= 4;
  console.log(y); // --> 5
}

doSomething(a,b);
console.log(a,b); // --> 10, 20

///////

let array = [1,2,3,4,5];
function changeArray(arr){
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index] * 2; // arr[index] rabotaet kak ssilka // manipuljacija v korobke // rabota i s klju4om i so zna4eniem
  }
  // for(num of arr) num *=2; // v etom slu4ae metod ne budet rabotat // tak kak rabota vedetsja tolko so zna4enijami
}
changeArray(array);
console.log(array); // --> [ 2, 4, 6, 8, 10 ]

// tak kak massiv ne primitivnij tip dannih ,to pod imenem massiva hranitsja ssilka na vse elementi


////////////////////////////////////////////////////////////////////////////////
////////////////  П Е Р Е С О Х Р А Н Е Н И Е   С С Ы Л К И ////////////////////
////////////////////////////////////////////////////////////////////////////////
const user1 = {
  name: 'Vasya',
  age: 25,
  isMarried: true,
};

const user2 = user1; // указывают на одну и ту же область памяти

user2.name = 'Petya';
console.log(user1); // --> { name: 'Petya', age: 25, isMarried: true }
console.log(user2); // --> { name: 'Petya', age: 25, isMarried: true }



// const oldArray = [ 'a','b','c'];
// const newArray = oldArray;
// newArray[3] = 'd';

// console.log(oldArray); // --> [ 'a', 'b', 'c', 'd' ]
// console.log(newArray); // --> [ 'a', 'b', 'c', 'd' ]




////////////////////////////////////////////////////////////////////////////////
//////////////// Н О В Ы Й   М А С С И В   И З   С Т Р А Р О Г О ///////////////
////////////////////////////////////////////////////////////////////////////////

const oldArray = [ 'a','b','c'];
const newArray = oldArray.slice();
newArray[3] = 'd';

console.log(oldArray); // --> [ 'a', 'b', 'c' ]
console.log(newArray); // --> [ 'a', 'b', 'c', 'd' ]


////////////////////////////////////////////////////////////////////////////////
//////////////// Н О В Ы Й   О Б Ъ Е К Т   И З   С Т Р А Р О Г О ///////////////
////////////////////////////////////////////////////////////////////////////////

// Poverhnostnoe kopirovanie //
function copy(obj){         // создаём функцию и даём ей имя copy
  let objCopy = {};         // создаём новую переменную для объекта 
  for(key in obj){
    objCopy[key] = obj[key]  // пересохраняем по ключу
  }
  return objCopy;
}

/////

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

const copyNumbers = copy(numbers);
copyNumbers.a = 10; 
copyNumbers.c.x = 10; // na sled oject zdes budet kopirovatsja ssilka



console.log(numbers); // --> { a: 2, b: 5, c: { x: 10, y: 4 } }
console.log(copyNumbers); // --> { a: 10, b: 5, c: { x: 10, y: 4 } }



const add = {
  d: 17,
  e: 25,
}

/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////// О Б Ъ Е Д И Н Е Н И Е   Д В У Х   О Б Ъ Е К Т О В   В М Е С Т Е  ///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Object.assign(numbers, add));
// --> { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 25 }


//////// One more variant of copying objects /////////////

const cloneAdd = Object.assign({}, add);
cloneAdd.d = 25;

console.log(add); // --> { d: 17, e: 25 }
console.log(cloneAdd); // --> { d: 25, e: 25 }


////////////////////////// A S S I G N //////////////////////////
////////////////////////////////////////////////////////////////

const client = {name: 'Vasya'};
const permission1 = {canView: true};
let permission2 = {canEdit: true};

// s assign mozhno objedinjat objekti
Object.assign(client, permission1, permission2);

// s assign mozhno i menjat svoistva
Object.assign(client, {name: 'Petya', age: 25}); 
// --> { name: 'Petya', canView: true, canEdit: true, age: 25 }

console.log(client); // --> { name: 'Vasya', canView: true, canEdit: true }


///////////////////////////////////////////////////////////////////////
/////////////////// S P R E A D   O P E R A T O R (...) //////////////
//////////////////////////////////////////////////////////////////////

// vinimaet elementi iz massiva ili ojekta i delit ih
///
const video = ['youtube', 'vimeo', 'rtube'],
      blogs = ['wordpree', 'livejournal', 'blogger'],
      internet = [... video, ...blogs, 'facebook', 'instagram'];

console.log(internet);
 
// -->  //  [
        //   'youtube',
        //   'vimeo',
        //   'rtube',
        //   'wordpree',
        //   'livejournal',
        //   'blogger',
        //   'facebook',
        //   'instagram'
        // ]


function log(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2,5,7];
const messages = ['hello', 'nice to see you', 'good-bye!']
log(...num);

// -->  // 2
        // 5
        // 7


log(...messages);

// -->  // hello
        // nice to see you
        // good-bye!


const arrayOne = ['a', 'b'];
const copyArrayOne = [...arrayOne];
console.log(copyArrayOne);


/////////////
const objMore = {
  one: 1,
  two: 2,
}

const copyObjMore = {...objMore}; // svojstva kopirujutsja v novij ojekt // eto tozhe poverhnostnoe kopirovanie
console.log(copyObjMore); // --> { one: 1, two: 2 }



