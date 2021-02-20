'use strict'

const user = {};
user.name = 'Ivan';
user.age = 25;
console.dir(user);

// D E S C R I P T O R S:
// value: Ivan
// writable: true
// configurable: true - polu4it dostup k writable i enumarable
// enumerable: true




///////////////////////////////////////////
////// D E F I N E   P R O P E R T Y //////
///////////////////////////////////////////

// takaja forma sozdanija objekta
// v takom slu4ae vse ne upomjanutie descriptors - false
const user1 = {};
user1.age = 30;

Object.defineProperty(user1, 'name', {value: 'Mary'});
console.dir(user1);

// D E S C R I P T O R S:
// value: Mary
// writable: false
// configurable: false
// enumerable: false

//user1.name = 'Jane'; // --> error 

Object.defineProperty(user, 'password', {
  value: '12345',
  writable: true,
  enumerable: false, 
  configurable: true
});

Object.defineProperty(user, 'password', { 
  writable: true
});

user.password = 54321;


///////////////////////////////////////////////
////// D E F I N E   P R O P E R T I E S //////
///////////////////////////////////////////////
//
// pomenjat neskolko svojstv pri sozanii

Object.defineProperties(user1, { 
  age:{
    value: 32,
    writable: true
  },
  address: {
    value: 'Berlin',
    enumerable: true,
    writable: true,
  }
});


/////////////////////////////////////////////////////////////
/// G E T   O W N   P R O P E R T Y   D E S C R I P T O R ///
/////////////////////////////////////////////////////////////
//
// pokazat descriptor of the opject property
// Math -- object
// 'PI' -- property

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descriptor);

/* --> {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
configurable: false
enumerable: false
value: 3.141592653589793
writable: false
__proto__: Object */





///////////////////////////////////////////////
////// P R E V E N T  E X T E N S I O N S //////
///////////////////////////////////////////////
//
// zapewaem, 4to-to dobavljat v svojstva objekta
//
Object.preventExtensions(user);
//user.color = 'green';
//consol.log(user.green); // --> error


///////////////////////////////////////////////
///////// I S   E X T E N S I B L E ///////////
///////////////////////////////////////////////

console.log(Object(isExtensible(user)));

/////////////////////////////////////////////////////////////////////////////
///////// G E T  O W N  P R O P E  R T Y   D E S C R I P T O R S ///////////
////////////////////////////////////////////////////////////////////////////



//////////////////////////////
///////// S E A L ///////////
/////////////////////////////
//
Object.seal(user); // Zaprewaet udaljat/dobavljat cdojstva v ojekt i zaprewaet menjat konfiguraciju - configurable: false

Object.isSealed(user); // metod posmotret, propuskalsja li Object 4erez seal


//////////////////////////////
///////// F R E E Z E ///////
/////////////////////////////
//
// zaprewaet dobavljat, izmenjat svojstva
// configurable: false
// writable: false
// i esli configuratable i writable bili do etogo true, to oni stanut false

Object.isFrozen(user); // metod posmotret, propuskalsja li Object 4erez zamorozku




