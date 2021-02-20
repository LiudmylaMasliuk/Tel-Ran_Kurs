const input = document.querySelector('.input'),
      addBtn = document.querySelector('.add_btn'),
      wrapper = document.querySelector('.wrapper');



function createRow(){
  const checkbox = document.createElement('input'),
      taskName = document.createElement('p'),
      removeBtn = document.createElement('button'),
      row = document.createElement('div');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'checkbox');
  taskName.innerHTML = `${input.value}`;
  taskName.classList.add('taskName');
  removeBtn.classList.add('remove_btn');
  removeBtn.innerHTML = 'Remove';
  row.setAttribute('class', 'row');
  row.append(checkbox, taskName, removeBtn);
  wrapper.append(row);
  input.value = '';
  
}

function done (event){
  if(event.target.classList.contains('checkbox')){
    event.target.nextElementSibling.classList.add('done');
    console.log(event.target.nextElementSibling);
    console.log(event.target);
  }
}

function remove (event){
  if(event.target.classList.contains('remove_btn')){
    event.target.parentNode.remove();

    console.log(event.target.parentNode);
    console.log(event.target);
  }
}


addBtn.addEventListener('click', createRow);
wrapper.addEventListener('click', done);
wrapper.addEventListener('click', remove);

