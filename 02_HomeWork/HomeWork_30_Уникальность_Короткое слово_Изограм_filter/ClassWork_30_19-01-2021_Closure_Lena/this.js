'use strict';

function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(5,6);

const object = {
    a: 20,
    b: 14,
    sum: function(){
        return this.a + this.b;
       /*  function more(){
            console.log(this);
        }
        more(); */
    }
}

console.log(object.sum());

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    }
}

const user1 = new User('Vasya', 1);

function sayName(lastName){
    console.log(this);
    console.log(this.name + lastName);
}

const user = {
    name: 'John'
};

sayName.call(user, ' Smith');
sayName.apply(user, [' Klien']);



function printMessage(){
    console.log(this);
}
const print = printMessage.bind('Hello!'); 
print();

function count(num){
    return this*num;
}

const double = count.bind(2);  //double()
console.log(double(15));


//1. Обычная функция - this = window (при нестрогом режиме), undefind - при использовании 'use strict';
//2. Контекст у методов объекта - сам объект;
//3. this функциях конструкторах и классах - относится к новому экземпляру объекта.
//4. Ручная првязка this - call, apply, bind