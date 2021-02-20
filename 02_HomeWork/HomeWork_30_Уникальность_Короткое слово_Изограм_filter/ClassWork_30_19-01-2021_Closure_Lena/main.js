//Замыкание - closure//

/* let myName = 'Vasya';

function sayHello(){
    console.log(`hello, ${myName}`);
}
sayHello();

myName = 'Kolya'; */



function getMessage(){
    let myName = 'Petya';

    return function(){      // return myName;
        console.log(myName)
    }
}

let myName = 'Vasya';

let test = getMessage();
test();


let phrase = 'Hello';
function say(name){
    console.log(`${phrase}, ${name}!`);
}

say('Vasya');
say('Kolya');
phrase = 'Good bye';

say('Petya');

function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    }
}

let counter = makeCounter();   
let counter1 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter1());


/* function makeArmy(){
    let shooters = [];
    let i = 0;
    while(i<5){
        let shooter = function(){
            console.log(i)
        }
        shooters.push(shooter);
        i++;
    }
    i = 20;
    return shooters;
} */

function makeArmy(){
    let shooters = [];
    for(let i = 0; i < 5; i++)
     {let shooter = function(){
            console.log(i)
        }
        shooters.push(shooter);
    }
 
    return shooters;
}

const army = makeArmy();
army[0]();
army[3]();


//Prototype//

let str = 'some string';
const strObejct = new String(str);

console.log(typeof str);
console.log(typeof strObejct);

console.log('abcd'.toUpperCase());

console.dir([1,2,3]);

const cat = {
    feet: 4,
    tail: 1,
    ears: 2,
    voice: function(){
        console.log('meow-meow');
    }
};

const barsik = {
    color: 'black',
    age: 2
};

//barsik.__proto__ = cat;   - deprecated
Object.setPrototypeOf(barsik, cat);  // статический способ 

const murzik = Object.create(cat);  // динамический способ
//const murzik = Object.create(cat, {color:{value: 'black'},age:{value:4}});  

murzik.color = 'orange';

console.log(barsik);
barsik.voice();

// function constructor

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    }
}

const user1 = new User('Vasya', 1);
//console.log(user1);

user1.hello();

const user2 = new User('Anna', 2);
user2.hello();

User.prototype.goodBye = function(){
    console.log(`User with id ${this.id} say good bye!`);
};

user2.goodBye();

User.prototype.ears = 2;
console.log(user1.ears);

//Task01
//'hjfkds hfjd jdk shdjkg hsjshjssks shjks'
//function findShorts('hjfkds hfjd jdk shdjkg hsjshjssks shjks') -> 3 (вернуть длину самого короткого слова)

//Task02
//function isIsogram('abcd') -> true;
//function isIsogram('abbcd') -> false;
//function isIsogram('abcdA') -> false;

//Task03
/* на вход метод получает массив чисел или строку.
    метод должен вернуть массив не повторяющихся элементов идущих по проядку. 
    напрмер:
    function uniqueElementInOrder('aaabbbcddaa') -> ['a','b','c','d','a'];
    function uniqueElementInOrder([1,2,2,3,3,4,5,5]) -> [1,2,3,4,5];
    unction uniqueElementInOrder([1,2,2,3,3,4,5,5,2,2]) -> [1,2,3,4,5,2];
    (filter использовать необязательно, но есть решение этой задачи, в которм применяется filter)
 */
