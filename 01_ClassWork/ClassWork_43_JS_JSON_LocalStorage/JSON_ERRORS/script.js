const user = {
  name: 'John',
  age: 23,
  parent:{
    father: 'Jack',
    mother: 'Anna'
  },
  print: function(){
    console.log(this.name, this.age);
  }
};

///////////////////////////////////
/// J S O N   S T R I N G I F Y ///
///////////////////////////////////
//
// Object to String


// --> {"name":"John","age":23,"parent":{"father":"Jack","mother":"Anna"}}

const strUser = JSON.stringify(user);
console.log(strUser); // --> {"name":"John","age":23,"parent":{"father":"Jack","mother":"Anna"}}


///////////////////////////////////
////// J S O N   P A R S E ////////
///////////////////////////////////
//
// String to Object


const objUser = JSON.parse(strUser);
console.log(objUser); // --> { name: 'John', age: 23, parent: { father: 'Jack', mother: 'Anna' } }


class User{
  constructor(name){
    this.name = name;
  }
  print = ()=>{
    console.log(this.name);
  }
}

const user1 = new User('Anna');
console.log(user1);
console.log(JSON.stringify(user1)); // --> {"name":"Anna"}


// https://jsoneditoronline.org/