class Contact{
    constructor(name, lastName, phone, email){
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }

    serialization(){
        return `${this.name},${this.lastName},${this.phone},${this.email}`;
        //return JSON.stringify(this);
    }

    static of(str){
        const arr = str.split(',');
        return  new Contact(...arr);  //new Contact(arr[0],arr[1],arr[2],arr[3]);
       // return JSON.parse(str);
    }
}

//c1 = new Contact('John', 'Doe', '122345', 'john@gmail.com');
//c1 -> {name: John, lastName: Doe, phone: 12345, email:john@gmail.com}
//c1.serialization()
// John,Doe,12345,john@gmail.com
//c2 = Contact.of(John,Doe,12345,john@gmail.com) -> {name: John, lastName: Doe, phone: 12345, email:john@gmail.com}
//