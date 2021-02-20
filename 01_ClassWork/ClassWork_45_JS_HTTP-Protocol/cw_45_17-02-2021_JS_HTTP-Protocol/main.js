const form = document.querySelector('#my_form'),
      getAllBtn =  document.querySelector('#getAllBtn'),
      removeBtn =  document.querySelector('#removeBtn'),
      idInput =  document.querySelector('#contact_id');

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

/* getAllContacts("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlubmFwODVAZ21haWwuY29tIn0.PJcIpbNmWBziZtAwWQ2X9XX8PEjGLjFoOcKeFB-eaeA"); */

removeBtn.onclick = function(){
  const token = localStorage.getItem('token');
  removeContact(token,idInput.value).then(body => {
    idInput.value = '';
  })
  .catch(error => {
    console.log(error);
  });
}