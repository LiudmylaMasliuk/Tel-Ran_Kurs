
const inputText = document.querySelector('#inputText'),
      addBtn = document.querySelector('#addBtn');


let todoArr = []; 
// [read a book, watch a film, ..., ..., ...] 


function renderAll(selector, array){
  const elem = document.querySelector(selector);
  if(elem){
    elem.innerHTML = '';
    array.forEach(function(item){
      elem.append(item);
    });
  }
}



// --> [ <li>read a book</li>, <li>watch a film</li>, <li>watch a film</li>]
function mapStringToElement(str, index){
  const li = document.createElement('li'),
        checkbox = document.createElement('input'),
        title = document.createElement('h2'),
        button = document.createElement('button');
li.className = 'list-group-item d-flex align-items-center'; 
// li.classList.add('list-group-item', 'd-flex', 'align-items-center');

checkbox.type = 'checkbox';
checkbox.className = 'col-1';
title.className = 'col-9';
title.innerText = str; // innerText kak textContent
button.className = 'col-2 btn btn-danger';
button.innerText = 'Remove';

button.onclick = function(){
  todoArr.splice(index,1);
  renderAll('#todoList', todoArr.map(mapStringToElement)); // pererisuem elementi
}

checkbox.onchange = function(){
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
    todoArr.push(input);
    // todoArr.map(item => item.toUpperCase()) -> 
    renderAll('#todoList', todoArr.map(mapStringToElement));
    inputText.value = '';
  }
}