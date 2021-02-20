//Task01 
//Найдите и выведите на экран сумму четных чисел от 2 до n. (n - число, получаемое от пользователя)

// let sum = 0;
// let n = +prompt('Enter a number');
// for(i = 2; i < n; i++){ //i <= n (n inclusive)
//   if (i % 2 == 1)continue;
//   sum += i;
// }
// alert(sum);

//Task02 
// Найдите и выведите на экран сумму нечетных чисел от 1 до n. (n - число, получаемое от пользователя)

// let sum = 0;
// let n = +prompt('Enter a number');
// for(i = 1; i < n; i++){ //i <= n (n inclusive)
//   if (i % 2 == 0)continue;
//   sum += i;
// }
// alert(sum);

//Task03
//С помощью цикла сформируйте строку n...987654321, где n - число получаемое от пользователя. Сохраните ее в переменную str, выведите значение этой переменной на экран.

// let n = +prompt('Введите число');
// let str = 'Ваши числа: ';
// for(i = n; i > 0; i--){
//   str += String(i);
// }
// alert(str);

// num = 10;
// let str = '';
// for (i = num; i > 0; i--){
//   str += i ' ';
// }
// console.log(str);

// num = 10;
// let str = '';
// while (num > 0){
//   str += num;
//   num--;
// }
// console.log(str);


//Task 04
//Выведете на экран числа кратные 3 в диапазоне от 0 до n (n - число, получаемое от пользователя)

// let n = +prompt('Введите число');
// let str = 'Числа кратные трём: ';
// for(i = n; i > 0; i--){
//   if(i % 3 != 0)continue;
//   str += String(i) + ' ';
// }
// alert(str);

// num = 12;
// for(let i = 0; i <= num; i++){
//   if(i % 3 == 0)continue;
//   console.log(i);
// }

//Task 05
//Пользователь должен ввести любое трех-, четырех-, пяти- ... значное число. Задача - вывести на экран по очереди все разряды введенного числа.
//Например: при введном числе 521 на экране должно последовательно появиться сообщения, сначала 5, потом 2 и потом 1

// let number = prompt(String('Введите число'));
// let pos = 0;
// while(number[pos] !== undefined){
//   alert(number[pos++]);
// }

// num = 521;
// while(num > 0){
//   number = num % 10;
//   console.log (number);
//   num = parseInt (num/10);
// }


//Task 06
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Например для n = 10 результат должен быть 2,3,5,7. (Можно использовать alert, в этом случае будет четыре сообщения или console.log, тогда результат будет выводится в столбик (те вывод не должен быть буквальным 2,3,5,7))
//Натуральное число, большее 1, называется простым, если оно делится на себя и на 1. (То есть таки числа как 2, 3, 5, 7, 11, 13 и тд)

// let n = +prompt('Введите число');

// outer:
// for(i = 2; i < n; i++){
//   for(j = 2; j < i; j++){
//     if(i % j === 0)continue outer;
//   }
//   alert(i);
// }

// num = 11;

// for(let i = 2; i <= num; i++){
//   isPrime = 'apple';
//   for (let j=2; j < i; j++){
//     if(i % j == 0){
//       isPrime = 'melone';
//       break;
//     }
//   }
//   if(isPrime == 'apple') console.log(i);
// }




//Task 07
//Напишите калькулятор, который умеет складывать, вычитать, умножать и делить. Вам нужно будет запросить у пользователя два числа (при этом добиться именно чисел) и символ операции (в качестве символа принимаются только + - / * )
//Выпольнить соотвесвующую операцию и вернуть результат. Если для деления пользователь передаст 0 - вывести сообщение, что на 0 делить нельзя и запрашивать новое число, пока не будет введен корректный делитель.

// let num1;
// let num2;
// let opSymb;
// let result;

// calc:
// while(true){

//     num1 = prompt('Введите первое число. Выход > cancel.');
//       while(isNaN(num1) || num1 === ''){
//         num1 = prompt('Ошибка ввода. Введите первое число. Выход > cancel.');
//       }
//       if(num1 === null)break calc;
//       num1 = Number(num1); // Перевожу в число только так, так как с +prompt нельзя выйти с cancel (так как null > number).

