// Number
let billion = 1e9; // 1000000000
let billion = 7.3e9; // 73000000000

console.log(billion);

let ms = 1e-6; // 0.0000001
let ms = 3e-3; // 0.003 --> 3/1000
let ms = 3.5e-3 // 0.0035
console.log(ms); 

// Perevodim v destiri4nuju sistemu
//
// 16-ja sistema
console.log(0xff); // 0x // 255
// 2-ja (binarnaja) sistema
console.log(0b11111111); // 0b // 255
// 8-ja sistema
console.log(0o377); // 0o // 255


// Perevodim iz destiri4n0j sistemi v
//
let num = 255;
// v binarnuju
console.log(num.toString(2)); // 11111111
// v 16-ju sistemu
console.log(num.toString(16)); // ff


//////////// Creating own Math ////////////
Math.randomRangeArray = function fillArrayRandom(arraySize, arrayRange){
  let array = [];
  for (let index = 0; index < arraySize; index++) {
    array.push(parseInt(Math.random() * arrayRange));
  }
  return array
}

const arr = Math.randomRangeArray(3,10);
console.log(arr);


////////////////////////////////////////////////////////////////



console.log(0.1 + 0.2); // 0.30000000000000004

let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.30
console.log(sum.toFixed(1)); // 0.3

console.log(9999999999999999); // 10000000000000000

let num = '2px';
num = parseInt(num); // ---> 2
console.log(typeof num); // string
num = +num;
num = Number(num);
console.log(typeof num); // number
// let num = ' 2 2px';
// num = parseInt(num); // ---> 2
// let num = ' 22px';
// num = parseInt(num); // ---> 22
console.log(num);


let num2 = '22.24'; 
num2 = parseFloat(num2); // --> 22.24
// let num2 = '22.24.34';
// num2 = parseFloat(num2); // --> 22.24
console.log(num2);


////////////// Perevod v 10-ju sistemu //////////////

let num3 = 111111111;
console.log(parseInt(num3,2)); // ---> 511

let num4 = 'ff';
console.log(parseInt(num4,16)); // ---> 255

////////////////////////////////////////////////////

console.log(1.35.toFixed(20)); // ---> 1.35000000000000008882 // esli vernulos bolwee 4islo, ... 
console.log(6.35.toFixed(20)); // ---> 6.34999999999999964473 // esli vernulos menwee 4islo, ...

console.log(1.35.toFixed(1)); // ---> 1.4 // ... to okrugljaem do bolwego
console.log(6.35.toFixed(1)); // ---> 6.3 // ... okrugljaem do menwego

// ot 0 do 10
function randomInteger(min, max){
  let num = Math.random() * 10;
}


// function randomInteger(min, max){
//   let num = min + Math.random() * (max - min); // 0 - 0.88 // 8.8
//   return Math.round(num); 
// }
// let num = randomInteger(1, 3)
// console.log(num);

// 1 - 1.499999 -> 1
// 1.5 - 2.499999 -> 2 // 2 budet 4awe
// 2.5 - 2.999999 -> 3

// function randomInteger(min, max){
//   let num = min + Math.random() * (max - min +1); // raswirjaem diapozon8.8
//   return Math.round(num); 
// }
// let num = randomInteger(1, 3)
// console.log(num);


function randomInteger(min, max){
  let num = min + Math.random() * (max - min +1); // (max + 0.5) - (min - 0,5) 
  return Math.floor(num); 
}
let num = randomInteger(1, 3)
console.log(num);


///////////////////////////////////////////////

const person = {
  name: 'Vasja',
  age: 30,
  isMarried: true,
  say: function(){
    console.log('hello!');
  }
}

person.say();


