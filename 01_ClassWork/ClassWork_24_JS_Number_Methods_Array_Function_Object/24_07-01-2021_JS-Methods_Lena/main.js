// Number

let billion = 7.3e9;  //1000000000;
console.log(billion);

let ms = 3e-3;       //0.003  -> 3/1000  
console.log(ms);

console.log(0xff);
console.log(0b11111111);
console.log(0o377);

let num = 255;
console.log(num.toString(2));

Math.randomRangeArray = function fillArrayRandom(arraySize, arrayRange){
    let array = [];
    for (let index = 0; index < arraySize; index++) {
        array.push(parseInt(Math.random() * arrayRange));     
    }
    return array;
}

const arr = Math.randomRangeArray(3,10);
console.log(arr);

console.log(0.1+0.2);

let sum = 0.1 + 0.2;
console.log(sum.toFixed(2));

console.log(9999999999999999);

num = '22.24.34 px';
console.log(typeof num);
num = parseFloat(num);
console.log(typeof num);
console.log(num);

num = 'ff';
console.log(parseInt(num,16));

console.log(1.35.toFixed(20));
console.log(6.35.toFixed(20));

//6,349  6,350  499 500 349 350  349999 350000  

// 2,1,0 
function randomInteger(min, max){
    let num = min +  Math.random() * (max - min +1);   // 0 - 0.88 // 8.8  (max + 0.5) - (min - 0.5) 
    return Math.floor(num);
}

let num = randomInteger(1,3);

console.log(num);

// 0.5 - 1.499999 -> 1  
//1.5 - 2.499999 -> 2
//2.5 - 3.49999 -> 3


const person = {
    name: 'Vasya',
    age: 30,
    isMarried: true,
    say: function(){
        console.log('hello!');
    }
}

person.say();

