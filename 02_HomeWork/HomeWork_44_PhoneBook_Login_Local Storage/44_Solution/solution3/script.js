const state = {
    email: null,
    location: null,
    contacts: [],
};

setUp();

function setUp(){
    const currentUser = Store.getCurrentUser();
    if(!currentUser){
        navigation('login');
        return;
    }
    state.email = currentUser;
    state.contacts = Store.getAllContacts(state.email);
    // state.contacts = Store.getAllContacts(currentUser);
    navigation('contacts');
}

function navBarView(isAuth,location,navigation){ // isAuth = true/false
    const nav = document.createElement('div');
    nav.className = 'nav';
    nav.innerHTML = `
    <ul>
        ${
            isAuth ? `
            <li><a href="contacts" ${location === 'contacts' ? 'class="active"' : ""}>Contacts</a></li>
            <li><a href="add" ${location === 'add' ? 'class="active"' : ""}>Add new contact</a></li>
            <li><a href="logout" ${location === 'logout' ? 'class="active"' : ""}>log out</a></li>
            `:`<li><a href="login">log in</a></li>`
        }
    </ul>
    `;
    nav.onclick = (e) => {
        e.preventDefault();
        if(e.target.tagName = 'A'){
            navigation(e.target.getAttribute('href'));
        }
    }
    return nav;
}


function navigation(path){
    if(path !== state.location){
        if(path === 'logout'){
            Store.removeCurrentUser();
            state.email = null;
            state.contacts = [];
            state.location = 'login';
        }else{
            state.location = path;
        }
    }
    app();
} 

function app(){
    const root = document.querySelector('#root');
    root.innerHTML = '';
    root.append(navBarView(state.email !== null, state.location, navigation));
    root.append(document.createElement('hr'));
    const div = document.createElement('div');
    root.append(div);
    if(state.location === 'login'){
        div.className = 'add-contact';
        div.innerHTML = renderLogin();
        document.forms.loginForm.onsubmit = loginSubmitHandler;
    }else if(state.location === 'contacts'){
        div.className = 'contacts';
        div.innerHTML = renderList(state.contacts);
        div.querySelector('.list').onclick = contactClickHandler;
    }else if (state.location === 'add'){
        div.className = 'add-contact';
        div.innerHTML = renderAddContact();
        document.forms.addContactForm.onsubmit = formSubmitHandler;
    }else if(state.location === 'logout'){
        div.className = 'add-contact';
        div.innerHTML = renderLogin();
        document.forms.loginForm.onsubmit = loginSubmitHandler;
    }
}



function renderLogin(){
    return `
    <form name = "loginForm" action="#">
       <input
         id="login"
         class="form-control"
         type="text"
         name="login"
         placeholder="Type login"
       />
       <input
         id="password"
         class="form-control"
         type="password"
         name="phone"
         placeholder="Type password"
       />
       <div class="buttons">
       <button class="sign-up-btn">sign up</button>
       <button class="add-btn">log in</button>
       </div>
     </form>
    `;
}

function loginSubmitHandler(event){
    event.preventDefault();
    const form = event.target;
    const user = {};
    user.email = form.login.value;
    user.password = form.password.value;
    let registrationSuccess = true;
    try{
        Store.login(user);
    }catch(error){
        console.log(error.message);
        try{
            Store.registration(user);
        }catch{
            alert(error.message);
            registrationSuccess = false;
        }
    }finally{
        form.reset();
    }
    if(registrationSuccess){
        state.email = user.email;
        state.location = 'contacts';
        state.contacts = Store.getAllContacts(user.email);
        setUp();
    }
}



function renderList(list){
    return `
     <ul class="list">
         ${list.map(mapToContactRow).join('')}  
     </ul>
     <div class="contact-view">No selected contact</div>
    `; 
}

function mapToContactRow(contact,index){
    return `
    <li class = 'list-item' data-index = ${index}>
        <h2 class = 'title'>${contact.name}</h2>
        <h3 class = 'sub-title'>${contact.phone}</h3>
        <div class = 'delete'></div>
    </li>`;  
}

