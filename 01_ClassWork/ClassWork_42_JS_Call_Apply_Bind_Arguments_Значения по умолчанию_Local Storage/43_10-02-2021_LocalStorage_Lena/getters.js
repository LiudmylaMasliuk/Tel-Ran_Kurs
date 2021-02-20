
const user = {
    name: 'John',
    surname: 'Smith',

    get fullName(){
        return `${this.name} ${this.surname}`;
    },

    set fullName(value){
        [this.name, this.surname] = value.split(' ');
    }

}

console.log(user.fullName);
//user.fullName = 'Jack Sparow';
console.log(user);

user.fullName = 'Jack Sparow';
console.log(user.fullName);

console.log(user.name);
user.name = "Anna";

class User{
    #name;
    #surname;

    constructor(name, surname){
        this.#name = name;
        this.#surname = surname;
    }

    get name(){
        return this.#name;
    }

    get surname(){
        return this.#surname;
    }

    get fullName(){
        return `${this.#name} ${this.#surname}`;
    }

    set name(name){
        this.#name = name;
    }
}

let user1 = new User('Anna', 'Smith');
user1.name = 'John';
console.log(user1.fullName);
