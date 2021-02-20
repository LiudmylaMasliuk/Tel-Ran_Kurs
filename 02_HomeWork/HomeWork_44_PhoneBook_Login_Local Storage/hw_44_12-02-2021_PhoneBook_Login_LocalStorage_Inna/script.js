const nav = document.querySelector('.nav'),
      root = document.querySelector('#root'),
      signInLinkBtn = nav.querySelector('#signInLink'),
      contactsLinkBtn = nav.querySelector('#contactsLink'),
      addContactLinkBtn = nav.querySelector('#addContactLink'),
      signOutLinkBtn = nav.querySelector('#signOutLink'),
      searchDiv = nav.querySelector('.search'),
      searchInput = searchDiv.querySelector('.search input'),
      searchBtn = searchDiv.querySelector('#search-btn');

let currentUser = localStorage.getItem('CURRENT_USER'),
    currentPage;

console.log(`The current user is ${currentUser}`);


if(currentUser){
    currentPage = document.querySelector('a[href = "contacts"]');
    renderContactsList();
}else{
  currentPage = document.querySelector('a[href = "signIn"]');
  renderSignIn();
}


nav.onclick = function(event){
  event.preventDefault();
  if(event.target.tagName === 'A'){
    if(event.target.getAttribute('href') !== currentPage.getAttribute('href')){
      currentPage.classList.remove('active');
      currentPage = event.target;
      currentPage.classList.add('active');
      navigation(currentPage.getAttribute('href'));
    }
  }
}

function navigation(path){
  switch(path){
    case 'contacts':
      renderContactsList();
      break;
    case 'addContact':
      renderAddContact();
      break;
    case 'signOut':
      renderSignOut();
      break;
  }
}


function renderSignIn(){
  currentPage.classList.add('active');
  console.log(currentPage);
  signInLinkBtn.parentNode.style.display = 'block';
  contactsLinkBtn.parentNode.style.display = 'none';
  addContactLinkBtn.parentNode.style.display = 'none';
  signOutLinkBtn.parentNode.style.display = 'none';
  searchDiv.style.display = 'none';
  root.innerHTML = '';
  root.className = 'add-user';
  const formElem = document.createElement('form'),
        inputLogin = document.createElement('input'),
        inputPassword = document.createElement('input'),
        btnDiv = document.createElement('div'),
        enterBtn = document.createElement('botton');
  formElem.setAttribute('name', 'addUser');
  inputLogin.className = 'form-control';
  inputLogin.setAttribute('type','text');
  inputLogin.setAttribute('name','login');
  inputLogin.setAttribute('placeholder','Type your login');
  inputPassword.className = 'form-control';
  inputPassword.setAttribute('type','text');
  inputPassword.setAttribute('name','password');
  inputPassword.setAttribute('placeholder','Type your password');
  btnDiv.className = 'buttons';
  enterBtn.className = 'add-btn';
  enterBtn.innerHTML = 'enter';
  btnDiv.append(enterBtn);
  formElem.append(inputLogin,inputPassword,btnDiv);
  root.append(formElem);

  enterBtn.onclick = enterBtnHandler;
}


function enterBtnHandler(event){
  event.preventDefault();
  const form = document.forms.addUser,
        login = form.login,
        password = form.password;
  password.classList.remove('is-invalid');
  login.classList.remove('is-invalid');
  const result = UserStore.save(new User(login.value,password.value));
    if(result){
      localStorage.setItem('CURRENT_USER', login.value);
      currentUser = localStorage.getItem('CURRENT_USER'); // (!!!)
      currentPage.classList.remove('active');
      renderContactsList();
    }else{
      password.value = '';
      password.classList.add('is-invalid');
    }
}

function renderSignOut(){
  localStorage.removeItem('CURRENT_USER');
  currentPage.classList.remove('active');
  currentPage = document.querySelector('a[href = "signIn"]');
  console.log(localStorage.getItem('USERS'));
  renderSignIn();
}

