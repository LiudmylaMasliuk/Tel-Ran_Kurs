// возможность хранения каких-либо данных внутри браузера
// хранение настроек конкретной страницы
// Inspect --> Applications 


/* localStorage.setItem('MyKey', '1234');
console.log(localStorage.getItem('MyKey')); // --> 1234

// Local Storage -- не исчезнет при перезагрузке
// Session Storage -- при перезагрузке исчезнет, только на одну сессию

console.log(localStorage.getItem('key')); // --> null

localStorage.removeItem('MyKey'); // --> ok pole v Locale storage udaleno

localStorage.clear(); // очищение всего Local Storage */

const input = document.querySelector('#my_input'),
      saveBtn = document.querySelector('#saveBtn');

let count = 0;

saveBtn.onclick = function(){
  localStorage.setItem(`key_${count++}`, input.value);
}

localStorage.clear();



const p1 = {
  name: 'John',
  age: 23
}
localStorage.setItem('person', p1); // --> person [object Object]


/////////////////////////////////////////
////// для строчного хранения данных ////
/////////////////////////////////////////

// XML //

let xml = `
<p1>
  <name>John</name>
  <age>John</age>
</p1>

`;

// JSON //

let json = `
{"name": "John", "age": 23}
`;


//////////////////////////////////////////////////////
////// C O M M A    S E P A R A T O R   V A L U E ////
/////////////////////////////////////////////////////

let csv = 'John, 23';
localStorage.setItem('person', csv);

///////////////////////////////////////////////////////

const str = localStorage.getItem('person');
let personData = str.split(',');

const p2 = {
  name: personData[0],
  age: parseInt(personData[1]),
}

console.log(p2); // --> {name: "John", age: 23}