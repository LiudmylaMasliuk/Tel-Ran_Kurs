
/////////////// А Л Г О Р И Т М Ы ///////////////

// любая функция - это алгоритм
// bigO



////////////////////////////////////////////
////// алгоритм пузырьковой сортировки ////
///////////////////////////////////////////

// [4][8][1][5][9][10][2];
// --> мы находи самое большое число в массиве 
// и перегоняем его на последнее место

// function bubbleSort(array){
//   for(i = array.length-1; i > 0; i--){ // 6 -> 5 -> 4 -> 3 -> 2 -> 1 // 5 -> 4 -> 3 -> 2 -> 1 // 4 -> 3 -> 2 -> 1 //  3 -> 2 -> 1 // 2 -> 1 // 1
//     for(j = 0; j < i; j++){            // 0 -> 1 -> 2 -> 3 -> 4 -> 5 // 0 -> 1 -> 2 -> 3 -> 4 // 0 -> 1 -> 2 -> 3 // 0 -> 1 -> 2 // 0 -> 1
//       if(array[j] > array[j+1]){   // если предыдущий элемент больше последующего элемента
//         let temp = array[j];     // то мы кладём его в массив
//         array[j] = array[j+1];   // меняем его позицию на позицию дальше
//         array[j+1] = temp;       // и перезаписываем в массив
//       }
//     }
//     console.log(array);
//   }
// }

/*
[4,1,5,8,9,2,10]
[1,4,5,8,2,9,10]
[1,4,5,2,8,9,10]
[1,4,2,5,8,9,10]
[1,2,4,5,8,9,10]
[1,2,4,5,8,9,10] // в итоге у нас 6 итераций и последняя проворачивается в первом цикле с  i в холостую
*/


// 4tobi ne gonjat v pustuju
function bubbleSort(array){
  let swapped;
  do{
    swapped = false;
    console.log(array);
    arr.forEach((item, index) => { //[0]>[1]>[2]>[3]>[4]>[5] //[0]>[1]>[2]>[3]>[4]>[5] //[0]>[1]>[2]>[3]>[4]>[5] //[0]>[1]>[2]>[3]>[4]>[5] //[0]>[1]>[2]>[3]>[4]>[5] 
      if(item > array[index+1]){ // если предыдущий элемент больше последующего элемента
        // na poslednem kruge uslovie ne vipolnjaetsja i swapped ostaetsja false
        let temp = item; // то мы кладём его в массив
        array[index] = array[index+1]; // меняем его позицию на позицию дальше
        array[index+1] = temp; // и перезаписываем в массив
        swapped = true;
      }
    });
  }while(swapped); // poka swapped true, to prodolzhaem perebirat
                  // esli swapped false to zakon4itsja cikl
}

const arr = [4,8,1,5,9,10,2];
bubbleSort(arr);
console.log(arr);

/*
[4,1,5,8,9,2,10]
[1,4,5,8,2,9,10]
[1,4,5,2,8,9,10]
[1,4,2,5,8,9,10]
[1,2,4,5,8,9,10] // последний круг (1 не больше 2 -> swapped = false и мы выходим)
*/

// Отличие этого варианта метода в том, что здесь один цикл. На последнем круге не выполняется условия цикла и 1 не проваливается дальше.


////////////////////////////////////////////
////// алгоритм бинарного поиска //////////
///////////////////////////////////////////
// как найти 9 в отсортированном массиве?

const array = [1,2,4,5,8,9,10];
function binarySearch(array,number){
  let low = 0;
  let high = array.length -1;
  while(low <= high){ 
    let mid = Math.floor((low + high)/2); // delim do teh por poka est mesto mezhdu low i high
    if(array[mid] == number) return mid;
    else if(array[mid] > number){ // если число больше серединного 
      high = mid -1; // то сдвигаем границу от начала до середины (не включая серединный элемент, так как мы на него уже проверили) и ищем в левой части 
    }else{          // иначе
      low = mid +1; // сдвигаем границу от середины до конца и ищем в правой части
    }
  }
  return -1; 
}

console.log(binarySearch(array,9));


///////// 

const arr1 = [1,2,4,5,8,9,10];
let iteration = 0;

function binarySearch(array,number){
  let low = 0;
  let high = array.length -1;
  while(low <= high){ 
    let mid = Math.floor((low + high)/2);
    if(array[mid] === number){
      iteration++;
      return mid;
    }else if(array[mid] > number){
      iteration++;
      high = mid -1;
    }else{
      iteration++;
      low = mid +1;
    }
  }
  return -1;
}
console.log(binarySearch(arr1,9));
console.log(iteration);






///////////////////////////////////////////////////////

//Task01
//summa 4isel 4isla
// function sumDigitalNumber(1234567);
// pri pomowi rekursii pos4itat summu vseh 4isel -> 28 -> 10 -> 1
// 3 + 9 --> 12
// 1 + 2 --> 3
// poka summa ne stanet odnozna4nim 4islom

const numbers = [1,2,3,4,5,6,7];

function sumDigitalNumber(input){
  let array = [];
  let sum = 0;
  if(!isNaN(input)){              // if input is a number
    array = [...String(input)];   // --> [ '2', '8' ]
    console.log(array);
    if(array.length == 1){
      return input;               // --> 1
    } sum = array.reduce((a, b) => Number(a) + Number(b), 0);
      return sumDigitalNumber(sum);
  } 

  sum = input.reduce((a, b) => Number(a) + Number(b), 0);
  return sumDigitalNumber(sum);
}
console.log(sumDigitalNumber(numbers));            

// Entry 1  : [1,2,3,4,5,6,7];
// Entry 2  : 28  -->  [ '2', '8' ]
// Entry 3  : 10  -->  [ '1', '0' ]
// Entry 4  : 1   -->  [ '1' ]      --> 1






//Task02
// function getDivisors(12) -> [2,3,4,6];
// function getDivisors(15) -> [3,5];
// function getDivisors(13) -> '13 is prime';
// vse deliteli ot 1 do nego samogo


function getDividers(num){
  let temp = [];
  let checker = false;
  for(let i = 2; i < num; i++){
      if(num % i === 0){
        temp.push(i);
        checker = true;
      } continue;    
  }
  if(checker){
    return temp;
  }
  return `${num} is prime`; 
}

console.log(getDividers(15));


//Task03
// metod, kotorij polu4aet massiv imen ['Kolya','Mark','Anna','Misha','123']
// a na vihod otdaet --> ['Mark','Anna'] --> dlina imeni v 4 simvola
// function getArrayNames(['Kolya','Mark','Anna','Misha','123'])

const names = ['Kolya','Mark','Anna','Misha','123'];
function getArrayNames(array){
  let temp = [];
  for (item of array){
    if (item.length == 4)
    temp.push(item);
  }
  return temp;
}

console.log(getArrayNames(names));


