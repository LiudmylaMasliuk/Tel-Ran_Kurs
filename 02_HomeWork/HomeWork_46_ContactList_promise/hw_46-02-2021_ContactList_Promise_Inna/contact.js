class Contact{
  constructor(name, lastname, phone, email){
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
  }
  serealisation(){
    return `${this.name},${this.lastname},${this.phone},${this.email}`;
  }
  static of(str){
    const arr = str.split(','); 
    // 'John,Doe,12345,john@mail.com' --> [ 'John', 'Doe', '12345', 'john@mail.com' ]
    return new Contact(...arr); // --> {name: 'John', lastname: 'Doe', phone: '12345', email: 'john@mail.com'}
  }
}