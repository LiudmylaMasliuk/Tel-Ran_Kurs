'use strict';

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      changeBtn = document.querySelector('#color');

if(localStorage.getItem('isChecked')){
  checkbox.checked = true;
}

if(localStorage.getItem('BG')==='changed'){
  form.parentElement.style.backgroundColor = 'lightblue';
  
}

checkbox.onchange = () =>{
  if(checkbox.checked){
    localStorage.setItem('isChecked', true);
  }else{
    localStorage.removeItem('isChecked');
  }
}



changeBtn.onclick = () => {
  const parent = form.parentElement;
  if(localStorage.getItem('BG')==='changed'){
    localStorage.removeItem('BG');
    parent.style.backgroundColor = 'white';

  }else{
    localStorage.setItem('BG','changed');
    parent.style.backgroundColor = 'lightblue';
  }

}
