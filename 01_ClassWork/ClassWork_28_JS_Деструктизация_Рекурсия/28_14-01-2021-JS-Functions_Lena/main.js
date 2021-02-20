function calc(a = 4,b = 2){
    return a * b;
}

/* function showMessage (from, text){
    if(text === undefined){
        text = 'text not added';
    }
    console.log(`${from}: ${text}`);
} */

function showMessage (from, text = 'empty text'){
    console.log(`${from}: ${text}`);
}


showMessage('vasya');

/* //console.log(calc());

const arrayName = ['Vasya', 'Pupkin', 'Driver'];
//let [firstName, lastName] = arrayName;
let [firstName, , profession] = arrayName;

//firstName = firstName.toUpperCase();

console.log(profession); */

const user = {
    name: 'Vanya',
    age: 30
}

for(let[key, value] of Object.entries(user)){
    console.log(`${key} =  ${value}`);
}

let [red, black, ...colors] = ['red', 'back', 'green', 'yellow', 'white'];
console.log(red);
console.log(black);
console.log(colors);

let [firstName = 'guest', lastName = 'anonymous'] = ['Vasya'];
console.log(firstName, lastName);

const object = {
    title: 'box',
    color: 'black',
    material: 'wood',
    size:{
        width: 200,
        height: 200,
        length: 200
    }

};

//const{color: boxColor, material, title} = object;
let material, size;
({material, size} = object);

const{width, height, length} = object.size;


console.log(object.size);
console.log(size);
console.log(length, width, height);


/* const options = {
    title: 'Menu',
};

//let{width = prompt('width?'), title = prompt('title?')} = options;

let{width = 1000, title = 'empty'} = options;
console.log(title);
console.log(width);

console.log(options); */

const complexObject = {
    size:{
        width: 100,
        height: 200
    },
    items: ['Apple', 'Orange'],
    fill: true
}

const{
    size: {width, height},
    items: [f1, f2],
    fill
} = complexObject;


complexObject.items.push('Cherry');
console.log(complexObject.items);
//f1 = 'Cherry';
console.log(f1, width, f2, height, fill);

const str = 'Apple';  //10
    //str = 'Orange'; //15

let str1 = 'Vasya';  
    str1 = 'Kolya';
 
//Recursion

//5! = 5*4*3*2*1  -> 4!*5
//4! = 4*3*2*1    -> 3!*4
//3! = 3*2*1      -> 2!*3
//2! = 2*1        -> 1!*2
//1! = 0*1        -> 0!*1
//0! = 1         

function recursiveFactorial(n){
    if(n==0){
        return 1;
    }else{
        return recursiveFactorial(n-1) * n;    // 1 вызов -> recursiveFactorial(3) * 4 -> 6 * 4
    }                                         // 2 вызов -> recursiveFactorial(2) * 3 -> 2 * 3
}                                             // 3 вызов -> recursiveFactorial(1) * 2  -> 1 * 2
                                              // 4 вызов -> recursiveFactorial(0) * 1  -> 1 * 1
console.log(recursiveFactorial(5));           // 5 вызов 


//Task01
/*  n = 10;
   function recursionOutput(10) -> 12345678910;
 */

//Task02
/* 
'шалаш' 'abba' 'наган' 'а роза упала на лапу Азора'
    function checkPalindrom('nagan') -> true;

 */

 //Task03
 /* 
 const users = [
    {firstName: 'Vasya', lastName: 'Ivanov', id: 1},
    {firstName: 'Anna',  lastName: '', id: 2},
    {firstName: 'Masha', lastName: '', id: 3},   
    {firstName: 'Misha', lastName: '', id: 4}
];

changedUser = [
    {fullName: 'Vasya Ivanov', id: 1},
    {fullName: 'Anna ', id: 2},
    {fullName: 'Masha', id: 3},   
    {fullName: 'Misha', id: 4}
]
  */

 //Task04
 /* 
 const users = [
    {name: 'Vasya', age: 25},
    {name: 'Anna', age: 24},
    {name: 'Masha', age: 18},   // firstName
    {name: 'Misha', age: 19}
];
Написать метод для подсчета среднего возраста юзеров

  */ 

//Task05 *
/* Нужно реализовать метод addMethods. Он получает на вход имя операции (в нашем случае это символ) 
    и логику(в виде функции) и сохраняет в methods. Реализовать функцию calculate. Она получает на вход строку 
     вида: '2+1' и по символу операции вызывает соотвествующую функцию и считает результат.
const calculator = {
    methods:{
        "+": (a,b)=> a+b;
    }
    calculate: function(str)

    addMethods: function(name, func){}
}
'1+2' -> str
*/  