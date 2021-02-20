/////////////////////////
////// G E T T E R S ////
/////////////////////////

const user = {
  name: 'John',
  surname: 'Smith',

  get fullName(){
    return `${this.name} ${this.surname}`;
  },

  set fullName(value){
    [this.name, this.surname] = value.split('');
  },
}

//  только с get fullName
console.log(user.fullName); // --> John Smith
console.log(user);
// user.fullName = 'Jack Sparrow'; // --> error
console.log(user.fullName); // --> John Smith


// вместе с set fullName
user.fullName = 'Tony Stark'; // обращение к сеттеру
console.log(user.fullName); // --> Tony Stark

// user.name = 'Tony'; // --> обращение к сеттеру по умолчанию

/////////////////////

class User{
  #name;
  #surname;
  constructor(name,surname){
    this.#name = name;
    this.#surname = surname;
  }
  get name (){
    return this.#name;
  }

  get surname (){
    return this.#surname;
  }
}

let user1 = new User('Anna', 'Smith');
console.log(user1.#name); // --> error
console.log(user1.name); // обратимся к геттеру // -> Anna
console.log(user1.surname); // обратимся к геттеру // -> Smith

// получается мы не сможем поменять имя и фамилию этго пользователя, мы можем только получать имя и фамилию, обращаясь к геттеру



// если мы добавим сеттер, то мы сможем переписать значение закрытого поля
class Contact{
  #name;
  #surname;
  constructor(name,surname){
    this.#name = name;
    this.#surname = surname;
  }
  get name (){
    return this.#name;
  }

  get surname (){
    return this.#surname;
  }
  set surname (){
    return this.#surname;
  }
}

let contact = new Contact('Anna', 'Smith');
contact.surname = 'Brown';
console.log(contact.name, contact.surname); // Anna Brown




