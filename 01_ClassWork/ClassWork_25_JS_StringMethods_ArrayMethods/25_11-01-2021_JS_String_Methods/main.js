// String
const str1 = 'hello!'; // "hello" // `hello ${variable}`

const str2 = `hello!
   world`;
// hello
//    world!

const str3 = 'hello!\'world\'!';    // hello 'world'!
const str3 = 'hello,\n\'world\'!';  // hello, 
                                    //'world'!

const str4 = 'hello!\n\'world\'\u{1F60D}!';
// hello!
// 'world'smilie


/////////////////////////////////////
/////// String is also an array//////
/////////////////////////////////////

console.log(str1.length);


///////////////////// C H A R A T //////////////////////////
//
// достать элемент в строке
//
console.log(str1[2]); // --> l
console.log(str1.charAt(2)); // --> l
console.log(str1.charAt(str1.length - 1)); // --> !



str2 = 'Hello world!';
str2[0] = 'h';
console.log(str2); // --> Hello // is not changed

str2 = 'Hello world!';
console.log(str2); // --> Hello world! // strings cannot be changed 
// a new value for the variable will be created 
// and the previous value of this variable will be trash

const num = [1,2,3,4];
num[0] = 5;
console.log(num); // --> [5,2,3,4]


str2 = str2 + str2;
console.log(str2); // Hello world!Hello world!
// again a new value 'Hello world!Hello world!' will be created
// the previous value 'Hello world!' will be trash



///////////////////////////////// Change Register //////////////////////////
str2.toLowerCase();
console.log(str2); // --> Hello world! // because string cannot be changed
str2 = str2.toLowerCase(); // --> hello world!
str2.toUpperCase(); // --> hello world! // because string cannot be changed
str2 = str2.toUpperCase(); // --> HELLO WORLD!





/////////////  I N D E X _ O F  /////////////
//
//
const newStr = 'HELLO WORLD!';
console.log(newStr.indexOf('W')); // 6
console.log(newStr.lastIndexOf('L')); // 9
console.log(newStr.includes('HELLO'));

console.log(newStr.startsWith('HELLO')); // true
console.log(newStr.startsWith('WORLD')); // false
console.log(newStr.endsWith('!')); // true
console.log(newStr.endsWith('HEL')); // false


console.log(str2.indexOf('W')); // --> 2
//???// vozvrawaet tolko pervoe sovpadenie
console.log(str2.indexOf('W', 9)); // --> -1 // when '-' there is no such sybol
// search from index 9


// Remember!!!! //// Register sensitive !!!!

console.log(str2.lastIndexOf('L')); // what index of the last 'L' // --> 9
// perebiraet sna4ala vse sovpadenija i vozvrawaet tolko poslednee sovpadenie

console.log(str2.startWith('H')); // also register sensitive 
console.log(str2.startWith('HELLO!')); // --> true // if there is any error --> false
console.log(str2.endsWith('!'));
console.log(str2.includes('WOR'));  // --> true // if there is no such combination --> false




/////////////////////////// S L I C E //////////////////////////

console.log(str2.slice(7,11));
// from the element inclusiv till the element exclusive
// element (inclusive) -- element (exclusive)
// the same as in grid in CSS



///////////////////////// S U B S T R I N G //////////////////

console.log(str2.substring(11,6));
// the same as slice, but there are two differences:
// DIFFERENCE 1: that we can change the position of start and end, eg. from 6 till 11 we can write (11,6)
// substring will understand and replace it into (6,11)
// DIFFERENCE 2: substring cannot work with negative numbers
console.log(str2.substring(str2.length - 1));
//////////////////////////////////////////////////////////



/////////// S U B S T R //////////////////////////////////

console.log(str2.substr(6,3));
// .substr(from,number of elements)
// (6,3) = (from element with the index 6, 3 elements)
//////////////////////////////////////////////////////////




/////////// R E P L A C E //// R E P L A C E A L L ///////

str2 = str2.toUpperCase(); // --> HELLO WORLD!

console.log(str2.replace('E','A')); 
// the first 'E' found -> 'A' 
// will replace only the 1st element found
console.log(str2.replaceAll('E','A')); 
// all 'E's -> 'A's 
// will replace all the elements in the string
//////////////////////////////////////////////////////////


