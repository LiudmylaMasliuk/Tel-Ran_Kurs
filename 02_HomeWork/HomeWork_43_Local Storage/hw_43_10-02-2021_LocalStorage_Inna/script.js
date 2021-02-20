const form = document.forms.form,
      liBox = document.querySelector('#contact-list'),
      contacts = [];

console.log(contacts);

form.onsubmit = function(event){
  event.preventDefault();
  let contact = new Contact(
    form.name.value,
    form.lastname.value,
    form.phone.value,
    form.email.value
    );

  contacts.push(contact);

  const list = new LocalStorageList(contacts);
  list.renderLocalStorage();
  form.reset();
}


liBox.onclick = function(event){
  if(event.target.localName = 'button'){
    let contact = event.target.parentNode;
    let index = contact.getAttribute('data-index');
    contacts.splice(index,1);
    contact.remove();
    const list = new LocalStorageList(contacts);
    list.renderLocalStorage();
    console.log(list);
  }
}
