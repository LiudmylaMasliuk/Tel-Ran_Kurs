function sumInput(){
  let numbers = [];
  let sum = 0;

  while(true){
    const value = prompt('Enter a number, please.');
    if(value === '' || value === null || isNaN(value) || value === ' ') break; 
    numbers.push(+value); 
  }
  for(number of numbers){
    sum += number;
  }
  if(number.length == 0){ // proverjaem, ne priwel li pustoj massiv
    return; // pustoj return vozvrawaet undefined
  }
  return sum;
}


function sumInput1(){
  let numbers = [];
  let sum = 0;

  while(true){
    const value = prompt('Enter a number, please.');
    if(value === '' || value === null || isNaN(value) || value === ' '){
      break;
    } 
    numbers.push(+value);
  }
  return sum(numbers);
}

function sumInput2(changeInput){
  let numbers = [];
  let sum = 0;

  while(true){
    const value = prompt('Enter a number, please.');
    if(value === '' || value === null || isNaN(value) || value === ' '){
      break;
    } 
    numbers.push(+value);
  }
  return changeInput(numbers);
}


function sum(array){
  if(number.length == 0){
    return;
  }
  let sum = 0;
  for(number of array){
    sum += number;
  }
  return sum;
}

function multiply(array){
  if(number.length == 0){
    return;
  }
  let sum = 0;
  for(number of array){
    sum *= number;
  }
  return sum;
}

function changeElementsInArray(array){
  let newArray = [];
  for(number of array){
    newArray.push(number *= 2);
  }
  return newArray
}

// alert(sumInput());
// alert(sumInput2(sum));
// alert(sumInput2(multiply));
// alert(sumInput2(changeElementsInArray));

/* alert(sumInput2(function(array){
  return `Your input is ${array.join(', ')}`
})); */

// alert(sumInput2((array) =>`Your input is ${array.join(', ')}`)); // to zhe samoe, tolko strelo4noj funkciej

// alert(sumInput2(array => array.map(item => item * 2)));

alert(sumInput2(array => array.filter(item => item % 2 == 0))); // v filtre mi peredaem uslovie // esli item vipolnjaet uslovie --> to filtr prinimaet ego v semju

alert(sumInput2(array => array.reduce((sum,item) => sum + item))); // reduce nakaplivaet elementi v sum (kuda?) sum += item // ZAPOMNIT !!! reduce - eto NAKOPITEL



let arr = [1,2,10,12,8,7];
/* arr.sort();
console.log(arr); // --> [ 1, 10, 12, 2, 7, 8 ] */

/* arr.sort(compare); // mi nau4ili sortirovku, kak nado sortirovat
function compare(a,b){
  if(a > b) return 1;
  if (b > a) return -1;
  if (a == b) return 0;
} */

function compare(a,b){
  return a - b;   // esli vernulos polozhitelnoe --> eto kak 1, esli otricatelnoe --> eto kak -1, esli 0 --> to kak 0
}

arr.sort(compare); // --> [ 1, 2, 7, 8, 10, 12 ]
arr.sort((a,b) => a - b);  // --> [ 1, 2, 7, 8, 10, 12 ]
console.log(arr);