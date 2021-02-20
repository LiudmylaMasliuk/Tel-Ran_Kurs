//Task01 
/* Запросить два числа, посчитать их сумму.
    если, полученная сумма меньше 10 - вывести сообщение: "сумма слишком маленькая"
    если сумма больше 10 - вывести сообщение: "сумма слишком большая"
    если сумма равна 10 - "бинго!"
    выполнить задание с использованием if и с использованием тернарного оператора (?)
*/

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
let sum = num1 + num2;
if(sum < 10){
    alert("сумма слишком маленькая");
}else if (sum > 10){
    alert("сумма слишком большая");
}else if (sum === 10){
    alert("бинго!");
}

let numOne = +prompt("Введите первое число");
let numTwo = +prompt("Введите второе число");
let theSum = numOne + numTwo;

let message = (theSum < 10) ? "сумма слишком маленькая" : 
              (theSum > 10) ? "сумма слишком большая" : 
              (theSum === 10) ? "бинго!" :
              "Попробуй ещё раз";
alert(message);


//Task02 
/* Запросить у пользователя логин.
    если логин равен "employee" , вывести сообщение: "Hi employee!"
    если логин - "boss", вывести сообщение: "Hello boss!"
    если логин пустой - "no login"
    во всех остальных случаях - "Hi user"
    выполнить задание с использованием if и с использованием switch
*/

const login1 = prompt("Enter your login");
if(login1 === "employee"){
    alert("Hi, employee!");
} else if (login1 === "boss"){
    alert("Hi, boss!");
} else if (login1 === null){
    alert("no login");
} else {
    alert("Hi, user!");
}

const login2 = prompt("Enter your login");
switch (login2){
    case "employee":
        alert("Hi, employee!");
        break;
    case "boss":
        alert("Hi, boss!");
        break;
    case null:
        alert("no login");
        break;
    default:
        alert("Hi, user!");
}



//Task03 
/* Напишите условие if для проверки, что переменная age находится 
   в диапазоне между 14 и 90 включительно.

   Напишите условие if для проверки, что переменная age НЕ находится 
   в диапазоне между 14 и 90 включительно. Напишите два варианта решения.
*/

const age1 = +prompt("Enter your age.");
if (age1 >= 14 && age1 <= 90) {
    alert("Go!");
} else{
    alert("No go!");
}

const age2 = +prompt("Enter your age.");
if (age2 <= 14 && age2 >= 90) {
    alert("Go!");
} else{
    alert("No go!");
}

const age3 = +prompt("Enter your age.");
if (age3 >= 14 && age3 <= 90) {
    alert("No go");
} else{
    alert("Go!");
}

