let user = {
  id: 123,
  name: 'John',
  age: 25, 
  display: function(){
    console.log(`User id: ${this.id}, name: ${this.name}, age: ${this.age}`);
  }
}

user.display();


////////// F U N C T I O N   C O N S T R U C T O R //////////

let count = 0;

function User(id, name, age){
  this.id = count++,
  this.name = name,
  this.age = age, 
  this.display = function(){
    console.log(`User id: ${this.id}, name: ${this.name}, age: ${this.age}`);
  }
}

const user2 = new User(124, 'Jane', 28);
user2.display();

const user3 = new User(125, 'Mary', 38);
user3.display();

///////////////////////////////////////
/////// N A S L E D O V A N I E ///////
///////////////////////////////////////

console.dir(user2);

let employee = {
  id: 123,
  name: 'Mark',
  age: 30,
  display: function(){},
};

let honorarEmployee = {
  /* id: 123,
  name: 'Mark',
  age: 30, */
  hours: 100,
  hourPrice: 20,
  calcSalary: function(){},
  __proto__: employee,      // honorarEmployee --> employee --> object --> null
};

let salaryEmployee = {
  /* id: 123,
  name: 'Mark',
  age: 30, */
  hours: 100,
};

honorarEmployee.__proto__ = employee;
salaryEmployee.__proto__ = employee;

console.dir(employee);
console.dir(honorarEmployee);

//////

// const arr = [1,2,3,4];
// console.dir(arr);


