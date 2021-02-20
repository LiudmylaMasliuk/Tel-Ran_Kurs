// Memory training game
const numbers = [];

function showResult(input,x){
  return (input == numbers[x]) ? 'You are right!' : 'You are wrong! The right number is ' + numbers[x];
}

for(let i = 0; i < 5; i++){
  let randomNumber = parseInt(Math.random() * 100);
  numbers.push(randomNumber);
}
alert('Memorize the numbers and their order: ' + numbers);

let userAnswer = +prompt('What is the first number?');
alert(showResult(userAnswer,0));


userAnswer = +prompt('What is the last number?');
alert(showResult(userAnswer,numbers.length-1));


let randomIndex = parseInt(Math.random() * numbers.length);

userAnswer = +prompt(`What was the number Nr. ${randomIndex + 1}?`);
alert(showResult(userAnswer,randomIndex));






// // Task01
// //function powerNumber(3,2) -> 9
// //function powerNumber(5,3) -> 125

const powerNumber = (x,y) => `The number ${x} raised to the power of ${y} equals ${x ** y}.`;

// function powerNumber(x,y){
//   return`The number ${x} raised to the power of ${y} equals ${x ** y}.`;
// }

let number = +prompt('Enter a number.');
let power = +prompt('Enter a power.');
alert(powerNumber(number,power));

// //Task02 
// // const numbers = [2,3,4,5,6];
// // function sumNumbers(numbers) -> 20;

const num = [2,3,4,5,6];
function sumNumbers(smth){
  let sum = 0;
  for(i = 0; i < smth.length; i++){
    sum += smth[i];
  }
  return sum;
}
alert(sumNumbers(num));

// // Task03 
// //const numbers = [2,3,4,5,6];
// //function reversArray(numbers) -> [6,5,4,3,2]

const array = [2,3,4,5,6];
function reverse(something){
  let temp = [];
  for(i = 1; i < something.length + 1; i++){
    temp.push(something[something.length - (1 * i)]); 
  }
  return temp;
}
alert(reverse(array));