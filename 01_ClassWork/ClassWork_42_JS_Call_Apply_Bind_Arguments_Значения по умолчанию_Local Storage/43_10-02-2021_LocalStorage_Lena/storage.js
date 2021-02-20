/* localStorage.setItem('MyKey', '1234567');

console.log(localStorage.getItem('MyKey'));
console.log(localStorage.getItem('key'));
localStorage.removeItem('MyKey');
console.log(localStorage.getItem('newKey'));

localStorage.clear(); */

const input = document.querySelector('#my_input'),
      saveBtn = document.querySelector('#saveBtn');

let count = 0;

saveBtn.onclick = function(){
    localStorage.setItem(`key_${count++}`, input.value);
}

localStorage.clear();

let xml = 
`<p1>
    <name>John</name>
    <age>23</age>
</p1>
`
let json = 
`{"name":"John","age":23}
`

let csv = 'John,23';

const p1 =  {
    name: "John",
    age: 23
}

localStorage.setItem('person', csv);

const str = localStorage.getItem('person');
const personDate = str.split(',');
const p2 = {
    name: personDate[0],
    age:parseInt(personDate[1])
}

console.log(p2);
//console.log(p1.toString());

//John,23&Jack,32&Anna,28&Lena,20&Petr,36
//[j,23][j,32][a,28][l,20][p,36]