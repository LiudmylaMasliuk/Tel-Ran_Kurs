/******* Changing font size and color *******/
const btn15 = document.querySelector('#size15'),
      btn25 = document.querySelector('#size25'),
      btn35 = document.querySelector('#size35'),
      btnRed = document.querySelector('#color_red'),
      btnGreen = document.querySelector('#color_green'),
      btnBlue = document.querySelector('#color_blue'),
      text1 = document.querySelector('.text_1');

btn15.onclick = function(){
  text1.style.fontSize = '15px';
}
btn25.onclick = function(){
  text1.style.fontSize = '25px';
}
btn35.onclick = function(){
  text1.style.fontSize = '35px';
}
btnRed.onclick = function(){
  text1.style.color = 'red';
}
btnGreen.onclick = function(){
  text1.style.color = 'green';
}
btnBlue.onclick = function(){
  text1.style.color = 'blue';
}

/******* Changing font size and color *******/
const inputSize = document.querySelector('#input_size'),
      inputColor = document.querySelector('#input_color'),
      setSize = document.querySelector('#set_size'),
      setColor = document.querySelector('#set_color'),
      text2 = document.querySelector('.text_2');

// setSize.onclick = function(){
//   text2.style.fontSize = inputSize.value;
// }
// setColor.onclick = function(){
//   text2.style.color = inputColor.value;
// }


////// S O L U T I O N from Lena //////
function updateText(){
  text2.style = `font-size: ${inputSize.value}px; color: ${inputColor.value}`;
}

setSize.onclick = updateText;
setColor.onclick = updateText;
//////////////////////////////////////


/******* Calculator *******/
const btnPlus = document.querySelector('#btn_plus'),
      btnMinus = document.querySelector('#btn_minus'),
      btnMultiply = document.querySelector('#btn_multiply'),
      btnDivide = document.querySelector('#btn_divide');


btnPlus.onclick = function(){
  let num1 = document.querySelector('#num_1_plus'),
      num2 = document.querySelector('#num_2_plus'),
      result = document.querySelector('#result_plus');
  return result.innerHTML = (Number(num1.value) + parseFloat(num2.value)); 
}
btnMinus.onclick = function(){
  let num1 = document.querySelector('#num_1_minus'),
      num2 = document.querySelector('#num_2_minus'),
      result = document.querySelector('#result_minus');
  return result.innerHTML  = (Number(num1.value) - parseFloat(num2.value)); 
}
btnMultiply.onclick = function(){
  let num1 = document.querySelector('#num_1_multiply'),
      num2 = document.querySelector('#num_2_multiply'),
      result = document.querySelector('#result_multiply');
  return result.innerHTML  = (Number(num1.value) * parseFloat(num2.value)); 
}
btnDivide.onclick = function(){
  let num1 = document.querySelector('#num_1_divide'),
      num2 = document.querySelector('#num_2_divide'),
      result = document.querySelector('#result_divide');
      if(num2.value == 0){
      result.classList.toggle('warning');
      result.textContent = 'You cannot divide by 0.';
      return result;
      }
  result.classList.remove('warning');
  result.textContent = (Number(num1.value) / Number(num2.value)).toFixed(1); 
  return result;
}


/******* Click *******/
const click = document.querySelector('#click_btn');
let countClicks = 0;

click.onclick = function(){
  countClicks++;
  return document.querySelector('.count_clicks').innerHTML = `click: ${countClicks}`;
}



/******* Palindrome *******/
// const btnCheck = document.querySelector('#btn_pal');

// btnCheck.onclick = function(){
//   let input = document.querySelector('#input_pal'),
//       output = document.querySelector('#output_pal');
//   output.textContent = isPalindrom(input.value);
// }

// function isPalindrom(value){
//   value = value.toLowerCase().replace(/ /g,'');
//   return value === value.split('').reverse().join('');
// }

////// S O L U T I O N from Lena //////
const btnCheck = document.querySelector('#btn_pal');
let input = document.querySelector('#input_pal'),
    output = document.querySelector('#output_pal');

function getPalindrom(value){
  value = value.toLowerCase();
  for(let i=0, j=value.length-1; i<j; i++, j--){
    if(value[i] !== value[j]){  //(value.charAt(i) !== value.charAt(j)) // esli indeksa net, to charAt vernet pustotu, a esli mi budem obrawatsja po indeksu, to vernet undefined
      return false;
    }
  }
  return true;
}

btnCheck.onclick = function(){
  if(getPalindrom(input.value)){
    output.innerHTML = 'Palindrom!';
    output.style.color = 'red';
  } else{
    output.innerHTML = 'Not a palindrom!';
    output.style.color = 'red';
  }
  
}

/******* Gallery *******/

const content = [
  "./images/animals.jpg",
  "./images/bear.jpg",
  "./images/belka.jpg",
  "./images/birds.jpg",
  "./images/birdsMore.jpg",
  "./images/fish.jpg",
  "./images/fishingB.jpg",
  "./images/frogs.jpg",
  "./images/hunting.jpg",
  "./images/insect.jpg",
  "./images/monkey.jpg",
  "./images/suslik.jpg",
];
// content.length = 12;
// the last index = 11;



const wind = document.querySelector('#window'),
    btnNext = document.querySelector('#next'),
    btnPrev = document.querySelector('#prev');

let index = 0;
wind.style.backgroundImage = `url(${content[index]})`;

btnNext.onclick = function(){ 
  if(index >= content.length-1){ // from the last img and further
    index = -1; // reset index at -1
    console.log(index);
  } 
  index++; // -1 + 1 = 0 // --> again the 1st img
  console.log(index);
  return wind.style.backgroundImage = `url(${content[index]})`;
}
// [1]->[2]->[3]->...->[11]->[-1]->[0]->[1]->[2]->[3]->...


btnPrev.onclick = function(){
  if(index <= 0){ // from the 1st img and earlier
    index = content.length; // reset index at 12
    console.log(index);
  } 
  index--; // 12 - 1 = 11 // again the last img
  console.log(index);
  return wind.style.backgroundImage = `url(${content[index]})`;
}
// [12]->[11]->[10]->...[0]->[12]->[11]->[10]->...[0]->[12]->[11]->[10]->...










      