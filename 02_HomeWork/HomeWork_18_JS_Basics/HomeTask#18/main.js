//Task01 Make code correct

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
a = parseInt(a);
b = parseInt(b);
alert ("The sum is " + (a + b));

//alert ("The sum is " + (+a + +b)); // <-- another variant


//Task02 
// Спросить сколько стоит работа в час; 
// Сколько часов в день работает;
//Вывести зарплату за месяц (22 рабочих дня в месяце)

let price = prompt("Enter your price per hour, please.");
let hours = prompt("How many hours per day do you work?");
let salary = ((price * hours) * 22);
alert ("Your salary per month is " + +salary);



//Task03
//Спросисть радиус, распечатать площадь круга;

let radius = prompt("Enter your radius.");
const PI = 3.14;
let circleArea = (radius ** 2) * PI;
alert ("The area of the circle is " + +circleArea);