const number = [1,2,3,4];
// delete number[1]; // will delete only the value // the place will be saved


///////////////////////// S P L I C E ////////////////////////
//
// .splice(index, deleteCount, elem1 , elem2, ..., elemN)
// перезаписывает массив
//
//
number.splice(1,1);
console.log(number);  // --> [ 1, 3, 4 ]
number.splice(1,2,5,6); 
console.log(number); // --> [ 1, 5, 6 ]


const number1 = number.slice(1,3);
// slice создаёт новый массив 
// поэтому ему нужно создать новую переменную


/////////////////////// C O N C A T /////////////////////////
//
//  склеимвает массивы
// const newArray = array1.concat(array2, 6, 7, array3, array4);
//
const newNums = num.concat(number1); // k massivu num prikleit number1 i zapiwet v novuju peremennuju 
console.log(newNums);

///////////////////////////////////////////////////////////////


//////////////////////////////////////////////// F O R   E A C H ///////////////////////////////////////
//
// each element in this array
//
//
const num = [1,2,3,4];
num.forEach(item => item * 2); // multiply each element by 2
num.forEach(item => console.log(item)); // print each element


const number1 = [1,2,3,4];
number1.forEach(item => console.log(item));
number1.forEach((item, index, array) => console.log(`${item} has index ${index}, in ${array}`)); 
// 1 has index 0, in 1,2,3,4
// 2 has index 1, in 1,2,3,4
// 3 has index 2, in 1,2,3,4
// 4 has index 3, in 1,2,3,4 

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
console.log(num.indexOf(2)); // --> 1
console.log(num.indexOf(7)); // --> -1 // there is no such index
//////////////////////////////////////////////////////////


///////////////////////////////////////////////// F I N D //////////////////////////////////////////////////
//
// поиск по параметру объекта
// возвращает объект
// если такого элемента нет, то вернёт undefined
const newArray = [1,2,3,4];
console.log(newArray.find(item => item == 3)); // --> 3
console.log(newArray.find(item => item == 8)); // --> undefined


let users = [
  {id:1, name: 'Vasya'},
  {id:2, name: 'Olya'},
  {id:3, name: 'Vanya'},
];

let user = users.find(item => item.id == 1);
console.log(user.name); // --> Vasya
console.log(user);

let user = users.find(item => item.id == 2);
console.log(user.name); // --> Olya

let user = users.find(item => item.id == 4);
console.log(user.name); // --> undefined



////////////////////////////////////////////////////// F I L T E R /////////////////////////////////////////
// 
// перебирает, проверяет условие и фильтрует
// в отличие от find возвращает массив
//
// найдём пользователей с именами, чья длина равна 5
let usersWithLongName = users.filter(item => item.name.length == 5);
console.log(usersWithLongName); // --> [{id:1, name: 'Vasya'}, {id:3, name: 'Vanya'}]
//
let usersWithLongName = users.filter(item => item.name.startsWith('O'));
console.log(usersWithLongName); // --> [{id:2, name: 'Olya'}]
//
let usersWithLongName = users.filter(item => item.id > 1); // --> [{id:2, name: 'Olya'}, {id:3, name: 'Vanya'},]


let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

console.log(users.filter(item => item.name.startsWith('В'))); // --> [ { id: 1, name: 'Вася' } ]
console.log(users.find(item => item.name.startsWith('В'))); // --> { id: 1, name: 'Вася' }
// отфильтруем в массив объекты с двумя первыми пользователями
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers); // --> [ { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]
// найдём объект с Петей
console.log(someUsers.find(item => item.id == 2)); // --> { id: 2, name: 'Петя' }
// положим объект с Петей в массив (пока не присвоив его никакой переменной)
console.log(someUsers.filter(item => item.id == 2)); // --> [ { id: 2, name: 'Петя' } ]






//////////////////////////////////////////////// M A P  ////////////////////////////////////////
//
// возвращает новый массив на основе старого
//
let numbr = [1,2,3,4];
let result = numbr.map(num => num * 2);
console.log(result);  // --> [2,4,6,8]

const cities = ['Berlin','London','Paris','Moscow'];
// посмотрим длину строк городов
const citiesLength = cities.map(city => city.length);
console.log(citiesLength);  // --> [6,6,5,6]
console.log(cities); // --> 'Berlin', 'Paris', 'London'


















