const inputText = document.querySelector('#inputText'),
      addBtn = document.querySelector('#addBtn');


let todoArr = []; 
/* 
[
  {title: 'read a book', done: false},  // --> todo
  {title: 'wash hands', done: false},   // --> todo
  {title: 'watch a film', done: false}, // --> todo
]  
*/


function renderAll(selector, array){
  const elem = document.querySelector(selector);
  if(elem){
    elem.innerHTML = '';
    array.forEach(function(item){
      elem.append(item);
    });
  }
}


function mapStringToElement(todo, index){ // todo - eto object 
  const li = document.createElement('li'),
        checkbox = document.createElement('input'),
        title = document.createElement('h2'),
        button = document.createElement('button');
li.className = 'list-group-item d-flex align-items-center'; 


checkbox.type = 'checkbox';
checkbox.className = 'col-1';
title.className = 'col-9';
checkbox.checked = todo.done;
title.innerText = `${todo.title}`;
button.className = 'col-2 btn btn-danger';
button.innerText = 'Remove';

button.onclick = function(){
  todoArr.splice(index,1);
  renderAll('#todoList', todoArr.map(mapStringToElement)); // pererisuem elementi
}

checkbox.onchange = function(){
  todoArr[index].done = checkbox.checked;
  title.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

li.append(checkbox);
li.append(title);
li.append(button);

return li; // return li.outerHTML; --> '<li><input><h2>title</h2><button>Remove</button></li>   '
}

addBtn.onclick = function(){
  const input = inputText.value;
  if(input){
    todoArr.push({title: input, done: false}); // pushim uzhe kak objekt
    // todoArr.map(item => item.toUpperCase()) -> 
    renderAll('#todoList', todoArr.map(mapStringToElement));
    inputText.value = '';
  }
}