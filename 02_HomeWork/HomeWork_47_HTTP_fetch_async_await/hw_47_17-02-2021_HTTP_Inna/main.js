const form = document.querySelector('#my_form'),
      getAllBtn =  document.querySelector('#getAllBtn'),
      removeBtn =  document.querySelector('#removeBtn'),
      idInput =  document.querySelector('#contact_id'),
      addForm = document.forms.addContactForm;

form.onsubmit = function (event){
  event.preventDefault();
  registration(event.target.email.value, event.target.password.value)
  .then(body => {
    localStorage.setItem('token', body.token);
    console.log('token', body.token);
  }).catch(error => {
    switch(error.message){
      case '409': alert('User already exists.');
      break;
      case '400': alert('Wrong email or password format.');
      break;
    }
  })
}


getAllBtn.onclick = function(){
  const token = localStorage.getItem('token');
  getAllContacts(token).then(body => console.log(body))
  .catch(error => {
    console.log(error);
  })
}


removeBtn.onclick = function(){
  const token = localStorage.getItem('token');
  removeContact(token,idInput.value)
  .then(body => {
    console.log(body);
    idInput.value = '';
  })
  .catch(error => {
    console.log(error);
  });
}

addForm.onsubmit = function(event){
  event.preventDefault();
  const token = localStorage.getItem('token');
  const contact = new Contact(
    addForm.name.value,
    addForm.lastName.value,
    addForm.address.value,
    addForm.email.value,
    addForm.phone.value,
    addForm.description.value
  );
  addContact(contact,token)
  .then(body => {
    addForm.reset();
    console.log(body)
  })
  .catch(error => {
    switch(error.message){
      case '400': alert('Wrong contact format.');
      break;
      case '401': alert('Wrong authorization.');
      break;
      case '409': alert('Duplicate contact fields! Email and phone need be unique to each contact.');
      break;
    }
  })

}

/* 
token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlubmFwODVAZ21haWwuY29tIn0.PJcIpbNmWBziZtAwWQ2X9XX8PEjGLjFoOcKeFB-eaeA"
*/