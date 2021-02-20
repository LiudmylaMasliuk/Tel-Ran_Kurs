 ////////////// T A S K 1 /////////////
/* n = 10
function recursionOutput(10) --> 12345678910
должна возвращать строку из этих чисел
 */

function recursiveOutput(n){
  if(n == 0){
    return '';
  }else{
    return recursiveOutput(n-1) + `${n}`;
  }
}
console.log(recursiveOutput(10));

// (10-1) = 9) + '10'                 --->  910
// (9-1)  = 8) + '910'                --->  8910
// (8-1)  = 7) + '8910'               --->  78910
// (7-1)  = 6) + '78910'              --->  678910
// (6-1)  = 5) + '678910'             --->  5678910
// (5-1)  = 4) + '5678910'            --->  45678910
// (4-1)  = 3) + '45678910'           --->  345678910
// (3-1)  = 2) + '345678910'          --->  2345678910
// (2-1)  = 1) + '2345678910'         --->  12345678910


// S O L U T I O N from Lena
// function recursOutput(n){
//   if(n == 1){
//     return '1 ';
//   }else{
//     return recursiveOutput(n-1) + `${n} `;
//   }
// }
// console.log(recursOutput(10));

// Тернарным оператором
function recursOutput(n){
  return (n = 1) ? '1 ' : recursiveOutput(n-1) + `${n} `;
}
console.log(recursOutput(10));






////////////// T A S K 2 /////////////
/* function checkPalindrom('ABBA') */

/* Плюс, если пользователь ввёл слово разными регистрами */

// [a][b][b][a]

function checkPalindrom(word){
  let small = word.toLowerCase();
  for(i = 0; small.length; i++){
    return (small[i] == small[small.length - i - 1]) ? true : false;
  }
}
console.log(checkPalindrom('AbBa')); // --> abba --> true



//////////////// S O L U T I O N from Lena ////////////////
// variant 1:
//
function isPalindrom(str){
  str = str.toLowerCase().replace(/ /g,''); // str.toLowerCase().replaceAll(' ','')
  for(let i = 0; i < str.length/2; i++){
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
  }
  return true;
}

///// Attention!  /\/ --> /
//// /*/ --> *
//// /+/ --> +
//// .replace(/ /g,'') --> globally

console.log(isPalindrom('NagAn')); // --> nagan --> true
console.log(isPalindrom('sneg')); // --> false

// variant 2:
//
function isPal(str){
  str = str.toLowerCase().replace(/ /g,''); // globally
  return str === str.split('').reverse().join('');
}
console.log(isPal('nagan')); // --> true


// variant 3 (с рекурссией):
// na kazhdom vizove metoda budem obrezat po bukve


function getPalindrom(str, checker = false){
  if(!checker){
    str = str.toLowerCase().replace(/ /g,''); // --> арозаупаланалапуазора
    console.log(str);
  }
  if(str.length < 2){
    return true;
  }
  if(str.charAt(0) === str.charAt(str.length -1)){
    return getPalindrom(str.slice(1,str.length-1), true)
  }
  return false;
}

console.log(getPalindrom('а роза упала на лапу Азора')); // --> true

// variant 3 только стрелочной функцией:
// только для строки из одного слова
// рекурссия меняет индекс
const palindrom = (s = '', left = 0, right = s.length-1) => right - left < 2 ? true : s[left] === s[right] && palindrom(s, left+1, right-1);
console.log(palindrom('nagan'));






////////////// T A S K 3 /////////////
 /* Деконструктизация
const users = [
    {firstName: 'Vasya', lastName: 'Ivanov', id: 1},
    {firstName: 'Anna',  lastName: 'Ivanova', id: 2},
    {firstName: 'Masha', lastName: 'Petrova', id: 3},   
    {firstName: 'Misha', lastName: 'Sidorov', id: 4}
];
changedUser = [
    {fullName: 'Vasya Ivanov', id: 1},
    {fullName: 'Anna Ivanova', id: 2},
    {fullName: 'Masha Petrova', id: 3},   
    {fullName: 'Misha Sidorov', id: 4}
]
*/

const group = [
  {firstName: 'Vasya', lastName: 'Ivanov', id: 1},
  {firstName: 'Anna',  lastName: 'Ivanova', id: 2},
  {firstName: 'Masha', lastName: 'Petrova', id: 3},   
  {firstName: 'Misha', lastName: 'Sidorov', id: 4}
];

function rewriteArray(array){
  const changedUser = [];
  for (i = 0; i < array.length; i++){
    let{firstName,lastName,id} = array[i];
    changedUser.push({fullName:`${firstName} ${lastName}`, id:id});
  }
  return changedUser;
}

console.log(rewriteArray(group));

/* 
step 1  = создаём метод rewriteArray, который будет перебирать старый массив
          и деконструктизировать его элементы при помощи цикла for;
step  2 = в этом методе создаём локальную переменную changedUser, 
          которая будет массивом;
step  3 = внутри цикла после деконструктизации 
          при помощи push добавляем в массив changedUser новый объект,
          в котором создаём новые ключи fullName и id;
step 4  = затем прописываем то, что должно лежать в этих ключах.
          А именно, в fullName кладём значения переменных firstName и lastName,
          а в id --  значение переменной id;

Таким образом метод будет
- перебирать объекты старого массива и деконструктизировать их,
- создавать новый объект и копировать в него значения из ключей старого массива,
- добавлять новые объекты в новый массив
- и выдавать этот новый массив.
 */


//////////////// S O L U T I O N from Lena ////////////////

