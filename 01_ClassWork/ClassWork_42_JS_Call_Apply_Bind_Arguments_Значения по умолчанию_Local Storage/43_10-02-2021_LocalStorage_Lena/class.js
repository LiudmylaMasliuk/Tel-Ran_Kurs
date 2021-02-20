class Car{
    #yearOfProduction = 2001;
    // model = 'Civic';
    // manufc = 'Honda';
    constructor(model, manufc){
        this.model = model;
        this.manufc = manufc;
     }

    static country = 'Japan'; 
    static doSome(){
        console.log('Hello!');
        console.log(this);
    }
    print(){
        console.log(this.#yearOfProduction);
        this.#printPrivate();
    }

    #printPrivate(){
        console.log('private method');
    }



    // constructor(model, manufc){
    //     this.model = model;
    //     this.manufc = manufc;
    //     this.yearOfProduction = 2001;
    // }
}

console.log(Car.country);
Car.doSome();

//Car.print();

let car1 = new Car('Civic', 'Honda');
//car1.print();
console.log(car1.model, car1.manufc, car1.yearOfProduction);

car1.model = 'black';
//car1.#yearOfProduction = 2018;

console.log(car1.model);
car1.print();
//car1.#printPrivate();