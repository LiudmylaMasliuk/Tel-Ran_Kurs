/// Ассинхронность ///

///////////////////////////////////////////
////////// S E T T I M E O U T ////////////
//////////////////////////////////////////

setTimeout(display, 3000, 'hello html'); // 3000 milisekund = 3 sekundi

function display(text){
  console.log(text);
}

display('hello js');

console.log('end of code!');

// Event Loop - 
// stack - туда вызываются наши методы и они там работают
// Web API - область памяти внутри браузера. Это временное хранилище для ассинхронных методов.
// Message Queue -  MQ имеют слушателей, которые следят, когда запускать метод в stack.


///////////////////////////////////////////
////////// S E T I N T E R V A L //////////
//////////////////////////////////////////

let count = 100;

let i = setInterval(function(){
  console.log(count--);
}, 1000);

setTimeout(function(){
  console.log('Time out');
  clearInterval(i);
},3000);


//////// Box animation //////////////

const btn = document.querySelector('.btn');
btn.addEventListener('click', myAnimation);

function myAnimation(){
const box = document.querySelector('.box');
let position = 0;

const id = setInterval(moveBox, 5);

function moveBox(){
  if(position === 300){
    clearInterval(id);
    position = 0;
  }
  position++;
  box.style.top = position + 'px'; // stroka i + --> vse prevrawaetsja v stroku
  box.style.left = position + 'px';
}
}


