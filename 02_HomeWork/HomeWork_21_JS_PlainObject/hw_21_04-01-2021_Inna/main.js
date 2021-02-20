let salaries = {
  John: 2000,
  Ann: 2100,
  Peter: 2100,
  Kate: 1900,
}

// calculate all salaries (sum) 
// let sum = salaries.John + salaries.Ann + salaries.Peter + salaries.Kate;
// alert(`The sum of all salaries is ${sum}.`);

// John`s salary is 2000, Kate`s salary is 1900
// alert('John`s ' + `salary is ${salaries.John}.`);
// alert('Kate`s ' + `salary is ${salaries.Kate}.`);

// add two persons in object
// salaries.Mary = 5000;
// salaries.Donald = 3000;

// alert('Mary' in salaries);
// alert('Donald' in salaries);

// find a person with the highest salary
// for(let key in salaries){
//   if(salaries[key] === Math.max(salaries.John, salaries.Ann, salaries.Peter, salaries.Kate, salaries.Mary, salaries.Donald)){
//     alert(`The person with the highest salary is ${key}.`);
//   }
// }


let sum = 0;

for(let key in salaries){
  sum += salaries[key];
}
console.log(`All salaries ${sum}`);

console.log(`John has salary ${salaries.John}, ${salaries.Kate}`);

salaries.Marya = 3000;
salaries.Mark = 2900;
console.log(salaries);

let maxSalary = 0;
let keyName = '';
for(key in salaries){
  if(salaries[key] > maxSalary){
    maxSalary = salaries[key];
    keyName = key;
  }
}

console.log(`${keyName} has the biggest salary: ${maxSalary}`);


// for(key in salaries){

// }
// let key = 'John';
// let johnSalary = salaries[key];






