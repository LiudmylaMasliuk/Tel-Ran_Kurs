// // // Task03 
// // //const numbers = [2,3,4,5,6];
// // //function reversArray(numbers) -> [6,5,4,3,2]

// const array = [2,3,4,5,6];
// function reverse(something){
//   let temp = [];
//   for(i = 1; i < something.length + 1; i++){
//     temp.push(something[something.length - i]); 
//   }
//   return temp;
// }
// alert(reverse(array));

//Solution:
const array = [1,2,3,4,5];
// [1][2][3][4][5][6]  [6][5][4][3][2][1]

// function reverseArray(array){
//   for(let i = 0; i < array.length/2; i++){
//     const temp = [];
//     array[i] = array[array.length - 1 - i]; // array.shift = array[array.length - 1 - i];
//     array[array.length - 1 - i] = temp;
//   }
// }
// alert(reverseArray(array));


