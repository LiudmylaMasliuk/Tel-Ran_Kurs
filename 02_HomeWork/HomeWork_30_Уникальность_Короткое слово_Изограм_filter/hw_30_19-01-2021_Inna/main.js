//Task01
//'hjfkds hfjd jdk shdjkg hsjshjssks shjks'
//function findShorts('hjfkds hfjd jdk shdjkg hsjshjssks shjks') -> 3 (вернуть длину самого короткого слова)

const string = 'The cat catches a mouse';

function findShort(str){
  let array = str.split(' ').map(item => item.length);
  let shortNum = array[0];
  
  array.forEach((index) => {
    if(array[index] < shortNum)
      shortNum  = array[index];
  }) 
  return shortNum;
}

console.log(findShort(string)); // --> 1


//////////////// Solution from Lena ////////////

// function findShortest (str){
//   const strings = str.split('');
//   let minLength = strings[0];
//   for (i = 0; i < strings.length; i++){
//     if(strings[i].length < minLength)
//     minLength = strings[i].length;
//   }
//   return minLength;
// }
// console.log(findShortest(string)); // --> 1

////////
function findShorts(str){
  return Math.min(...str.split(' ').map(str => str.length));
}
console.log(findShorts('The cat catches a mouse')); // --> 1
////////
const findShortsLength = (str) => str
      .split(' ')
      .sort((a,b) => b.length - a.length)
      .pop()
      .length;

console.log(findShortsLength('The cat catches a mouse'));
///////
function findShortestWord(str){
  const words = str.split('');
  return words.reduce((minWord,currentWord) => currentWord.length < minWord.length ? currentWord : minWord).length;
}
console.log(findShortestWord('The cat catches a mouse'));



//Task02
//function isIsogram('abcd') -> true;
//function isIsogram('abbcd') -> false;
//function isIsogram('abcdA') -> false;

function isIsogram(str){
    let array = str.toLowerCase().split('');
    let checked = true;
    let letter = array[0];
    for(i = 0; i < array.length; i++){
      if(letter == array[i+1])
      checked = false;
    }
    return checked;
  }
  
  console.log(isIsogram('abacd')); // -> false
  console.log(isIsogram('abcd')); // -> true
  console.log(isIsogram('abbfA')); // -> false


//////////////// Solution from Lena ////////////
function checkIsogram(str){
  let count = {};                   // {a:1, b:1}
  const strings = str.toLowerCase().split('');
  for(l of strings){
    count[l] ? count[l]++ : count[l] = 1;
    if(count[l] > 1) return false;
  }
  return true;
}
console.log(checkIsogram('abacd')); // --> false
console.log(checkIsogram('abd')); // --> true
console.log(checkIsogram('abdb')); // --> false
console.log(checkIsogram('abdB')); // --> false

////
function getIsogram(str){
  let i = 0;
  const string = str.toLowerCase().split('').sort();
  while(string[i] !== string[i+1] && i < string.length-1) i++;
  return i == string.length-1 ? true : false;
}
//// every delaet proverku i vozvrawaet true ili false
const Isogram = (string) =>{
  return string.toLowerCase().split('').every((letter,index) => string.indexOf(letter) === index);
}

//Task03
/* на вход метод получает массив чисел или строку.
    метод должен вернуть массив не повторяющихся элементов идущих по порядку. 
    напрмер:
    function uniqueElementInOrder('aaabbbcddaa') -> ['a','b','c','d','a'];
    function uniqueElementInOrder([1,2,2,3,3,4,5,5]) -> [1,2,3,4,5];
    unction uniqueElementInOrder([1,2,2,3,3,4,5,5,2,2]) -> [1,2,3,4,5,2];
    (filter использовать необязательно, но есть решение этой задачи, в которм применяется filter)
 */

/// sravnivaem so sledujuwim elementom
function uniqueElementInOrder(input){
    if (typeof input === 'string'){
        input.split('');
    }
    let temp = [];
    for(i = 0; i < input.length; i++){
        if(input[i] !== input[i+1])
        temp.push(input[i]);
    }
     return temp;
}

console.log(uniqueElementInOrder('aaabbbcddaa')); // --> ['a','b','c','d','a']
console.log(uniqueElementInOrder([1,2,2,3,3,4,5,5])); // --> [1,2,3,4,5]
console.log(uniqueElementInOrder([1,2,2,3,3,4,5,5,2,2])); // --> [ 1, 2, 3, 4, 5, 2 ]


//////////// Solution from Lena ////////////
/// sravnivaem s poslednim elementom v novom massive
function uniqueInOrder(input){
  if(typeof input == 'string') input = input.split('');
  let res = [input[0]];
  for(item of input){
    if(item == res[res.length-1]) continue;
    res.push(item);
  }
  return res;
}

/// filter

const uniqueOrder = function(input){
  return [...input].filter((item,index) => item !== input[index+1]);
}

console.log(uniqueOrder('aaabbbcddaa')); // --> [ 'a', 'b', 'c', 'd', 'a' ]
console.log(uniqueOrder([1,2,2,3,3,4,5,5])); // --> [ 1, 2, 3, 4, 5 ]

// const array = [1,2,2,3,3,4,5,5];
// console.log([...array]); // --> [1,2,2,3,3,4,5,5]
// console.log([...'aaab']); // --> [ 'a', 'a', 'a', 'b' ]


//////  filter /// indexOf (proverjaet pervoe vhozhdenie) 
const array = [1,2,2,3,3,4,5,5];

function uniqueElem(item,index,array){
  return array.indexOf(item) == index;
}
const unique = array.filter(uniqueElem);


// const unique = array.filter((item,index,array) => array.indexOf(item) == index);
