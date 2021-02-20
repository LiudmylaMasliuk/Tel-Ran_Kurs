const list = document.querySelector('#contact-list'),
      form = document.querySelector('#add-contact-form'),
      listLoader = document.querySelector('#list-loader'),
      addLoader = document.querySelector('.add-loader');
let currentContacts = [];

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;

showListLoader(false);
showAddLoader(false);
loadList();

function loadList(){
  list.style.display = 'none';
  showListLoader(true);
  const promise = Store.getAll();
  promise.then(array => { 
    showListLoader(false);
    currentContacts = array;
    list.style.display = 'block';
    renderList();
  });
}

function renderList(){
  const promise = Store.getAll();
  promise.then(array => {
    showAddLoader(false);
    currentContacts = array;
    list.innerHTML = currentContacts.map(mapToRow).join('');
  });
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
  showAddLoader(true);
  renderList();

  form.reset();
}


function showListLoader(isShow){
  listLoader.style.display = isShow ? 'block' : 'none';
}

function showAddLoader(isShow){
  addLoader.style.display = isShow ? 'inline-block' : 'none';
}
