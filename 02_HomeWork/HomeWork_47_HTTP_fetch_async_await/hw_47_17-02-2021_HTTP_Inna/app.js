const BASE_URL = 'http://contacts-telran.herokuapp.com';

function registration(email,password){
  const auth = {email, password};
  const requestBody = JSON.stringify(auth);
  return fetch(`${BASE_URL}/api/registration`, { // endpoint -- /api/registration
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: requestBody,
  }).then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error(response.status);
  });
}


function addContact(contact,token){
  const requestBody = JSON.stringify(contact);
  return fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: requestBody,
  }).then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error(response.status);
  });
}


function getAllContacts(token){
  return fetch(`${BASE_URL}/api/contact`, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json; charset=utf-8'
    }

  }).then(response =>{
    if(response.ok){
      return response.json();
    }
    throw new Error(response.status);
  });
}

function removeContact(token,id){
  return fetch(`${BASE_URL}/api/contact/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json; charset=utf-8',
    }
  }).then(response =>{
    if(response.ok){
      return response.json();
    }
    throw new Error(response.status);
  });
}

