//=============================
// Variables
//=============================
//comment example
// var age;
// let message = "hello my friend";
// const PI = 3.14;
// const name = "Vasya";
// const MONDAY = "monday";
// message = "hello world!";


// alert (message);

// alert("Hello, world!");
// let myName = prompt("Enter your name");
// alert("Hello, " + myName)



// prompt("Enter your name");

// // Naming 
// //good
// let userAge;
// let message12;
// let $;
// let _;

// //bad
// let имя;
// let imya;
// let ff44;

// //vorbidden!!!
// let 3name;
// let g&name;
// let let;

//=============================
// Data Types _ Primitive
//=============================

/* ********* N U M B E R *********/
// let myAge = 48; //"48"
// let a = 12.56;
// console.log(0.3-0.1);
// //alert (1/0); //Infinite
// alert ("one"/2); // <-- NaN or not a number
// alert ("one" * (2+5)); // <-- NaN or not a number

/* ********* B I GInt *********/


/* ********* S T R I N G *********/
// let str1 = "Hello!";
// let str2 = 'Hello world!';
// //let str3 = `Hello, `;

// let strName = "Andy";
// alert(`Hello, ${strName}!`);
// alert (`sum 1 + 2 = ${1 + 2}`);


/* ********* B O O L E A N *********/
// let nameFieldChecked = true
// let isGreater = 4 > 1;
// alert(isGreater);

/* ********* N U L L *********/
// let age1 = null;
// let  ageUser = prompt("enter your age");
// alert(ageUser);

/* ********* U D E F I N E D *********/
// let dog;
// alert(dog);


//=============================
// Data Types _ Non-Primitive
//=============================

/* ********* O B J E C T ---- S Y M B O L *********/

// Different date types
// let x = 12;
// const month = 'januar';
// let isWeekend = true;
// let price = null;
// let cat;

// console.log(typeof x);
// console.log(typeof month);
// console.log(typeof isWeekend);
// console.log(typeof price);
// console.log(typeof cat);
// console.log(typeof alert);

/* ********* alert, prompt, confirm *********/

// alert(2+3);
// prompt("enter your name");

// let newName = prompt("enter your name", "kolya");

// let isBoss = confirm("Are you the boss?"); 

//==================================================================
// Operators
//==================================================================

// let a = 5;
// let b = 10;

// a + b;

// a = -a;

// + - / % ** binary operators

a = 5 % 3;
//alert (a * b);

let str4 = "hello, ";
let str5 = "world";
//alert (str4 + str5);
//alert (str4 - str5);
//alert(str4 + "my" + str5);
//alert(str4 + 6 + str5); 

//unary operators
let counter = 5;
//let c = counter++; // <-- vivedet 5
let c = ++counter; // <-- vivedet 6
//alert(c);

counter--;
//alert(counter);

// a += 2 //a = a + 2;
// a *= b //a = a * b;

//alert(2 * ++counter);




//========================================================
//Practice
//========================================================

// Age Validation
// let fullAge = 16;
// let currentYear = 2020;
// let birthYear = 2005;

// let isFullAge = currentYear - birthYear >= fullAge;
//let isFullAge = (currentYear - birthYear) * fullAge;

// 

let num1 = prompt("enter number, please"); // <-- saves as a string
let num2 = prompt("enter second number, please"); //<-- saves as a string

num1 = parseInt(num1) //<-- transfers to a number
num1 = parseInt(num1) //<-- transfers to a number

let result = num1 * num2;
alert("Multiplication is:" + result);

result = num1 + num2;

result = +num1 + +num2;//<-- "+ before num1 and num2 transfers it to a number

alert("Sum is:" + result);


















