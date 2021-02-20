// //Task02 
// // const numbers = [2,3,4,5,6];
// // function sumNumbers(numbers) -> 20;

const num = [2,3,4,5,6];
function sumNumbers(smth){
  let sum = 0;
  for(i = 0; i < smth.length; i++){ // for(number of num){   // for (number in num){
    sum += smth[i];                 // sum += number;       // sum += num[number];
  }                                 // }                    // }
  return sum;
}
alert(sumNumbers(num));


