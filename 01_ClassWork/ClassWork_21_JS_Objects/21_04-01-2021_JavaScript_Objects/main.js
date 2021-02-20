//const person = new Object();

const person = {
  name: 'John',
  age: 30,
  'likes books': true, // if the key consists of two words

};

console.log(person.name + ', ' + person.age);

person.name = 'Ivan';
console.log(person.name);

person.isMarried = 'true';
console.log(person.isMarried); 
console.log(person.person); // undefined

// delete person.age;        // we deleted the age field
// console.log(person.age); // undefined

console.log(person['likes books']);
console.log(person['name']);

let hobby = 'likes books';
console.log(person[hobby]);

// let personKey = prompt('What would you like to know?', 'name'); 
// alert(person[personKey]);

// let fruit = prompt('What fruit to buy?', 'apple');
// let bag = {
//   [fruit]: 5, // we are waiting for this variable fruit
// }
// alert(bag.apple);

console.log(person.lastName === undefined); //true

console.log('lastName' in person); // if there is such a field in the object person

// for(let key in person){
//   console.log(`Property ${key} has value ${person[key]}`);
// }

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors:{
    border: 'black',
    background: 'red',
  },
  padding:{
    top: 10,
    bottom: 20,
  }
}

// for(let key in options){
//   if(typeof(options[key]) === 'object'){
//     for(let i in options[key]){
//       console.log(`Property '${i}' has value ${options[key][i]}`);
//     }
//   } else 
//   console.log(`Property '${key}' has value ${options[key]}`);
// }

// console.log(options['colors']['border']);




let salaries = {
  John: 2000,
  Ann: 2100,
  Piotr: 2100,
  Kate: 1900,
}

// calculate all salaries (sum) 
// John has salary: 2000, Kate has salary: 1900
// add two persons in object
// find a person with the biggest salary
