
// Task01
//function powerNumber(3,2) -> 9
//function powerNumber(5,3) -> 125


//Solution:
function powerNumber(x,y){
    let result = 1; // stavim 1, 4tobi result ne bil "undefined", a resultat ne nil bi NaN
    for(let i = 0; i < y; i++);{
      result *= x;
    }  
    return result;
  }
  let number = +prompt('Enter a number.');
  let power = +prompt('Enter a power.');
  alert(powerNumber(number,power));




// const powerNumber = (x,y) => `The number ${x} raised to the power of ${y} equals ${x ** y}.`;

// // function powerNumber(x,y){
// //   return`The number ${x} raised to the power of ${y} equals ${x ** y}.`;
// // }

// let number = +prompt('Enter a number.');
// let power = +prompt('Enter a power.');
// alert(powerNumber(number,power));


