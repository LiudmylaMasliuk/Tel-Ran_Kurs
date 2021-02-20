const input = document.querySelector('#userInput'),
      submit = document.querySelector('#button'),
      title = document.querySelector('#title'),
      message = document.querySelector('#info'),
      box = document.querySelector('.box');

const input2 = document.createElement('input'),
      check = document.createElement('a');
check.innerHTML = 'Check'; 
check.style.cursor = 'pointer';


let word = [];
let lines = [];


submit.addEventListener('click', getWord);
submit.addEventListener('click', getLines);
submit.addEventListener('click', changeBox);
check.addEventListener('click', checkInput);


function getWord(){
  word = input.value.split('');
}

function getLines(){
  lines = word.map(item => item = '_');
}

function showLines(str){
  let lines = document.createElement('div');
  lines.innerHTML = str.split('').map(item => item = '_').join(' ');
  lines.style.cssText = 'text-align: center; font-size: 35px; margin-bottom: 30px';
  return lines;
}

function changeBox(){
  message.innerHTML = 'Write a letter'; 
  message.after(showLines(input.value));
  input.replaceWith(input2);
  submit.remove();
  box.append(check);
}

function checkInput(){
  let hidden = document.querySelector('#info').nextElementSibling;
  //let index = lines.indexOf('_');
  if(lines.includes('_')){
    for(let i = 0; i < word.length; i++){ 
      if(word[i] === input2.value){
        lines[i] = input2.value;
      }
    }
    hidden.innerHTML = lines.join(' '); 
    input2.value = '';
  }
  if(lines.indexOf('_') === -1){
    message.innerHTML = 'Super!!!';
    let endLine = document.createElement('p');
    endLine.innerHTML = 'Well done!!!';
    input2.replaceWith(endLine);
  }
}


// let num = ['k','u','k','u'];
// console.log(num.indexOf('_')); // --> -1




