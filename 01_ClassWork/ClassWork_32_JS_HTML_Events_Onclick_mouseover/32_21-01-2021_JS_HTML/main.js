const box = document.querySelector('#box');

console.log(box.innerHTML);

box.innerHTML = '<b>Hello from JS</b>';
console.log(box.outerHTML);

// esli est roditel, to mozhno ssuzit poisk i ne pisat document
// roditel v box, b - rebenok
const b = box.querySelector('b');

b.outerHTML = `<h1>${box.innerHTML}</h1>`; // ne pereter, a zavernul



///////////////////////////////////////////
/////////////// E V E N T S ///////////////
///////////////////////////////////////////

const one = document.querySelector('.one'),
      two = document.querySelector('.two'),
      three = document.querySelector('#three'),
      btnChangeSize = document.querySelector('#size30'),
      topText = document.querySelector('.topText'),
      btnSizeReset = document.querySelector('#size15'),
      button = document.querySelector('#send'),
      mySelect = document.querySelector('#mySelect');
      


/////////////////////////////////
///////// O N C L I C K /////////
/////////////////////////////////

// ranwe v html pisali tak:
/* <button onclick="console.log('Click')">click on me</button> */
one.onclick = function(){
  console.log('clicked');
  one.style.backgroundColor = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
}

function getRandom(){
  return parseInt(Math.random() * 256);
}

//////////////////////////////////////////////////////////
//// O N M O U S E O V E R ///// O N M O U S E O U T ////
//////////////////////////////////////////////////////////

two.onmouseover = function(){
  two.style.backgroundColor = 'lightblue';
}
two.onmouseout = function(){
  two.style.backgroundColor = 'lightcoral';
}
three.onmouseover = function(){
  three.style.cssText = 'width: 100px; height: 100px';
}
three.onmouseout = function(){
  three.style.cssText = 'width: 200px; height: 200px';
}


/// changing font size with two buttons ///

btnChangeSize.onclick = function(){
  topText.style.fontSize = '1.5rem';
}

btnSizeReset.onclick = function(){
  topText.style.fontSize = '1em';
}


/// input // value ///

button.onclick = function(){
  const firstName = document.querySelector('#firstName').value,
        lastName = document.querySelector('#lastName').value;
  document.querySelector('#input').textContent = `Hello! My name is ${firstName} ${lastName}.`
}

//////////////////////////////////////////////////////////
//////////////////// O N C H A N G E /////////////////////
//////////////////////////////////////////////////////////
/// select a car ///
mySelect.onchange = function(){
  // const demo = document.querySelector('#demo');
  // demo.innerHTML = `You selected ${mySelect.value}`;

  return document.querySelector('#demo').innerHTML = `You selected ${mySelect.value}`;
}