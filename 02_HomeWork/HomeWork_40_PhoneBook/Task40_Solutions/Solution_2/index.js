const contacts = [
  {name:'John Doe',phone:'123456789',email:'john@mail.com',address:'Tel Aviv',desc:'Best friend'},
  {name:'Jack Sparrow',phone:'0987654321',email:'jack@mail.com',address:'Carribian Sea',desc:'Pirate'},
  {name:'Tony Stark',phone:'4566778',email:'tony@stark.com',address:'New York',desc:'IronMen'}
];

const root = document.querySelector('#root'),
      nav = document.querySelector('.nav');

let currentPage = document.querySelector('a[href = "contacts"]'),
    currentContactRow;

renderContacts();

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
      renderContacts();
      break;
      case 'addContact':
        renderAddContact();
        break;
  }
}

function renderContacts(){
  root.className = 'contacts';
  root.innerHTML = `
  <ul class="list">
    ${contacts.map(mapToContactRow).join('')}
  </ul>
  <div class="contact-view">No</div>
  `;
  root.querySelector('.list').onclick = contactClickHandler;
}

function contactClickHandler(event){
  //console.log(event.target);
  let target = event.target;
  if(target.classList.contains('delete')){
    target.classList.remove('item-active');
    contacts.splice(target.dataset.index,1); // !!!!!!!!WOW!!!!!!!
    renderContacts();
  }else{
    if(target.tagName !== 'LI'){
      target = event.target.parentNode;
    }
    if(currentContactRow){
      currentContactRow.classList.remove('item-active'); // !!!!!!!!WOW!!!!!!!
    }
    showContact(target.dataset.index);
    currentContactRow = target;
    currentContactRow.classList.add('item-active');
  }
}

function showContact(index){
  const contact = contacts[parseInt(index)];
  const contactView = root.querySelector('.contact-view');
  contactView.innerHTML = `
    <h2>${contact.name}</h2>
    <div class="contact-view-row">
      <img src="./img/technology.png" alt="">
      <h3>${contact.phone}</h3>
    </div>
    <div class="contact-view-row">
      <img src="./img/multimedia.png" alt="">
      <h3>${contact.email}</h3>
    </div>
    <div class="contact-view-row">
      <img src="./img/buildings.png" alt="">
      <h3>${contact.address}</h3>
    </div>
    <p>${contact.desc}</p>
  `;
}

function mapToContactRow(contact,index){
  return `
    <li class="list-item" data-index=${index}>
        <h2 class="title">${contact.name}</h2>
        <h3 class="sub-title">${contact.phone}</h3>
        <div class = "delete"></div>
    </li>
  `
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
  contacts.push({
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    address: form.address.value,
    desc: form.description.value,
  });
  clearForm(form);
}

function clearForm(form){
  for(let i = 0; i < form.elements.length; i++){
    if(form.elements[i].localName !== 'button'){
      form.elements[i].value = '';
    }
  }
}




