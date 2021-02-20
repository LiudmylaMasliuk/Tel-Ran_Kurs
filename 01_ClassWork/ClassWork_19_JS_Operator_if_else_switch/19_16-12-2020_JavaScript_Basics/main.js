// =============== Types of conversion ===============
// ==== Number ===

// let str = "   123   ";
// alert (typeof str);

// str = Number(str);
// alert (typeof str);

//str = "one"; // <- string
//str = Number(str); //<- number



//str = false; 
//alert (+str); // <--- 0
//str = true; 
//alert (+str); // <--- 1

//str = null;
//str = Number(str);
//alert(str); //---> in this case null is number

//str = undefined;
//alert (+str); // ---> in this case null is NaN



//==== String ===

//let value = true;
//value = String(value); 
// alert(value); // true --> "true" (transfered to string)

// the same way // nul --> "null", undefined --> "undefined", 124 --> "124". 




//==== Boolean ===

// alert (Boolean(1)); // <--- true, as 1 = true
// alert (Boolean (0)); // <--- false, as 0 = false
// alert (Boolean(5)); // <--- true
// alert (Boolean(-5)); // <--- true
// alert (Boolean(null)); // <--- false
// alert (Boolean (undefined)); // <--- false
// alert (Boolean ("")); // <--- false
// alert (Boolean ("Hello")); // <--- true








// =============== Comparison operators ===============

// a > b, a < b
// a >=, a <= b
// a ==, a ===b
// !=   не равно


//alert (5 > 3); // <-- true
//alert (5 < 3); // <-- false

//alert (5 != 3); // <-- true

//let result = 5 > 4;
//alert (result);

//alert("a" > "q"); // <- false
//alert("q" > "a"); // <- true
// alert("cat" > "cad"); // <- true
// alert("cat" > "cats"); // <- false
//alert("cat" > "Cat"); // <- true
//alert("cat" < "Cat"); // <- false

//alert ("2" > 1); // <-- true, as "2" is converted to a number

// let num1 = 42;
// let num2 = "42";

//alert (num1 == num2); // <- true
//alert (num1 === num2); // <- false


// num1 = 0;
// num2 = +null; // <- null should be also converted to number
// str = "";
// alert(num1 == num2);

//  num1 = 0;
//  num2 = "0";
//  str = "";
// result = false;
// alert(num1 == result);

//  alert(num1 == num2); //<- true
//  alert(num1 === num2); //<- false
//  alert(null == undefined); //<- true
//  alert(null === undefined); //<- false

//  alert(null > 0); // <- false
//  alert(null == 0); // <- false
//  alert(null >= 0); // <- true



// =============== Conditional operators ===============


// ======= if else =======

let num1 = 42;
let num2 = "42";

num1 = +prompt ("Enter the first number");
num2 = +prompt ("Enter the second number");

if(num1 > num2){
   var max = num1;
}
if(num2 > num1){
  max = num2;
}

if(num1 > num2){
  var max = num1;
}else if(num1 == num2){
  alert("numbers are equal");
  max = num1;
}else{
  max = num2;
}

// var max = num1;
// if(num1 < num2){
//   max = num2;
// }
// alert("Max number is:" + max);

// if(0){
//   alert ("Hello");
// }

// if(1){
//   alert ("Hello");
// }

// if("a"){
//   alert ("Hello");
// }

let isFiledChecked = true;
// if(isFileChecked){
//   alert("Filed is checked");
// }



let accessAllowed;
let age = +prompt ("enter your age");
if (age > 18){
  accessAllowed = true;
}else{
  accessAllowed = false;
}
alert (accessAllowed);




// ======= Ternarnij operator (if else) ======= 

let accessAllowed;
let age = +prompt ("enter your age");
accessAllowed = (age > 18) ? true : false; // Ternarnij operator
//accessAllowed = (age > 18) ? "one" : "two";
alert (accessAllowed); 

// if(age <= 3){
//   alert("Hi, small one")
// } else if(age <= 25){
//   alert("Hi, old one");
// } else if(age <= 100){
//   alert("Hello madam or sir");
// } else{
//   alert ("Hello, lucky one!");
// }

let message = (age <= 3) ? "Hi, small one!" : 
              (age <= 25) ? "Hi, old one!" : 
              (age <= 100) ? "Hi, madam or sir!" : 
              "Hallo, lucky one!";
alert(message);



//======= Switch =======

// switch (x){
//   case "one":     // if (x === "one")
//     alert("one");

//   case "two":     // if (x === "two")
//     alert("two");

//   default:
//     alert("undefined");
// }



// let sumNumber = +prompt("2 + 2 = ?");
// switch (sumNumber){
//   case 3:
//     alert("too little");
//     break;
//   case 5:
//     alert("too much");
//     break;
//   case 4:
//     alert("Bingo!")
//     break;
//   default: 
//     alert("Try one more time");
// }



let firstName = prompt("enter your name");
switch (firstName){
  case "Lena":
    alert ("Hi, " + firstName);
    break;

  case "Vasya":
    alert ("Hi, " + firstName);
    break;
  
  case "Yulia":
    alert ("Hi, " + firstName);
    break;

  default:
    alert("I don`t know you");
}



let sumNumber = +prompt("2 + 2 = ?");
switch (sumNumber){
  case 3:
  case 2:
  case 5:
    alert("Wrong answer:( Try again");
    break;
  case 4:
    alert("Bingo!")
    break;
  default: 
    alert("Try again");
}


// ======= Logical operators ======= 

//      ||    ->    or 
//      &&    ->    and
//      !     ->    not


let hour = 9;
if (hour < 10 || hour > 18){
  alert("Shop is closed");
}
// false || false --> false
// false || true --> true
// true || false --> true
// true || true --> true


hour = 12;
minutes = 30;
if (hour === 12 && minutes === 30){
  alert("Time is 12:30");
}

// true && true --> true
// false && false --> false
// false && true --> false
// true && false --> false


alert(isFiledChecked);
alert(! isFiledChecked);



