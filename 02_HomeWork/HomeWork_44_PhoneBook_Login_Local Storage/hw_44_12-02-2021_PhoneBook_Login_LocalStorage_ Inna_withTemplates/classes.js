const USERS_KEY = 'USERS';

class User{
  constructor(login, password){
    this.login = login;
    this.password = password;
  }
}

class UserStore{
  static save(user){
    const allUsers = this.getAll();
    if(allUsers.length === 0){
      allUsers.push(user); // --> [{},{} + {}]
      this.updateLocalStorage(allUsers);
      return true;
    }
    const foundUser = allUsers.find(function(item){
      if(item.login === user.login) return item;
    });
    if(!foundUser){
      allUsers.push(user); // --> [{},{} + {}]
      this.updateLocalStorage(allUsers);
      return true;
    }else{
      if(foundUser.password === user.password){
        return true;
      }else{
        showError('The password is wrong!');
        return false;
      }
    }
  }

  static getAll(){
    let str = localStorage.getItem(USERS_KEY);
    if(!str){
      return [];
    }
    const users = str.split('&'); 
    return users.map(item => item = JSON.parse(item)); // --> [{},{}]
  }

  static updateLocalStorage(array){
    const str = array.map((item) => JSON.stringify(item)).join('&'); // --> "'{}''{}'"
    localStorage.setItem(USERS_KEY, str);
    //console.log(str);
  }
}


class Contact{
  constructor(name,phone,email,address,description){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.description = description;
  }

}


class ContactsStore{
  static add(contact){
    const allContacts = this.getAll();
    const isName = allContacts.find(function(item){
      return item.name === contact.name;
    });
    if(!isName){
      allContacts.push(contact); // --> [{},{} + {}]
      this.updateLocalStorage(allContacts);
      return true;
    }
    return false;
  }
  
  static delete(index){
    const allContacts = this.getAll();
    allContacts.splice(index,1);
    this.updateLocalStorage(allContacts);
  }

  static getAll(){
    let str = localStorage.getItem(currentUser);
    if(!str){
      return [];
    }
    const contacts = str.split('&'); 
    return contacts.map(item => item = JSON.parse(item)); // --> [{},{}]
  }
  static updateLocalStorage(array){
    const str = array.map(item => JSON.stringify(item)).join('&'); // --> "'{}''{}'"
    localStorage.setItem(currentUser,str);
  }
}

