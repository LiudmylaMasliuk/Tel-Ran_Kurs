//// E V E N T  F L O A T I N G /////

const box = document.querySelector('.box'),
      item = box.querySelector('.item'),
      row = document.querySelector('.row'),
      boxItems = document.querySelectorAll('.box-item');

const click = function(e){
  // console.log(e.target); // pokazhet tolko item, esli kliknem na item
  console.log(e.currentTarget); // pokazhet item i box, kogda kliknem na item. box otobrazhaet vsplitie kotoroe peredalos na roditeljja
  console.log('click');
}

item.addEventListener('click', click);
box.addEventListener('click', click);



//row.onclick = changeBg;

// for(let i = 0; i < boxItems.length; i++){
//   boxItems[i].onclick = changeBg; 
// }


//////////////////////////
///// Захват события /////
////////////////////////// 

row.onclick = function(event){
  console.log(event); // -> MouseEvent // событие в консоль
  console.log(event.target); // -> <div class="box-item"></div> // элемент, на котором случилось событие
  console.log(event.target.classList); // //-> DOMTokenList ["box-item", value: "box-item"] //класс элемента, на котором случилось событие
  if(event.target.classList.contains('box-item')){ // сделаем проверку и исключим родителя
    event.target.style.backgroundColor = getRndColor();

  }
}


function getRndColor(){
  return `rgb(${getRnd(256)},${getRnd(256)},${getRnd(256)})`;
}
function getRnd(max){
  return parseInt(Math.random() * max);
}
function changeBg(event){
  event.target.style.backgroundColor = getRndColor();
}

/////////////////////////////////////////////////
/////////////// C L A S S L I S T ///////////////
/////////////////////////////////////////////////

const btns = document.querySelectorAll('button'),
      btnBlock = document.querySelector('.btn-block');

//console.log(btns[0].classList.length); // --> 2
//console.log(btns[0].classList); // --> klassi
//console.log(btns[0].classList.item[1]); // --> some // posmotrim vtoroj klass 
//console.log(btns[1].classList.add('red')); // dobavit klass vtoroj knopke
//console.log(btns[1].classList); // posmotrim, 4to polu4ilos (dobavilsja li novij klass)
btns[1].classList.remove('some'); // vklju4im klass some u vtoroj knopki
btns[1].classList.toggle('blue'); // viklju4im klass some u vtoroj knopki
// toggle - esli takogo klassa net, to dobavit. A esli takoj klass est, to ego uberet.

if (btns[1].classList.contains('red')){ // proverjaet est li takoj klass i vozvrawaet true ili false
  console.log('red');
}

//////// что под копотом у toggle //////////
/* btns[0].addEventListener('click', () => {
  if(!btns[1].classList.contains('red')){
    btns[1].classList.add('red');
  }else{
    btns[1].classList.remove('red');
  }
}); */
////////////////////////////////////////////

btns[0].addEventListener('click', (event) => {
  btns[1].classList.toggle('red');
  console.log(event.target);
  console.log(event.target.tagName); // tagName idet capsLock // --> BUTTON 
});

//// podvjazivaem sobitie na otdelnie knopki 
/* btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('hello!')
  })
}); */

///// podvjazivaem sobitie na roditelja ///
btnBlock.addEventListener('click', (event) => {
  if(event.target && event.target.tagName == 'BUTTON'){
    console.log('Hello');
  }
});

const btn = document.createElement('button');
btn.classList.add('red');
btnBlock.append(btn);

const btn2 = document.createElement('button');
btn2.classList.add('blue');
btnBlock.append(btn2);

const btn3 = document.createElement('button');
btn3.classList.add('blue');
btnBlock.append(btn3);







////////////////////////////////////////////