searchInput.oninput = function(){
  const listOfContacts = ContactsStore.getAll();
  const filterContact = listOfContacts.filter((item)=>
      item.name.toLowerCase().startsWith(searchInput.value.toLowerCase()));
  renderContactsList(filterContact);
}


function renderContactsList(listOfContacts = ContactsStore.getAll()){
  currentPage = document.querySelector('a[href = "contacts"]');
  currentUser = localStorage.getItem('CURRENT_USER');
  console.log(`The current user is ${currentUser}`);
  currentPage.classList.add('active');
  console.log(currentPage);
  signInLinkBtn.parentNode.style.display = 'none';
  contactsLinkBtn.parentNode.style.display = 'block';
  addContactLinkBtn.parentNode.style.display = 'block';
  signOutLinkBtn.parentNode.style.display = 'block';
  searchDiv.style.display = 'flex';
  root.innerHTML = '';
  root.className = 'contacts';
  const contactView = document.createElement('div');
  contactView.classList.add('contact-view');
  root.append(contactView);

  const contactsBox = document.createElement('ul');
  contactsBox.className = 'list';
  // const listOfContacts = ContactsStore.getAll(); // --> [{},{},...]
  //console.log(listOfContacts);

  contactsBox.onclick = function(event){
    let elem = event.target;
    if(event.target.classList.contains('delete')){
      elem = event.target.parentElement;
      elem.classList.remove('item-active');
      const index = elem.getAttribute('data-index');
      ContactsStore.delete(index);
      renderContactsList();
    }else{
      if(event.target.tagName !== 'LI'){
        elem = event.target.parentElement;
      }
      root.querySelectorAll('li').forEach((item)=>item.classList.remove('item-active'));
      const index = elem.getAttribute('data-index');
      const contact = listOfContacts[index]; // --> {}
      renderContactView(contact);
      elem.classList.add('item-active')
    }
  }
  listOfContacts.forEach(function(item,index){
    contactsBox.innerHTML += renderLiView(item,index);
  });
  root.prepend(contactsBox);

}

function renderAddContact(){
  currentPage.classList.add('active');
  console.log(currentPage);
  root.innerHTML = '';
  root.className = 'add-contact';
  const form = document.createElement('form'),
        inputName = document.createElement('input'),
        inputPhone = document.createElement('input'),
        inputEmail = document.createElement('input'),
        inputAddress = document.createElement('input'),
        inputDescription = document.createElement('textarea'),
        btnDiv = document.createElement('div'),
        addBtn = document.createElement('botton');
  form.setAttribute('name', 'form');
  inputName.className = 'form-control';
  inputName.setAttribute('type','text');
  inputName.setAttribute('name','name');
  inputName.setAttribute('placeholder','Type your name');
  inputPhone.className = 'form-control';
  inputPhone.setAttribute('type','text');
  inputPhone.setAttribute('name','phone');
  inputPhone.setAttribute('placeholder','Type your phone');
  inputEmail.className = 'form-control';
  inputEmail.setAttribute('type','text');
  inputEmail.setAttribute('name','email');
  inputEmail.setAttribute('placeholder','Type your email');
  inputAddress.className = 'form-control';
  inputAddress.setAttribute('type','text');
  inputAddress.setAttribute('name','address');
  inputAddress.setAttribute('placeholder','Type your address');
  inputDescription.className = 'form-control';
  inputDescription.setAttribute('type','text');
  inputDescription.setAttribute('name','description');
  inputDescription.setAttribute('placeholder','Type your description');
  btnDiv.className = 'buttons';
  addBtn.className = 'add-btn';
  addBtn.innerHTML = 'add';
  btnDiv.append(addBtn);
  form.append(inputName,inputPhone,inputEmail,inputAddress,inputDescription,btnDiv);
  root.append(form);

  addBtn.onclick = formSubmitHandler;
}

