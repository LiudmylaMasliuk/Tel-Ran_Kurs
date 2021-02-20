// Task01 
/* 
const users = [
    {name: 'Vasya', age: 25},
    {name: 'Anna', age: 24},
    {name: 'Masha', age: 18}   // firstName
];
 Отсортировать массив users по возрасту
 */

const users = [
  {name: 'Vasya', age: 25},
  {name: 'Anna', age: 24},
  {name: 'Masha', age: 18},
];

// function sortPrinciple(a,b){
//   return a['age'] - b['age'];
// }
// console.log(users.sort(sortPrinciple));

console.log(users.sort((a,b) => a['age'] - b['age']));

//Solution from Lena:
function compareUsers(user1, user2){ // comparison method is called 'comparator'
  return user1.age - user2.age;
}

function universalComparator(key){
  return (a,b) => a[key] - b[key] ? 1 : - 1;
}
console.log(users.sort(universalComparator('name')));

console.log(users.sort(compareUsers));
console.log(users.sort((user1,user2) => user1.age - user2.age));
console.log(users.sort((user1,user2) => user1.name > user2.name ? 1 : - 1));

// Local compare
//Если немецкие, арабские, французские слова и так далее.
users.sort((user1, user2) => user1.name.localCompare(user2.name));

let arr = [
  {land: "Zealand"}, 
  {land: "Östereich"}, 
  {land: "USA"},
  ];
  console.log(arr.sort());
  let arrNew = arr.sort((a,b) => a.land.localeCompare(b.land));
  console.log(arrNew);






//////////////////////////////////////////////////////////////////////////////////
/* Just for testing.
console.log(users[0]['name']);
console.log(users[0]['age']);
console.log(users[0 + 1]['age']); */
//////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////

/*  Task02
 [1,5,8,2,4,6,9,3] ---> [3,4,5,6] */

const numbers = [1,5,8,2,4,6,9,3];

function compare(a,b){
  return a - b;
}
console.log(numbers.sort(compare).filter(item => item > 2 && item < 7));
console.log(numbers.sort(compare).slice(2,6));


/////// Solution from Lena //////////
const nums = [1,5,8,2,4,6,9,3];
// function filterRange(arr, min, max){
//   return arr.filter(item => item >= min && item <= max);
// }
// const newNums = filterRange(nums, 3,6); 
// newNums.sort((a,b) => a - b);
//console.log(newNums); // --> [ 3, 4, 5, 6 ]

////////////////////////////////////
/////// Sna4ala otsortiruem ///////
////////////////////////////////////
const nums2 = [1,5,8,2,4,6,9,3];

nums2.sort((a,b) => a - b); // --> [ 1, 2, 3, 4, 5, 6, 8, 9]

function filterRangeSortArray(arr, min, max){
  let newArr = [];
  for(num of arr){
    if(num > max) break;
    if(num >= min) newArr.push(num);
  }
  return newArr;
}
console.log(filterRangeSortArray(nums2, 3,6)); // --> [ 3, 4, 5, 6 ]


////////// perepisivaem starij massiv
// virezaem vse, 4to snaruzhi
nums2.sort((a,b) => a - b); // --> [ 1, 2, 3, 4, 5, 6, 8, 9]

function filterVutRangeArray(arr, min, max){
  for(i = 0; i < arr.length; i++){            
    if(arr[i] <= min || arr[i] >= max){
      arr.splice(i,1);
      i--; // otkativaem obratno
    }
  }
}
filterRangeSortArray(nums2,3,6);

// 4to delaet splice vnutri cicla:
// on virezaet 4islo s indeksom
// i peredvigaet massiv
// esli mi ne otkatim iteraciju na odin wag nazad (i--),
// to on propustit 2, tak kak 2 uzhe budet stojat na index = 0,
// a sled iteracija budet uzhe s 1
// poetomu delaem otkat (i--)
// i vot 4to budet:
//
// [ 1,  2,  3,  4,  5,  6,  7, 8, 9 ]
//  [0] [1] [2] [3] [4] [5] [6] [7] [8]
// [ 2,  3,  4,  5,  6,  7,  8,  9 ]
//  [0] [1] [2] [3] [4] [5] [6] [7]
// [ 3,  4,  5,  6,  7,  8,  9 ]
//  [0] [1] [2] [3] [4] [5] [6]
// [ 3,  4,  5,  6,  8,  9 ]
//  [0] [1] [2] [3] [4] [5]
// [ 3,  4,  5,  6,  9 ]
//  [0] [1] [2] [3] [4]
// [ 3,  4,  5,  6 ]
//  [0] [1] [2] [3]     




//////////////////////////////////////////////////////////////////////////////////


/* Task03
отсортировать в порядке убывания [ 7,3,2,9,10 ] -> [10,9,7,3,2] */

const arrayWithNumbers = [7,3,2,9,10];

function compareNumbers(a,b){
  return a - b;
}
console.log(arrayWithNumbers.sort(compareNumbers).reverse());


const arrayWithNumber = [7,3,2,9,10];
function compareNumbersReversed(a,b){
  return -a - b;
}

console.log(arrayWithNumber.sort(compareNumbersReversed));

console.log(arrayWithNumbers.sort((a,b) => b > a ? 1 : -1));

