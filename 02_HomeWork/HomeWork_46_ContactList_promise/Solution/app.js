const list = document.querySelector('#contact-list'),
      form = document.querySelector('#add-contact-form'),
      listLoader = document.querySelector('#list-loader'),
      addLoader = document.querySelector('#add-loader');

let currentContacts = [];      

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;

showListloader(false);
showAddloader(false);
loadList();

function loadList(){
    list.style.display = 'none';
    showListloader(true);
    Store.getAll().then(res =>{
        showListloader(false);
        currentContacts = res;
        list.style.display = 'block';
        renderList();
    });
}

function renderList(){
    list.innerHTML = currentContacts.map(mapToRow).join('');
}

function onRemoveContactHandler(e){
    if(e.target.tagName ==='BUTTON'){
        const index = parseInt(e.target.dataset.index);
        Store.remove(index).then(()=>{
            currentContacts.splice(index,1);
            renderList();
        });
    }
}

function onAddContactHandler(e){
    e.preventDefault();
    showAddloader(true);
    const formElements = e.target.elements;
    for(let i = 0; i < formElements.length; i++){
        formElements[i].disabled = true;
    }
    const form = e.target;
    const contact = new Contact(
        form.name.value,
        form.lastname.value,
        form.phone.value,
        form.email.value
    );
    Store.save(contact).then(()=>{
        showAddloader(false);
        for(item of formElements){item.disabled = false;}
        currentContacts.push(contact);
        renderList();
        form.reset();
    });
}

function mapToRow(contact, index){
    return`
    <li class="list-group-item d-flex w-100">
        <div class="flex-grow-1">
            <h2 class="m-0">${contact.name} ${contact.lastName}</h2>
            <h4 class="m-0">${contact.phone}</h4>
            <p class="m-0">${contact.email}</p>
        </div>
        <button class="btn btn-danger align-self-center" data-index="${index}">
            remove
        </button>
    </li>   
    `;
}

function showListloader(isShow){
    listLoader.style.display = isShow ? 'block' : 'none';
}

function showAddloader(isShow){
    addLoader.style.display = isShow ? 'block' : 'none';
}
