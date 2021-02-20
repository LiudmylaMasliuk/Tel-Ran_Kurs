////////////////////////////////////////
////////// З А М Ы К А Н И Е //////////
///////////////////////////////////////
let a = 10;

function test(){
  let i = 10;
  let j = 5;
  return function(){
    console.log(i + j + a);
  }
}

a = 12;

//console.log(i); // error // it cannot be found outside

let func = test();
func();

for(let i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000);
}
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

for(var i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000);
}
// 10 -> 10 -> 10 -> 10 -> 10 -> 10 -> 10 -> 10 -> 10 -> 10

for(var i = 0; i < 10; i++){
  function f(j){
  setTimeout(function(){
    console.log(j);
  }, 1000);
}
f(j);
}