function formSubmitHandler(event){
  event.preventDefault();
  const form = document.forms.form,
        name = form.name,
        phone = form.phone,
        email = form.email,
        address = form.address,
        description = form.description;
  if(!formValidation(form)){
    const result = ContactsStore.add(new Contact(
      name.value, 
      phone.value,
      email.value, 
      address.value, 
      description.value
      ));
    if(result){
      showSuccess(name.value);
      form.reset();
    }else{
      showError(`The name ${name.value} already exists.`);
      form.reset();
    }
  }
}

function formValidation(form){
  let hasErrors = false;
  for(let i = 0; i < form.elements.length; i++){ 
      if(form.elements[i].localName !== 'button'){
          form.elements[i].classList.remove('is-invalid');
          if(form.elements[i].value.trim() === ''){
              form.elements[i].classList.add('is-invalid');
              hasErrors = true;
          }
      }
  }
  if(hasErrors){
      showError('All fields should be filled!');   
  }
  return hasErrors;
}

function showSuccess(name){
  let div = root.querySelector('.alert');
  if(!div){ // if div was not created
      div = document.createElement('div');
      root.prepend(div);
  }
  div.className = 'alert alert-success';
  div.innerHTML = `Contact ${name} was added.`
}

function showError(error){
  let div = root.querySelector('.alert');
  if(!div){ // if div was not created
      div = document.createElement('div');
      root.prepend(div);
  }
  div.className = 'alert alert-danger';
  div.innerHTML = error;
}


function renderLiView(item,index){
  return`
  <li class ='list-item' data-index = ${index}>
      <h2 class ='title'>${item.name}</h2>
      <h3 class ='sub-title'>${item.phone}</h3>
      <div class ='delete'></div>
  </li>`
}

function renderContactView(contact){
  const contactView = document.querySelector('.contact-view');
  contactView.innerHTML = '';
  contactView.style.display = 'block';
  const contactRowPhone = document.createElement('div'),
        contactRowEmail = document.createElement('div'),
        contactRowAddress = document.createElement('div'),
        contactName = document.createElement('h2'),
        contactPhone = document.createElement('h3'),
        contactAddress = document.createElement('h3'),
        contactDescription =  document.createElement('p'),
        iconPhone = document.createElement('img'),
        iconEmail = document.createElement('img'),
        contactEmail = document.createElement('h3'),
        iconBuildung = document.createElement('img'),
        closeBtn = document.createElement('div');
  
  contactRowPhone.className = 'contact-view-row';
  contactRowEmail.className = 'contact-view-row';
  contactRowAddress.className = 'contact-view-row';
  iconPhone.setAttribute('src','./img/technology.png');
  iconPhone.setAttribute('alt','phone');
  iconEmail.setAttribute('src','./img/multimedia.png');
  iconEmail.setAttribute('alt','envelope');
  iconBuildung.setAttribute('src','./img/buildings.png');
  iconBuildung.setAttribute('alt','envelope');
  contactName.innerHTML = contact.name;
  contactPhone.innerHTML = contact.phone;
  contactEmail.innerHTML = contact.email;
  contactAddress.innerHTML = contact.address;
  contactDescription.innerHTML = contact.description;
  closeBtn.innerHTML = '×';
  closeBtn.classList.add('close-btn');
  contactRowPhone.append(iconPhone,contactPhone);
  contactRowEmail.append(iconEmail,contactEmail);
  contactRowAddress.append(iconBuildung,contactAddress);
  contactView.append(contactName,contactRowPhone,contactRowEmail,contactRowAddress,contactDescription,closeBtn);
  root.append(contactView);
  closeBtn.addEventListener('click', hideContactView);
}

function hideContactView(event){
  event.target.parentElement.style.display = 'none';
  const items = document.querySelectorAll('.list-item');
  items.forEach((item) => item.classList.remove('item-active'));
}

