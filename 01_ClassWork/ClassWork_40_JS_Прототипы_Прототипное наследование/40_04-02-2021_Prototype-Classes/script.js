let user = {
    id: 123,
    name: 'John',
    age: 25,
    display: function(){
        console.log(`User id: ${this.id}, name: ${this.name}, age: ${this.age}`);
    }
};

user.display();

let count = 1;

function User(name, age){
    this.id= '00' + (count++),
    this.name= name,
    this.age= age,
    this.display = function(){
        console.log(`User id: ${this.id}, name: ${this.name}, age: ${this.age}`);
    }
}

const user2 = new User('Tony', 28);
user2.display();
const user3 = new User('Anna', 30);
user3.display();

console.dir(user2);

let employee = {
    id: 123,
    name:'John',
    age: 23,
    display: function(){}
};

let wageEmployee = {
    /* id: 123,
    name:'John',
    age: 23, */
    hours: 100,
    hourPrice: 20,
    calcSalary: function(){},
    __proto__ : employee            // wageEmployee -> employee -> Object -> null
}

let salaryEmployee = {
    id: 123,
    name:'John',
    age: 23,
    salary: 100
}
wageEmployee.__proto__ = employee;

console.dir(employee);
console.dir(wageEmployee);

const arr = [1,2,3,4];

console.dir(arr);

