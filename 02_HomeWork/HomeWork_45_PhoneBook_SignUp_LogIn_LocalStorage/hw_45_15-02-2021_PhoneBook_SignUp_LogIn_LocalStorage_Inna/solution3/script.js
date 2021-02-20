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
    <div class="search" style="display:none;">
          <input type="text" name = "search"/>
          <img src="./../img/search-13-128.png" alt="search" id = "search-btn">
        </div>
      </div>
    `;
    nav.onclick = (event) => {
        event.preventDefault();
        if(event.target.tagName === 'A' && event.target.tagName !== 'INPUT'){
            navigation(event.target.getAttribute('href'));
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
        document.querySelector('.search').style.display = 'flex';
        const searchInput = document.querySelector('input');
        searchInput.oninput = function(event){
            const filterContacts = Store.getAllContacts(state.email).filter(item =>
            item.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
            console.log(filterContacts);
            div.innerHTML = renderList(filterContacts);
        }
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
    console.log(event.submitter);
    const user = {};
    const form = event.target;
    const submitter = event.submitter;
    user.email = form.login.value;
    user.password = form.password.value;
    let registrationSuccess = true;
    if(submitter.classList.contains('add-btn')){
        try{
            Store.login(user);
        }catch(error){
            showError(error.message);
            registrationSuccess = false;
        }finally{
            form.reset();
        }
    }else if(submitter.classList.contains('sign-up-btn')){
        try{
            Store.registration(user);
        }catch(error){
            showError(error.message);
            registrationSuccess = false;
        }finally{
            form.reset();
        }
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

function contactClickHandler(event){
    let li = event.target;
    if(event.target.classList.contains('delete')){
        li = event.target.parentNode;
        li.classList.remove('item-active');
        Store.deleteContact(state.email, li.dataset.index);
        state.contacts = Store.getAllContacts(state.email);
        if(state.contacts === 0){
            localStorage.removeItem(state.email);
        }
        app();
    }else{
        if(li.tagName !== 'LI'){
            li = event.target.parentNode;
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
        let result = true;
        try{
            const contact = Store.addContact(state.email, new Contact(
                form.name.value,
                form.phone.value,
                form.email.value,
                form.address.value,
                form.description.value
                ));
            state.contacts = Store.getAllContacts(state.email);
            result = true;
        }catch(error){
            showError(error.message);
            result = false;
        }finally{
            form.reset();
        }
        if(result){
            showSuccess(form.name.value); 
        }
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
    const form = document.querySelector('form');
    let div = form.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        form.prepend(div);
    }
    div.className = 'alert alert-success';
    div.innerHTML = `Contact ${name} was added`;
}

function showError(error){
    const form = document.querySelector('form');
    let div = form.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        form.prepend(div);
    }
    div.className = 'alert alert-danger';
    div.innerHTML = error;
}


