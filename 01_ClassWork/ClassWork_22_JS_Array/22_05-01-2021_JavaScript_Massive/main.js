// let arr = new Array();

//           [0]          [1]           [2]      [3] [4] [5]   // arr.length = 6 
// let arr = ['plum.png', 'orange.png', 'apple.bmp', 1, {}, []]; // elements in massive

// console.log(arr[1]);
// console.log(arr.length);

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// arr[arr.length] = 'banana.jpg'; // add an element into massive
// console.log(arr, arr.length);

// arr.length = arr.length - 1; // delete the last element 
// console.log(arr);

// arr[0] = 'banana.jpg'; // replace 'plum.png' by 'banana.jpg'


//  [0] [1] [2] [3] [4] [] // add an element to the first position

// for(let i = arr.length; i > 0; i--){
//   arr[i] = arr[i - 1];
// }
// arr[0] = 'banana.jpg';


// for(let i = 0; i > arr.length; i++){ //delete an element to the first position
//   arr[i] = arr[i + 1];
// }
// // arr.length = arr.length - 1;
// console.log(arr);


// arr.push('banana.jpg'); // add an element to the end of the massive

// let ban = arr.pop(); // let banana = the last of the massive
// console.log(ban);

// arr.unshift('banana.jpg', 'melone');
// console.log(arr);

// let melone = arr.shift(); // let melone = the first of the massive
// console.log(melone);



// let numbers = [1,2,3,4,5];

// for (let i = 0; i < numbers.length; i++){
//   console.log(numbers[i] * 2);
// }

// for(let number of numbers){
//   console.log(number + 5);
// }

 let res = '';

 for(let i = 1; i <=10; i++){
   for(let j = 1; j<=10; j++){
     res += (j * i + '\t')   // 1 2 3 4 5 6 7 8 9 10
   }
   console.log(res);
   res = '';
 }

 let tablePifagor = [  [], [], [], [], [], [], [], [] ]

 document.write('<h1 style="text-align:center;">Multiplication table</h1>');
 document.write('<table border = "1", cellspacing = "0", cellpadding = "5", align = "center">');
 for(let i = 1; i <= 5; i++){
   document.write('<tr>');
   for(let j = 1; j < 5; j++){
     document.write('<td width="100px">Hello</td>');
   }
   document.write('</tr>');
 }
 document.write('</table>');


 




