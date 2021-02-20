const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1';

//////////////////////
/// G E T T I N G ///
/////////////////////

// по умолчанию у fetch сохранён GET

/* let promise = fetch(`${BASE_URL}/posts`); // fetch возвращает promise

promise.then(response => {
  if(response.ok){ // if success
    return response.json(); // --> promise s body
  }
  throw new Error(response.status);
}).then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
}); */


//////////////////////
/// P O S T I N G ///
/////////////////////

const post = {
  title: 'My title',
  count: 100,
};

fetch(`${BASE_URL}/posts`,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset = utf-8'
  },
  body: JSON.stringify(post),
})
.then(response => parseJSON(response))
.then(response => {
  if(response.ok){
    console.log(response.ok);
    console.log(response.body);
    return;
  }
  throw new Error(`Error: ${response.status}`);
})
.catch(error => {
  console.log(error.message);
});


function parseJSON(response){
  return new Promise(resolve => {
    response.json() // --> promise s body
    .then(json => {
      resolve({
        status: response.status,
        ok: response.ok,
        body: json,
      });
    });
  });
}

const timeout = function(time){
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

timeout(2000).then(() =>console.log('after 2 seconds'));



/////////////////////////
/////// A W A I T ///////
/////////////////////////

async function fetchPost(){
  await timeout(2000);
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  console.log(response.status, data);
}

fetchPost();