'use strict';

const contacts = [
  {name:'John Doe',phone:'123456789',email:'john@mail.com',address:'Tel Aviv',desc:'Best friend'},
  {name:'Jack Sparrow',phone:'0987654321',email:'jack@mail.com',address:'Carribian Sea',desc:'Pirate'},
  {name:'Tony Stark',phone:'4566778',email:'tony@stark.com',address:'New York',desc:'IronMen'}
];

const nav = document.querySelector('.nav'),
      root = document.querySelector('#root'),
      contactView = document.createElement('div'),
      clicks = [];

let currentPageLink = nav.querySelector('a[href = "add_new"]');
contactView.classList.add('contact-view');

renderAddContact();

nav.onclick = function(event){
    event.preventDefault();
    if(event.target.tagName ==='A'){
        if(event.target.getAttribute('href') !== currentPageLink.getAttribute('href')){
            currentPageLink.classList.remove('active');
            currentPageLink = event.target;
            currentPageLink.classList.add('active');
            navigation(currentPageLink.getAttribute('href'));
        }
    }
}


/*  ***** F U N C T I O N S ***** */

function navigation(path){
  switch(path){
      case 'contacts' : renderContacts(); break;
      case 'add_new' : renderAddContact(); break;
  }
}

function renderAddContact(){
  currentPageLink.classList.add('active');
  root.innerHTML = '';
  root.className = 'add-contact';
  root.innerHTML = `
  <form name="form">
    <input class="form-control" type="text" name="name" placeholder="Type name">
    <input class="form-control" type="text" name="phone" placeholder="Type phone">
    <input class="form-control" type="text" name="email" placeholder="Type email">
    <input class="form-control" type="text" name="address" placeholder="Type address">
    <textarea class="form-control" type="text" name="description" placeholder="Type description"></textarea>
    <div class="buttons"><button class="add-btn">Add</button></div>
    </form>
  `;
  const form = document.forms.form,
        inputName = form.name,
        inputPhone = form.phone,
        inputEmail = form.email,
        inputAddress = form.address,
        inputDescription = form.description;

  form.addEventListener('submit', function(event){
    event.preventDefault();
    if(contacts.length > 0){ // let's check if this name already exists in our contacts
      contacts.forEach(function(object,index,array){
        if(object.name === inputName.value){
          alert('This name already exists. Choose another one.');
          array.splice(index,1);
        }
      });
    }
    contacts.push({
      name: inputName.value,
      phone: inputPhone.value,
      email: inputEmail.value,
      address: inputAddress.value,
      description: inputDescription.value,
    });
    contacts.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    event.target.reset();
    console.log(contacts);
  });
}


function renderContacts(){
  root.innerHTML = '';
  root.className = 'contacts';
  root.style.cssText = 'justify-content: space-between;';

  const list = document.createElement('ul');
  list.classList.add('list');
  root.append(list);

  contacts.map(function(object){
    const listItem = document.createElement('li'),
          title = document.createElement('h2'),
          subTitle = document.createElement('h3'),
          trashBucket = document.createElement('div');

    listItem.classList.add('list-item');
    title.classList.add('title');
    subTitle.classList.add('sub-title');
    trashBucket.classList.add('delete');
    title.innerHTML = object.name;
    subTitle.innerHTML = object.phone;
    
    listItem.append(title,subTitle,trashBucket);
    list.append(listItem);

    listItem.onclick = function(event){
      const personObject = contacts.find((object) => object.name === title.innerHTML);
      showContactView(personObject);
      changeBG(event);
    }
    
    title.onclick = function(event){
      event = new CustomEvent('click');
      listItem.dispatchEvent(event); // dispatch event to the parent element
    }
    subTitle.onclick = function(event){
      event = new CustomEvent('click');
      listItem.dispatchEvent(event); // dispatch event to the parent element
    }
    trashBucket.onclick = function(event){
      if(event.target.classList.contains('delete')){ // сделаем проверку и исключим родителя
        deleteObjectInArray(event);
      }
      event.stopPropagation();
    }  
  });
}

function changeBG (event){
  if(event.target.getAttribute('class') === 'list-item'){ // сделаем проверку и исключим children
    clicks.push(event.target.firstChild.innerHTML);
    if(clicks.length > 1 && event.target.firstChild.innerHTML !== clicks[clicks.length - 2]){
      event.target.classList.add('item-active');
      const names = document.querySelectorAll('.title');
      for(let i = 0; i < names.length; i++){
        if(names[i].innerHTML === clicks[clicks.length - 2])
        names[i].parentNode.classList.remove('item-active');
      }
      clicks.splice(0,1); // only the last click name remains in "clicks"
      console.log(clicks);
    }else if(clicks.length === 1){
      event.target.classList.add('item-active');
    }
  }
}


function deleteObjectInArray(event){
  const personElem = event.target.parentNode.querySelector('.title');
  contacts.map(function(object,index){
    if(object.name === personElem.innerHTML){
      contacts.splice(index,1);
      console.log(contacts);
      renderContacts();
    }
  });
}

function showContactView(object){
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

    contactName.innerHTML = object.name;
    contactPhone.innerHTML = object.phone;
    contactEmail.innerHTML = object.email;
    contactAddress.innerHTML = object.address;
    contactDescription.innerHTML = object.description;

    closeBtn.innerHTML = '×';
    closeBtn.classList.add('close-btn');

    contactRowPhone.append(iconPhone,contactPhone);
    contactRowEmail.append(iconEmail,contactEmail);
    contactRowAddress.append(iconBuildung,contactAddress);

    closeBtn.addEventListener('click', hideContactView);

    contactView.append(contactName,contactRowPhone,contactRowEmail,contactRowAddress,contactDescription,closeBtn);
    root.append(contactView);
}

function hideContactView(){
  contactView.style.display = 'none';
  const items = document.querySelectorAll('.list-item');
  items.forEach((item) => item.classList.remove('light-green'));
}


