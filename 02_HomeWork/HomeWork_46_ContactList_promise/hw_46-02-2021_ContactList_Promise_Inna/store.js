const CONTACTS_KEY = 'CONTACTS';

class Store{
  static save(contact){ // {}
    const promise = this.getAll(); // --> promise
    promise.then(array => {
      array.push(contact); // --> [{},{} + {}]
      this.updateLocalStorage(array);
      return new Promise(resolve => {
        resolve(array);
      });
    });
  }

  static remove(index){
    const promise = this.getAll();
    promise.then(array =>{
      array.splice(index,1);
      if(array.length === 0){
        localStorage.removeItem(CONTACTS_KEY);
      }else{
        this.updateLocalStorage(array);
      }
    });
    
  }

  static getAll(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        let str = localStorage.getItem(CONTACTS_KEY);
        if(!str){
          resolve([]); // --> []
        }else{
          const contacts = str.split('&'); 
          resolve(contacts.map(Contact.of)); // --> [{},{},{},{}]
        }
      
      },1500);
    });
    
  }

  static updateLocalStorage(array){
    const str = array.map((item) => item.serealisation()).join('&'); 
    localStorage.setItem(CONTACTS_KEY, str);
  }

}


