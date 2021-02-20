let count = 0;
class Contact{
  constructor(name,lastname,phone,email){
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
  }
}

class LocalStorageList{
  constructor(array){
    this.list = array;
  }

  addContact(contact){
    const tmp = this.list.find(function(c){  
      return c.name === contact.name;
    });
    if(!tmp){
      this.list.push(contact);
      renderLocalStorage(this.list);
      return true;
    }
    return false;
  }

  renderLocalStorage(){
    let array = this.list;
    let count = 0;
    liBox.innerHTML = '';
    let str = '';

      for(let i = 0; i < array.length; i++){
        let{name = array[i].name, lastname = array[i].lastname, phone = array[i].phone, email = array[i].email} = array;
        str += name + ',' + lastname + ',' + phone + ',' + email + '&';

        liBox.innerHTML += `
      <li class="list-group-item d-flex w-100" data-index=${count++}>
        <div class="flex-grow-1">
        <h2 class="m-0">${array[i].name}</h2>
        <h4 class="m-0">${array[i].lastname}</h4>
        </div>
      <button class="btn btn-danger align-self-center" data-index="">remove</button>
      `
    }
      localStorage.setItem('contacts', str);
  }

}