function contactClickHandler(e){
    let li = e.target;
    if(li.classList.contains('delete')){
        li = e.target.parentNode;
        li.classList.remove('item-active');
        Store.deleteContact(state.email, li.dataset.index);
        state.contacts = Store.getAllContacts(state.email);
        if(state.contacts === 0){
            localStorage.removeItem(state.email);
        }
        app();
    }else{
        if(li.tagName !== 'LI'){
            li = e.target.parentNode;
        }
        root.querySelectorAll('li').forEach((item)=>item.classList.remove('item-active'));
        const contact = state.contacts[li.dataset.index];
        document.querySelector('.contact-view').innerHTML = `
            <h2>${contact.name}</h2>
            <div class="contact-view-row">
                <img src="../img/technology.png" alt="" />
                <h3>${contact.phone}</h3>
            </div>
            <div class="contact-view-row">
                <img src="../img/multimedia.png" alt="" />
                <h3>${contact.email}</h3>
            </div>
            <div class="contact-view-row">
                <img src="../img/buildings.png" alt="" />
                <h3 ">${contact.address}</h3>
            </div>
            <p>${contact.description}</p>
        `;
        li.classList.add('item-active');
    }
}


function renderAddContact(){
    return `
    <form name = "addContactForm" action="#">
       <input
         id="inputName"
         class="form-control"
         type="text"
         name="name"
         placeholder="Type name"
       />
       <input
         id="inputPhone"
         class="form-control"
         type="text"
         name="phone"
         placeholder="Type phone"
       />
       <input
         id="inputEmail"
         class="form-control"
         type="text"
         name="email"
         placeholder="Type email"
       />
       <input
         id="inputAddress"
         class="form-control"
         type="text"
         name="address"
         placeholder="Type address"
       />
       <textarea
       id="inputDesc"
         class="form-control"
         type="text"
         name="description"
         placeholder="Type description"
       ></textarea>
       <div class="buttons"><button class="add-btn">Add</button></div>
     </form>
    `;
}

function formSubmitHandler(e){
    e.preventDefault();
    const form = e.target;
    if(!formValidation(form)){
    const result = Store.addContact(state.email, new Contact(
       form.name.value,
       form.phone.value,
       form.email.value,
       form.address.value,
       form.description.value
    ));
    if(result){
        showSuccess(form.name.value);
        state.contacts = Store.getAllContacts(state.email);
    }
    else{
        showError(`Contact ${form.name.value} already exists`);
    }
    form.reset();
    }
}


/// Validation ///
function formValidation(form){
    let hasErrors = false;
    for(let i= 0; i< form.elements.length; i++){
        if(form.elements[i].localName !== 'button'){
            form.elements[i].classList.remove('is-invalid');
            if(form.elements[i].value.trim() ===''){
                form.elements[i].classList.add('is-invalid');
                hasErrors = true;
            }
        }
    }
    if(hasErrors){
        showError('All fields should be fill!');
    }
    return hasErrors;
}

function showSuccess(name){
    let div = root.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        root.prepend(div);
    }
    div.className = 'alert alert-success';
    div.innerHTML = `Contact ${name} was added`;
}

function showError(error){
    let div = root.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        root.prepend(div);
    }
    div.className = 'alert alert-danger';
    div.innerHTML = error;
}


//// Search ////
/* searchInput.oninput = function(){
    const filterContacts = Store.getAll().filter((item)=>
    item.name.toLowerCase().startsWith(searchInput.value.toLowerCase()));
    renderList(filterContacts);
    root.querySelector('.list').onclick = function(e){
        let li = e.target;
        if(li.classList.contains('delete')){
            li.classList.remove('item-active');
            filterContacts.splice(li.dataset.index,1);
            renderList(filterContacts); 
    }else{
        if(li.tagName !== 'LI'){
            li= e.target.parentNode;
        }
        root.querySelectorAll('li').forEach((item)=>item.classList.remove('item-active'));
        const contact = filterContacts[li.dataset.index];
        document.querySelector('.contact-view').innerHTML = contact.renderContactView();
        li.classList.add('item-active')
    }
    }; 
} */

