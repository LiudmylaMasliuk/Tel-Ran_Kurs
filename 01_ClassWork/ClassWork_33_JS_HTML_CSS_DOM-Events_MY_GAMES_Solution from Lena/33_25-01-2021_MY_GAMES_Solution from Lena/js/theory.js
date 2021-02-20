const myBody = document.body,
      myHead = document.head;

// console.log(myHead);    
// console.log(document.documentElement);

// console.log(document.body.childNodes);

// Все элементы являются узлами, но не все узлы - это элементы.
// Коментарии это тоже узлы



/////// Родители и дети ///////

// console.log(document.body.childNodes);
// console.log(document.body.firstChild); // какой узел является первым ребёноком
// console.log(document.body.lastChild); // какой узел является последним ребёноком

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#display').parentNode); // какой узел является родителем
console.log(document.querySelector('#display').parentNode.parentNode); // какой узел является родителем родителя

console.log(document.querySelector('#display').parentElement);



/////// Соседи ///////

console.log(document.querySelector('.button').previousElementSibling); //  предыдущий сосед
console.log(document.querySelector('.button').nextElementSibling); // следующий сосед



///// Показать все атрибуты /////
const display = document.querySelector('#display');
console.log(display.attributes); // calculator.js:38 NamedNodeMap {0: id, 1: type, id: id, type: type, length: 2}


///// Есть ли какой-то атрибут /////
console.log(display.hasAttributes('target')); // false


///// Установить атрибут для элемента /////
display.setAttribute('target', 'parent');

///// Получить значение атрибута для элемента /////
console.log(display.getAttribute('target'));

///// Удалить атрибут у элемента /////
display.removeAttribute('target')
//console.log(display);


///// Идентификация элемента по атрибуту /////
console.log(document.querySelector('[type]'));



/////////////////////////////////////////////
/////  Data Attributes //// как маркеры /////
/////////////////////////////////////////////

//<div class="button" data-type="7">7</div>

console.log(display.nextElementSibling.dataset);
/* DOMStringMap {type: "C"}
type: "C"
__proto__: DOMStringMap */

console.log(document.querySelector('[data-type="9"]'));
const datas = document.querySelectorAll('[data-type]');
const datas = document.querySelectorAll('.button');
console.log(datas);

