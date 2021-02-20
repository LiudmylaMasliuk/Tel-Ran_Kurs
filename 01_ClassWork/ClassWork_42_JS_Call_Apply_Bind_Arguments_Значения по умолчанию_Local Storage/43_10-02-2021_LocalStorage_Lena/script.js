function sayName(surname){
    console.log(this);
    console.log(`${this.name}, ${surname}`);
}

const user = {
    name: 'John'
}

//sayName()

sayName.apply(user, ['Smith']);
sayName.call(user, 'Smith');

function personalMessage(message){
    console.log(`${this.name} say: ${message}`);
}

personalMessage('hello!');

const messageFromJohn = personalMessage.bind(user);

messageFromJohn('Nice to see you!');
messageFromJohn('Hello!');

function getSomething(num = 100, num1 = 5){
    // let n = num || 100;
    // let n1 = num1 || 5;
    console.log(num + num1);
}

getSomething(0,10);

function fun1(){
    console.log(arguments);
}

fun1();
fun1('Anna', 'John', 'Jack');

function sumAll(){
    let sum = 0;
    for(let key in arguments){
        sum += arguments[key];
    }
    return sum;
}

console.log(sumAll(1,2));
console.log(sumAll(1,2,4,5,6,7));
console.log(sumAll(1,2,45,6,7,8,));

function print(){
    for(let key in arguments){
        console.log(arguments[key]);
    }
}

print('hallo', ', John', ' !');