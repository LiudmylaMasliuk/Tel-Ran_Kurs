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

let str = 'John,Doe,12345,john@mail.com';
console.log(str.split(','));


//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////



const CONTACTS_KEY = 'CONTACTS';

class Store{
  static save(contact){
    const allContacts = this.getAll(); // --> [{},{}]
    allContacts.push(contact); // --> [{},{} + {}]
    this.updateLocalStorage(allContacts);
  }

  static remove(index){
    const conts = this.getAll();
    conts.splice(index,1);
    if(conts.length === 0){
      localStorage.removeItem(CONTACTS_KEY);
    }else{
      this.updateLocalStorage(conts);
    }
  }

  static getAll(){
    let str = localStorage.getItem(CONTACTS_KEY);
    if(!str){
      return [];
    }
    const contacts = str.split('&'); 
    // John,Doe,12345,john@mail.com&Mary,Lee,12345,mary@mail.com& --> 
    // [ 'John,Doe,12345,john@mail.com', 'Mary,Lee,12345,mary@mail.com' ]
    return contacts.map(Contact.of); // --> [{},{},{},{}]
    // --> [
    //      {name: 'John', lastname: 'Doe', phone: '12345', email: 'john@mail.com'},
    //      {name: 'Mary', lastname: 'Lee', phone: '12345', email: 'mary@mail.com'},
    //     ]

  }

  static updateLocalStorage(array){
    const str = array.map((item) => item.serealisation()).join('&'); // -->  John,Doe,12345,john@mail.com&Mary,Lee,12345,mary@mail.com&
    localStorage.setItem(CONTACTS_KEY, str);
  }

}

// CONTACTS : John,Doe,12345,john@mail.com&Mary,Lee,12345,mary@mail.com&



//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////



const list = document.querySelector('#contact-list'),
      form = document.querySelector('#add-contact-form');

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;

renderList();

function renderList(){
  list.innerHTML = Store.getAll().map(mapToRow).join('');
  // [{},{},{},{}].map(mapToRow).join(''); --> objects will be transformed into LIs.

}

function mapToRow(contact,index){
  return `
  <li class="list-group-item d-flex w-100">
    <div class="flex-grow-1">
    <h2 class="m-0">${contact.name} ${contact.lastname}</h2>
    <h4 class="m-0">${contact.phone}</h4>
    <p class="m-0">${contact.email}</p>
    </div>
    <button class="btn btn-danger align-self-center" data-index="${index}">remove</button>
    </li>
  
  `;
}

function onRemoveContactHandler(event){
  if(event.target.tagName === 'BUTTON'){
    const index = parseInt(event.target.dataset.index);
    Store.remove(index);
    renderList();
  }
}

function onAddContactHandler(event){
  event.preventDefault();
  const form = event.target;
  const contact = new Contact(
    form.name.value,
    form.lastname.value,
    form.phone.value,
    form.email.value
  );
  Store.save(contact);
  renderList();

  form.reset();
}

