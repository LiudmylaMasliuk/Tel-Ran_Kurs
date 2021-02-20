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
    '1333333',
    'jack@mail.com',
    'Carribian Sea',
    'Pirate',
    '#root'
));

contactsList.addContact(new Contact(
    'Tony Stark',
    '123456789',
    'tony@mail.com',
    'New York',
    'IronMen',
    '#root'
));


/* const contacts =[
    {name:'John Doe',phone:'123456789',email:'john@mail.com',address:'Tel Aviv',desc:'Best friend'},
    {name:'Jack Sparrow',phone:'0987654321',email:'jack@mail.com',address:'Carribian Sea',desc:'Pirate'},
    {name:'Tony Stark',phone:'4566778',email:'tony@stark.com',address:'New York',desc:'IronMen'}
]; */


const root = document.querySelector('#root'),
      nav = document.querySelector('.nav'),
      search = document.querySelector('.nav input'),
      searchBtn = document.querySelector('#search-btn');




let currentPage = document.querySelector('a[href = "contacts"]');

contactsList.renderContactsList();

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


/* searchBtn.onclick = function(){
    let array = contactsList.list.filter((item) => item.name.toLowerCase().startsWith(search.value.toLowerCase()));
    let result = new ContactsList('#root', array);
    result.renderContactsList();

} */

search.oninput = function(){
    let array = contactsList.list.filter((item) => item.name.toLowerCase().startsWith(search.value.toLowerCase()));
    let result = new ContactsList('#root', array);
    result.renderContactsList();
}



/* search.onchange = function(){
    let array = contactsList.list.filter((item) => item.name.toLowerCase().startsWith(search.value.toLowerCase()));
    let result = new ContactsList('#root', array);
    result.renderContactsList();
} */


root.onclick = function(event){
    if(event.target.classList.contains('close-btn')){
        const contactView = document.querySelector('.contact-view');
        contactView.innerHTML = 'No selected contact';
        contactsList.renderContactsList();
    }
};




function renderAddContact(){
    root.className = 'add-contact';
    root.innerHTML = `
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

    const form = document.forms.addContactForm;
    form.onsubmit = formSubmitHandler;
    //console.log(form.elements.phone);
}

function formSubmitHandler(e){
    e.preventDefault();
    const form = e.target;
    contactsList.addContact(new Contact(
        form.name.value,
        form.phone.value,
        form.email.value,
        form.address.value,
        form.description.value
    ));
    clearForm(form);
}

function clearForm(form){
    for(let i = 0;i < form.elements.length; i++){
       if (form.elements[i].localName !== 'button'){
           form.elements[i].value = '';
       }
    }
}
