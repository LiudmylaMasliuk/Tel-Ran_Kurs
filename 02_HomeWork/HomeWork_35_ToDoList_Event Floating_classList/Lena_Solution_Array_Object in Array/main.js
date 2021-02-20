const inputText = document.querySelector('.inputText'),
      addBtn = document.querySelector('.addBtn'),
      list = document.querySelector('.list');



addBtn.onclick = function(){
  const li = document.createElement('li');
  li.innerHTML = inputText.value;

  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'remove';
  li.append(removeBtn);

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  li.prepend(checkBox);

  removeBtn.onclick = function(){
    li.remove();

    checkBox.onchange = function(){
      list.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    }
  }

  list.append(li);
  inputText.value = '';

}