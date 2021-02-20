/* const myBody = document.body,
      myHead = document.head,
      display = document.querySelector('#display'); */

//console.log(myHead);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
// console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
//console.log(document.querySelector('#display').parentNode.parentNode);
//console.log(document.querySelector('#display').parentElement);
//console.log(document.querySelector('.button').previousElementSibling);
//console.log(document.querySelector('.button').nextElementSibling);

/* console.log(display.attributes);
console.log(display.hasAttribute('target'));
display.setAttribute('target', 'parent');
console.log(display);
console.log(display.getAttribute('target'));
display.removeAttribute('target');
console.log(display); */

//console.log(document.querySelector('[type]'));
//console.log(display.nextElementSibling.dataset);

//console.log(document.querySelector('[data-type ="9"]'));
//const datas = document.querySelectorAll('[data-type]');
// const datas = document.querySelectorAll('.button');
// console.log(datas);

const calc = document.querySelector('#calc'),
      buttons = calc.querySelectorAll('.button'),
      display = calc.querySelector('#display');
      let str = '';


function getParameters(str,s){
    return parameters = str.split(s).map(parametr => parseFloat(parametr));
}

/* for(let i = 0; i<buttons.length; i++){
    buttons[i].onclick = function(){
        let type = this.dataset.type;
        if(type === '='){
            if(str.includes('/')){       //5678/567=
                const args = getParameters(str, '/');
                display.value = (args[0]/args[1]).toFixed(2);
            }else if(str.includes('*')){
                const args = getParameters(str, '*');
                display.value = (args[0]*args[1]).toFixed(2);
            }else if(str.includes('-')){
                const args = getParameters(str, '-');
                display.value = (args[0]-args[1]).toFixed(2);
            }else if(str.includes('+')){
                const args = getParameters(str, '+');
                display.value = (args[0]+args[1]).toFixed(2);
            }
            str = display.value;
        }else if(type === 'C'){
            str = '';
        }else{
            str += type;
        }
        display.value = str
    }
}; */

/* for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', myEvent);
    function myEvent(){
        let type = buttons[i].getAttribute('data-type');   //let type = this.dataset.type
        if(type === '='){
            str = eval(str);
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

for(let i = 0; i<buttons.length; i++){
    addEvent(buttons[i]);
}

function addEvent(button){
button.addEventListener('click', myEvent);
    function myEvent(){
        let type = button.getAttribute('data-type');   //let type = this.dataset.type
        if(type === '='){
            str = eval(str);
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