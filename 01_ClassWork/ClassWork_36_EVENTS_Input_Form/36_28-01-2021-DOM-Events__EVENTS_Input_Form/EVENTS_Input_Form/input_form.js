//////////// input //////////////

const input = document.querySelector('#myInput');

console.log(input);

// input.onchange = function(event){
//   console.log(event.target.value);
// };


/////////////////////////////////
///////// O N I N P U T /////////
/////////////////////////////////

// input.oninput = function(event){
//   console.log(event.target.value);
// };

/////////////////////////////////
///////// O N F O C U S /////////
/////////////////////////////////
// input.onfocus = handlerEvent;


/////////////////////////////////
///////// O N B L U R //////////
/////////////////////////////////
// input.onblur  = handlerEvent;


/////////////////////////////////
/////////// F O C U S ///////////
/////////////////////////////////

input.focus(); // zadaem focus po umol4aniju


function handlerEvent(event){
  event.preventDefault(); // P R E V E N T D E F A U L T otmeni ego povedenie po umol4aniju
  console.log(event);
  console.log(event.target.elements); // pokazhi elementi togo elementa, na kotorom sobitie
  console.log(event.target.elements[0]);
  console.log(event.target.email);
  console.log(event.target.email.value);
}

/////////////////////////////////////
///////// O N K E Y D O W N /////////
/////////////////////////////////////
input.onkeydown = function(event){
  if(event.keyCode === 13){ // esli nazhimaem enter
    console.log(event.target.value);
  }

}



////////////////////////////////
//////////// form //////////////
///////////////////////////////


/////////////////////////////////////
/////////// O N S U B M I T /////////
/////////////////////////////////////


const form = document.querySelector('#myForm'),
      link = document.querySelector('a');

form.onsubmit = handlerEvent;

link.onclick = function(event){
  event.preventDefault(); // P R E V E N T D E F A U L T
  alert('no google');
}

//////////////////////////////////////////////
//////////// Forms HTMLCollection ////////////
//////////////////////////////////////////////
console.log(document.forms); // pokazhi HTMLCollection s forms
console.log(document.forms[0]); 
console.log(document.forms.subscribe); 