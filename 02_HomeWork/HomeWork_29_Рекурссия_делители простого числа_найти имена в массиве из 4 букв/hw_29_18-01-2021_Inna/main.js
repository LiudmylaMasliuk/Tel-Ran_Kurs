
//Task01 
// function sumDigitalNumber(123456567);  -> 39 -> 12 -> 3 (recursion)

const numbers = [1,2,3,4,5,6,7];

function sumDigitalNumber(input){
  let array = [];
  if(!isNaN(input)){              // if input is a number
    array = [...String(input)];   // --> [ '2', '8' ]
    // console.log(array);
    if(array.length == 1){
      return input;               // --> 1
    } //sum = array.reduce((a, b) => Number(a) + Number(b), 0); // string --> number
      //return sumDigitalNumber(sum);
      return sumDigitalNumber(array.reduce((a, b) => Number(a) + Number(b), 0));
  } 

  return sumDigitalNumber(input.reduce((a, b) => Number(a) + Number(b), 0));
}
console.log(sumDigitalNumber(numbers));            

// Entry 1:     [1,2,3,4,5,6,7];
// Entry 2:     28  -->  [ '2', '8' ]
// Entry 3:     10  -->  [ '1', '0' ]
// Entry 4:     1   -->  [ '1' ]      --> 1


////////// S O L U T I O N from Lena //////////

function sumNumber(num){
  if(num/10 < 1){
    return num;
  }
  return sumNumber(Math.floor(num/10) + num%10);
}

console.log(sumNumber(1234567)); 

//////////////////////////////////////////////////

function sumNumber(num){
  return (num/10 < 1) ? num : sumNumber(Math.floor(num/10) + num%10);
}
console.log(sumNumber(1234567)); 

//////////////////////////////////////////////////

function sumNumber(num){
  return num < 10 ? num : sumNumber(num.toString().split('')
                          .reduce((sum,number) => sum + parseInt(number),0));
}

console.log(sumNumber(1234568)); 

//////////////////////////////////////////////////





// Task02
//function getDivisors(12) ->  [2,3,4,6];
//function getDivisors(15) ->  [3,5];
//function getDivisors(13) ->  '13 is prime';

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
  
console.log(getDividers(15)); // --> [ 3, 5 ]
console.log(getDividers(13)); // --> 13 is prime


////////// S O L U T I O N from Lena //////////

function getDivisors(number){
  let divisors = [];
  for(let i = 2; i < number; i++){
    if(number % i == 0){ // Math.isInteger(number/i)
      divisors.push(i);
    }
  }
  return (divisors.length == 0) ? `${number} is prime` : divisors;
}
console.log(getDivisors(13));


//Task03 
// function getArrayNames(['Kolya', 'Mark', 'Anna', 'Misha M', '123']) -> ['Mark', 'Anna']; 

const names = ['Kolya','Mark','Anna','Misha M','123'];
function getArrayNames(array){
  let temp = [];
  for (item of array){
    if (item.length == 4)
    temp.push(item);
  }
  return temp;
}

console.log(getArrayNames(names));


////////// S O L U T I O N from Lena //////////

function getNames(array){
  return array.filter(str => str.length == 4);
}
console.log(getNames(['Kolya','Mark','Anna','Misha M','123']))
