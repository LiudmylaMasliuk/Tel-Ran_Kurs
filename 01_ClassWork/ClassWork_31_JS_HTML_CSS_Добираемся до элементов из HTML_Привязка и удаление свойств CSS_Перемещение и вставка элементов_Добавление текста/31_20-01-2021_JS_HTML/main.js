
// Добираемся до элементов из HTML
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), // HTMLCollection (no array methods)
      circle = document.getElementsByClassName('circle'),

      square = document.querySelectorAll('.square'), // NodeList (with array methods)
      oneSquare = document.querySelector('.square'), // the 1st element (= the 1st entry)
      title = document.querySelector('h1'),
      wrapper = document.querySelector('.wrapper');


console.dir(box); // <-- справка-отчёт
// console.log(box);
// console.log(btns[0]);
// console.log(square);


// square.forEach(item => console.log(item));
// console.log(oneSquare);



//// Перевод в массив /////
const elements = Array.from(circle);
console.log(elements);



//////////////////////////////////////////////////
//// Изменение CCS свойств через Camel Case //////
//////////////////////////////////////////////////
//
// стили из JS - приоритетнее!!!
//
box.style.backgroundColor = 'blue';
box.style.width = '400px';

btns[1].style.borderRadius = '50%';

box.style.cssText = 'background-color: orange; width: 100px'; //  4erez cssText

const color = 'red';
circle[0].style = `background-color: ${color}`;

for(index = 0; index < square.length; index++){
  square[index].style.backgroundColor = 'red';
}




/////////////////////////////////////////////////////
/////// Привязка и удаление свойств CSS /////////////
/////////////////////////////////////////////////////

// title.className = 'title active'; // привязываем к CSS (в html у h1 нет класса)

title.classList.toggle('active'); /// ВКЛ свойство из CSS
title.classList.add('title'); /// добавление свойства из CSS
title.classList.toggle('active'); // ВЫКЛ свойство из CSS
title.classList.remove('title'); /// удаление свойства из CSS


////////////////////////////////////////////////
////////////// Добавление элементов ///////////
///////////////////////////////////////////////

const div = document.createElement('div');
div.classList.add('black'); // добавляем свойство из CSS
document.body.append(div); // указываем место размещения // appendChild

document.querySelector('.wrapper').append(div); // ещё без переменной  wrapper
wrapper.append(div); // уже с переменной wrapper
wrapper.prepend(div); // добавление в начало


/////////////////////////////////////////////
///// Перемещение и вставка элементов ///////
////////////////////////////////////////////

square[0].before(div);
square[1].after(div);



/////////////////////////////////
///// Удаление элементов ///////
/////////////////////////////////

circle[0].remove();


////////////////////////////////////////////
//////// Замещение другим элементом ///////
///////////////////////////////////////////

square[0].replaceWith(circle[0]);


////////////////////////////////////
/////// Добавление текста /////////
///////////////////////////////////

//div.innerHTML = '<h1>hello world</h1>';
div.textContent = 'hello world!';
div.insertAdjacentHTML('beforebegin','<h2>hello world</h2>');


