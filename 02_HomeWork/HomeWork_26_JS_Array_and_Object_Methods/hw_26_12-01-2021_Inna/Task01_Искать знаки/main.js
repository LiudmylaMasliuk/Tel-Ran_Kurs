/*  Task01
    'background-color' -> backgroundColor; [background] [color]
    'list-style-image' -> listStyleImage; 
*/

let input1 = 'background-color';
let input2 = 'list-style-image'; 



/* function changeString(str){
  const words = str.split('-'); // --> [list] [style] [image]
  for(let i = 1; i < words.length; i++){
    words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1); // --> [list] [Style] [Image]
  }
  return words.join(''); // list + Style + Image
} */

function changeString(str){
  return str.split('-').map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

console.log(changeString(input1));
console.log(changeString(input2));



function changeStr(str){
  return str.split('-').map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
}
console.log(changeStr('list-style-image'));