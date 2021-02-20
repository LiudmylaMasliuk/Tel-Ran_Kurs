//Task2
//5! --> 1*2*3*4*5      function factorial(5);
//6! --> 1*2*3*4*5*6    function factorial(6);
//7! --> 1*2*3*4*5*6*7  function factorial(7);


function getInput(){
  return +prompt('Enter a number.');
}
function getArray(input){
  const array = [];
  for(let i = input - 1; i >= 0; i--){
    array.push(input - i);
  }
  return array;
}
function getFactorial(array){
  let factorial = 1;
  for(elements of array){
    factorial *= elements;
  }
  return factorial;
}
function getRule(array){
  let temp = [];
  for(let i = 0; i < array.length; i++){
    temp.push(array[i]); 
    // temp.push('*');
  }
  // temp.pop();
  temp = temp.join(' * ');
  return temp;
}
function showMessage(input,rule,result){
  alert (`!${input} = ${rule}  = ${result}`);
}

const number = getInput();
const rule = getRule(getArray(number));
const result = getFactorial(getArray(number));
showMessage(number, rule, result);













