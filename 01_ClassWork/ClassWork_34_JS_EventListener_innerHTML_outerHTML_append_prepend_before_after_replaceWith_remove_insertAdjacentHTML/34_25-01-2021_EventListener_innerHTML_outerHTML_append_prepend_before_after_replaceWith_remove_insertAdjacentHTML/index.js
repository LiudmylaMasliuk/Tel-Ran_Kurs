////////////////////////////////////////////////////////
///////////// Добавление элементов ////////////////////
///////////////////////////////////////////////////////

const names = ['Ivan','Anna','Masha','Kolya','Petya','Olga'];
const ul = document.querySelector('#list'),
      addBtn = document.querySelector('#addBtn');

addBtn.onclick = function(){
  const rnd = getRnd(names.length);
   ul.innerHTML = ul.innerHTML + `<li>${names[rnd]}</li>`;
   ul.innerHTML += `<li>${names[rnd]}</li>`; // innerHTML zanovo pererisovivaet uzel ul
   ul.append(names[rnd]); // append dobavljaet v konec // ne pererisovivaet uzel
   ul.prepend(names[rnd]); // prepend dobavljaet v na4alo // ne pererisovivaet
   ul.before(names[rnd]); // before dobavljaet pered ul // ne pererisovivaet uzel
   ul.after(names[rnd]); // after dobavljaet posle ul // ne pererisovivaet uzel
   ul.replaceWith(names[rnd]); // replaceWith zamenjaet ul 
   ul.remove(names[rnd]);  // remove udaljaet

   ul.insertAdjacentHTML('beforebegin', (`<li>${names[rnd]}</li>`)); // v na4alo
   ul.insertAdjacentHTML('afterbegin', (`<li>${names[rnd]}</li>`));
   ul.insertAdjacentHTML('beforeend', (`<li>${names[rnd]}</li>`)); // v konec
   ul.insertAdjacentHTML('afterend', (`<li>${names[rnd]}</li>`)); // v konec posle ul

  
  /* let li = document.createElement('li');
  li.innerHTML = names[rnd];
  li.style.backgroundColor = getRndColor();
  ul.append(li); */

  // let row = createRow(names[rnd]);
  // ul.insertAdjacentHTML('afterbegin', row);
  ul.append(createRow(names[rnd]));

}

////////////////////////////////////////////////////////
///////////// Создание новых элементов ////////////////
///////////////////////////////////////////////////////

function createRow(name){
  let li = document.createElement('li');
  li.innerHTML = name;
  li.style.backgroundColor = getRndColor();
  // li.onclick = function(){
  //   li.style.backgroundColor = getRndColor();
  // }
  // return li.outerHTML;
  li.onclick = changeBg;
  return li;
}

function getRnd(max){
  return parseInt(Math.random() * max);
}
function getRndColor(){
  return `rgb(${getRnd(256)},${getRnd(256)},${getRnd(256)})`;
}



const box = document.querySelector('.box');
/* box.onclick = function(event){
  console.log(event); // sobitie
  console.log(event.target); // element, na kotorom sobitie slu4ilos
} */
// box.onclick = changeBg;


function changeBg(event){
  event.target.style.backgroundColor = getRndColor();
}



////////////////////////////////////////////////////////
///////////// E V E N T  L I S T E N E R /////////////
///////////////////////////////////////////////////////

// добавление совытий в EventListener
box.addEventListener('click', changeBg);
box.addEventListener('click', function(){ // anonimnij metod // na nego removeEventListener ne srabotaet // tak kak arr A = [1,2,3] !== arr B = [1,2,3]
  console.log('click');
});


// удаление совытий в EventListener
box.removeEventListener('click', changeBg);

// добавление совытий в EventListener только на один раз
box.addEventListener('click', changeBg, {once: true});