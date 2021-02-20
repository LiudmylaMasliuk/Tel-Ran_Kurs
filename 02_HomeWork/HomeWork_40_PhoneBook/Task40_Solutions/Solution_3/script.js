/* const contactsList = newContactsList('#root');  */// tak sozdastsja novaja biblioteka kontaktov

/* contactsList.addContact(new Contact(
  'John Doe','123456789','john@mail.com','Tel Aviv','Best friend', '#root'
)); */


/* const contactsList = newContactsList('#root', );

const contacts = [
  {name:'John Doe',phone:'123456789',email:'john@mail.com',address:'Tel Aviv', description:'Best friend', parentSelector: '#root'},
  {name:'Jack Sparrow',phone:'0987654321',email:'jack@mail.com',address:'Carribian Sea',description:'Pirate', parentSelector: '#root'},
  {name:'Tony Stark',phone:'4566778',email:'tony@stark.com',address:'New York',description:'IronMen', parentSelector: '#root'}
]; */


const contactsList = new ContactsList('#root'); 

contactsList.addContact(new Contact(
  'John Doe',
  '123456789',
  'john@mail.com',
  'Tel Aviv',
  'Best friend',
  '#root'
));
contactsList.addContact(new Contact(
  'Jack Sparrow',
  '123456789',
  'john@mail.com',
  'Tel Aviv',
  'Best friend',
  '#root'
));
contactsList.addContact(new Contact(
  'Tony Stark',
  '123456789',
  'john@mail.com',
  'Tel Aviv',
  'Best friend',
  '#root'
));

const root = document.querySelector('#root'),
      nav = document.querySelector('.nav');

let currentPage = document.querySelector('a[href = "contacts"]'),
    currentContactRow;

nav.onclick = function(e){
  e.preventDefault();
  if(e.target.tagName === 'A'){
    if(e.target.getAttribute('href') !== currentPage.getAttribute('href')){
      currentPage.classList.remove('active');
      currentPage = e.target;
      currentPage.classList.add('active');
      navigation(currentPage.getAttribute('href'));
    }
  }
}
function navigation(path){
  switch(path){
    case 'contacts':
      contactsList.renderContactsList();
      break;
      case 'addContact':
        renderAddContact();
        break;
  }
}

function contactClickHandler(event){
  //console.log(event.target);
  let target = event.target;
  if(target.classList.contains('delete')){
    target.classList.remove('item-active');
    contactsList.list.splice(target.dataset.index,1); 
    contactsList.renderContactsList();
  }else{
    if(target.tagName !== 'LI'){
      target = event.target.parentNode;
    }
    if(currentContactRow){
      currentContactRow.classList.remove('item-active');
    }
    showContact(target.dataset.index);
    currentContactRow = target;
    currentContactRow.classList.add('item-active');
  }
}

function showContact(index){ // vsplivajuwee okowko so vsemi dannimi 
  const contact = contactsList.list[index];
  contact.renderContactView();
}


function renderAddContact(){
  root.className = 'add-contact';
  root.innerHTML = `
  <form name="addContactForm">
    <input class="form-control" type="text" name="name" placeholder="Type name">
    <input class="form-control" type="text" name="phone" placeholder="Type phone">
    <input class="form-control" type="text" name="email" placeholder="Type email">
    <input class="form-control" type="text" name="address" placeholder="Type address">
    <textarea class="form-control" type="text" name="description" placeholder="Type description"></textarea>
    <div class="buttons"><button class="add-btn">Add</button></div>
  </form>
  `;
  const form = document.forms.addContactForm;
  form.onsubmit = formSubmitHandler;
  console.log(form.elements);
}

function formSubmitHandler(event){
  event.preventDefault();
  const form = event.target;
  contactsList.addContact(new Contact(
    form.name.value,
    form.phone.value,
    form.email.value,
    form.address.value,
    form.description.value,
    ));
  clearForm(form);
}

function clearForm(form){
  for(let i = 0; i < form.elements.length; i++){
    if(form.elements[i].localName !== 'button'){
      form.elements[i].value = '';
    }
  }
}
