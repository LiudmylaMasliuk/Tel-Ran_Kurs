

/////////////////////////////////////
//////////// S T A T I C ////////////
/////////////////////////////////////

// static относится ко всему объекту Car

class Car{
  // yearOfProduction = 2001;
  // model = 'Civic';
  // manufc = 'Honda';

  constructor(model, manufc){
    this.model = model;
    this.manufc = manufc;
    this.yearOfProduction = 2001;
  }
  static country = 'Germany'; // относится ко всему классу
  static doSome(){
    console.log('Hello!');
    console.log(this);
  }
  print(){
    console.log(this);
    this.#printPrivate();
  }
  #printPrivate(){
    console.log('private method');
  }
}

/* let car1 = new Car();
console.log(car1.model, car1.manufc, car1.yearOfProduction); 
// --> Civic Honda 2001 */

console.log(Car.country); // Germany
Car.doSome(); // --> Hello!    [class Car] { country: 'Germany' }

// Car.print(); // THIS WAY IS NOT ALLOWED

let car1 = new Car('Golf', 'Volkswagen');
console.log(car1.model, car1.manufc, car1.yearOfProduction); 
// --> Golf Volkswagen 2001

car1.print(); // --> Car { model: 'Golf', manufc: 'Volkswagen', yearOfProduction: 2001 }

car1.model = 'Jetta';

console.log(car1.model); // --> Jetta

/////////////////////////////////////////////
//// П Р И В А Т Н Ы Е   С В О Й С Т В А ////
/////////////////////////////////////////////

// this._yearOfProduction = 2001; // _ договорённость о неизменяимых полях
// this.#yearOfProduction = 2001; // современный способ обозначения неизменяимых полей

car1.print(); 
/* --> 
Car { model: 'Golf', manufc: 'Volkswagen', yearOfProduction: 2001 } 
private method 
*/

// car1.#printPrivate(); // --> error 




