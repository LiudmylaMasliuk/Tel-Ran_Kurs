const calc = document.querySelector('.calc'),
      buttons = calc. querySelectorAll('.button'), // ищем уже в родителе calc
      display = calc.querySelector('#display'); // ищем уже в родителе calc
let str = '';


function getParameters(str,symbol){
  return parameters = str.split(`${symbol}`).map(parametr => parseFloat(parametr));
}

/* for(let i = 0; i < buttons.length; i++){
  buttons[i].onclick = function(){
    let type = this.dataset.type;
    if(type === '='){
      if(str.includes('/')){    // 5678/54 =
        const args = getParameters(str, '/');
        display.value = (args[0] / args[1]).toFixed(2);
      }else if(str.includes('*')){
        const args = getParameters(str, '*');
        display.value = (args[0] * args[1]).toFixed(2);
      }else if(str.includes('-')){
        const args = getParameters(str, '-');
        display.value = (args[0] - args[1]).toFixed(2);
      }else if(str.includes('+')){
        const args = getParameters(str, '+');
        display.value = (args[0] + args[1]).toFixed(2);
      }
      str = display.value;
    }else if(type === "C"){
      str = '';
    }else{
      str += type;
    }
    display.value = str;
  }
} */

/* for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', myEvent);
  function myEvent(){
    let type = buttons[i].getAttribute('data-type'); // == let type = this.dataset.type;
    if(type === '='){
      str = eval(str); /// E V A L
      display.value = str;
      return;
    }else if(type === 'C'){
      str = '';
    }else{
      str += type;
    }
    display.value = str;
  }
} */


for(let i = 0; i < buttons.length; i++){
  addEvent(buttons[i]);
}
  

  function addEvent(button){
    button.addEventListener('click', myEvent);
    function myEvent(){
      let type = button.getAttribute('data-type'); // == let type = this.dataset.type;
      if(type === '='){
      str = eval(str); /// E V A L
      display.value = str;
      return;
    }else if(type === 'C'){
      str = '';
    }else{
      str += type;
    }
    display.value = str;
  }
}

    