//     opSymb = prompt('Введите символ операции (+ - / *)');
//       while(opSymb === ''){
//         opSymb = prompt('Ошибка ввода. Введите символ операции (+ - / *). Выход > cancel.');
//       }
//       while(opSymb !== '+' && opSymb !== '-' && opSymb !== '*' && opSymb !== '/' && opSymb){
//         opSymb = prompt('Ошибка ввода. Введите символ операции (+ - / *). Выход > cancel.');
//       }
//       if(opSymb === null)break calc; // Пришлось здесь дописать выход, так как только через switch не работает.

//     num2 = prompt('Введите второе число');
//       while(isNaN(num2) || num2 === ''){
//         num2 = prompt('Ошибка ввода. Введите второе число. Выход > cancel.');
//       }
//       num2 = Number(num2);
//       while(num2 === 0 && opSymb === '/'){
//         num2 = prompt('На 0 делить нельзя. Введите второе число. Выход > cancel.');
//         if(num2 === null)break calc;
//         while(isNaN(num2) || num2 === ''){
//           num2 = prompt('Ошибка ввода. Введите второе число. Выход > cancel.');
//         }
//         num2 = Number(num2);
//       }

//       switch(opSymb){
//         case 'null': 
//         break calc; // только так не работает:(
//         case '+':
//           result = num1 + num2;
//         break;
//         case '-':
//           result = num1 - num2;
//         break;
//         case '*':
//           result = num1 * num2;
//         break;
//         case '/':
//           result = num1 / num2;
//             break;
//           }
// alert(result);
// }


let firstNum, secondNum, operation;
let repeat = true;
let agree;

while(repeat){
  while(isNaN(firstNum)){
    firstNum = +prompt('Enter the first number');
  }
  
  do{
    secondNum = +prompt('Enter the second number');
  }while(isNaN(secondNum))
  
  operation = prompt('Select operation: + - * /');
  
  switch(operation){
    case '+':
      alert(`${firstNum}${operation}${secondNum} = ${firstNum + secondNum}`);
      repeat = false;
      break;
    case '-':
      alert(`${firstNum}${operation}${secondNum} = ${firstNum - secondNum}`);
      repeat = false;
      break;
    case '+':
      alert(`${firstNum}${operation}${secondNum} = ${firstNum * secondNum}`);
      repeat = false;
      break;
    case '/':
        if(secondNum === 0){
          agree = prompt('Error. You cannot desvide by zero. Would you like to enter another divider? Type "y" if yes');
          if(agree != "y"){
            repeat = false;
            break;
          }else{
            // secondNum = 'two';
            break;
          }
        }else{
      alert(`${firstNum}${operation}${secondNum} = ${firstNum / secondNum}`);
      repeat = false;
      break;
        }
    default :
      agree = prompt('Error. Wrong operator. Would you like to enter another operator? Type "y" if yes');
      if(agree != "y"){
        repeat = false;
        break;
      }
  }
}









// Деление до целого остатка. Как работает оператор '%'.

// let a = +prompt('Введите число, которое делим. ');
// let b = +prompt('Введите число, на которое делим. Кроме нуля.');
// let c = a / b;
// let d;

// if (b < 0){
//   d = a - (b * Math.ceil(c)); // округляет до большего
//   alert('Остаток = ' + d);
// } else if (b == 0){
//   alert('На ноль делить нельзя. Попробуйте ещё раз!');
// } else{
//   d = a - (b * Math.floor(c)); // округляет до меньшего
//   alert('Остаток = ' + d);
// }



///////////// Corrections//////////////

//Task01

// let num = 10;
// let sum = 0;
// while(num > 0){
//   if(num % 2 == 0){
//     sum += num;
//   }
//   num--
// }
// console.log(sum);

//Task02 

// sum = 10;
// sum = 0;
// while(num > 0){
//   sum = (num %2 != 0) ? sum+= num : sum;
//   num--;
// }
// consile.log(sum);


// sum = 10;
// sum = 0;
// for(let i=1; i<=num; i++){
//   if(num % 2 == 0)continue;
//     sum+= i;
// }
// alert(sum);

//Task03
// num = 10;
// let str = '';
// while (num > 0){
//   str += num;
//   num--;
// }
// console.log(str);

    
    








