const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1';

let xhr = new XMLHttpRequest();
// один запрос - одно соединение - новый объект реквеста <-- это старый способ 

xhr.open('GET',`${BASE_URL}/posts`);
xhr.send();
// xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json; charset = utf-8');

xhr.onload = () => {
  if(xhr.status >= 200 && xhr.status < 300){
    console.log(`Status: ${xhr.status}`); // --> Status: 200
    console.log(xhr.response);
  }else{
    console.log(`Error: ${xhr.status}`);
  }
}

/* xhr.open('POST',`${BASE_URL}/posts`);

xhr.responseType = 'json';

const post = {
  title: 'My title',
  count: 100,
}

xhr.send(JSON.stringify(post));

xhr.onload = () => {
  console.log(`Status: ${xhr.status}`); // --> Status: 201
  console.log(xhr.response);
} */

xhr.onerror = () =>{
  console.log('Error!');
}