// variant 1:
const people = [
  {firstName: 'Vasya', lastName: 'Ivanov', id: 1},
  {firstName: 'Anna',  lastName: 'Ivanova', id: 2},
  {firstName: 'Masha', lastName: 'Petrova', id: 3},   
  {firstName: 'Misha', lastName: 'Sidorov', id: 4}
];

// function changeArray(users){
//   let changedUsersArray = [];
//   for(user of users){
//     const{firstName, lastName, id} = user;
//     changedUsersArray.push({fullName: `${firstName} ${lastName}`, id}) 
//     // если имя переменной совпадает с именем ключа, то двоеточие можно опустить
//     // id = id:id
//   }
//   return changedUsersArray;
// }

// const newUsers = changeArray(people);
// console.log(newUsers);

// variant 1 (map):

function change(users){
  return users.map(user => ({fullName: `${user.firstName} ${user.lastName}`, id: user.id}));
}
// здесь нет деструктуризации
// мы оборачиваем в круглые скобки создание нового объекта, для того, 
// чтобы интерпретатор понял, что мы создаём новый объект
// иначе интерпретатор это будет видеть как тело функции, а не как создание нового объекта


// повторим стрелочные фунции:
// если в теле функции больше, чем одна операция, 
// то берём тело функции в фигурные скобки:
// (a,b) => {
//   a *= 2;
//   b *= 3;
//   return a * b;
// }

// если в теле функции одна операция,
// то фигурные скобки не нужны
// (a,b) => a * b;






////////////// T A S K 4 /////////////
/* Написать метод для подсчета среднего возраста юзеров найти средний возраст
*/
const users = [
  {name: 'Vasya', age: 25},
  {name: 'Anna', age: 24},
  {name: 'Masha', age: 18},   // firstName
  {name: 'Misha', age: 19}
];

function getAgeArray(array,key) {
  return array.map(item => item[key]);
}

function getMidAge(array){
  let sum = 0;
  for(i = 0; i < array.length; i++){
    sum += array[i];
  }
  let midAge = Math.floor(sum / array.length);
  return midAge;
}

let midAge = getMidAge(getAgeArray(users, 'age'));
console.log(midAge); 

/* 
step 1  = пишем метод getAgeArray, который создаёт новый массив по ключам объектов старого массива;
step 2  = задаём getAgeArray как параметр функции getMidAge, которая считает средний возраст.
step 3  = в параметр метода getAgeArray кладём массив users и ключ 'age'.
 */


//////////////// S O L U T I O N from Lena ////////////////
function getAverageAge(array) {
  return array.reduce((prevUser, user) => prevUser + user.age, 0)/users.length;
}
// esli mi ne ukazhem initial, to reduce polozhit v prevUser ves pervij object
let averageAge = getAverageAge(users);
console.log(averageAge); // --> 21.5

                    
////////////// T A S K 5 /////////////
/* Нужно реализовать метод addMethods. Он получает на вход имя операции (в нашем случае это символ) 
    и логику(в виде функции) и сохраняет в methods. Реализовать функцию calculate. Она получает на вход строку 
     вида: '2+1' и по символу операции вызывает соотвествующую функцию и считает результат.
*/

const calculator = {
  methods:{
      "+": (a,b) => a + b,
  },
  calculate: function(str){
    let array = [...str];
    let reducer;
    let result = 0;
    // console.log(array); // --> [ '1', '0', '*', '2' ]
    for(i = 0; i < array.length; i++){
      if(isNaN(array[i])){
        // console.log(array[i]); // --> *
        for(key in calculator.methods){
          if(key == array[i])
          // console.log(key); // --> *
          reducer = methods[`${key}`];
          // console.log(reducer); // --> [Function: multiply]

       }
        array = array.join(''); // -->  array = '10*2'
        array = array.split(`${array[i]}`); // --> array = [ '10', '2' ]
        return result = array.reduce(reducer); // --> 20
      }
      
    }
  },
  addMethods: function(name,func){
    let newMethod = func;
    methods[`${name}`] = newMethod;
  },
}

const{methods,calculate,addMethods} = calculator;

let multiply = (a,b) => a * b;

addMethods('*',multiply);
console.log(calculate('10*2')); // --> 20



//////////////// S O L U T I O N from Lena ////////////////

const calc = {
  methods1:{
      "+": (a,b) => a + b,
  },
  calculate1: function(str){ // 1 + 2
    let parameters = str.split(' ');
    let a = +parameters[0];
    let operation = parameters[1];
    let b = +parameters[2];

    if(!this.methods1[operation] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods1[operation](a,b); // (1,2) => 1+2

  },

  addMethods1: function(name, func){
    this.methods1[name] = func;
  }
}

calc.addMethods1('-', (a,b) => a - b);
console.log(calc.calculate1('10 - 2'));

calc.addMethods1('*', (a,b) => a * b);
console.log(calc.calculate1('10 * 2'));




/////////////////////////////////
// 'hello' --> HELLO
///////////////////////////////

const changeToUp = {
  methods2:{
      "+": (a,b) => a + b,
      // 'U': (a,b) => String(a).toUpperCase() + ` ${b}`, // <-- этот метод добавится
  },
  calculate2: function(str){
    let parameters = str.split(' ');
    let a = parameters[0];
    let operation = parameters[1];
    let b = parameters[2];

    return this.methods2[operation](a,b); // 'U'

  },
  addMethods2: function(name, func){
    this.methods2[name] = func;
  }
}



// 'hello' --> HELLO
changeToUp.addMethods2('U', (a,b) => String(a).toUpperCase() + ` ${b}`); // 'U'
console.log(changeToUp.calculate2('hello U Vasya')); // 'U'