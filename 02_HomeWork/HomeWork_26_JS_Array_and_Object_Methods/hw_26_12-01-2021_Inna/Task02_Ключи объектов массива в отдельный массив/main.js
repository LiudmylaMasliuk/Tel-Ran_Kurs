/*  Вынимаем ключи из объектов
    (которые являются элементами массива)
    и сохраняем их в отдельный массив*/

const users = [
  {Pete: 20},
  {Anna: 15},
  {Kate: 35},
  {Michael: 25},
];


function getNamesArray(array){
  let temp = [];
  for (let i = 0; i < array.length; i++){
    let name = Object.keys(array[i]);   // ['Pete'] --> ['Anna'] --> ['Kate'] --> ['Michael']
    temp.push(...name);   // 'Pete' --> 'Anna' --> 'Kate' --> 'Michael'
    // temp = temp.concat(name);
  }
  return temp;
}
  
let usersNames = getNamesArray(users);
console.log(usersNames); // --> [ 'Pete', 'Anna', 'Kate', 'Michael' ]


console.log(users); // --> [ { Pete: 20 }, { Anna: 15 }, { Kate: 35 }, { Michael: 25 } ]


const users = [
  {name: 'Kate', age: 20},
  {name: 'John', age: 15},
  {name: 'Michael', age: 35},
  {name: 'Peter', age: 25},
];

console.log(users[0].name);

function getNames(arrayUsers,propertiesName){
  return arrayUsers.map(item => item[propertiesName]);
}

console.log(getNames(users,'name'));


const auto = {
  model: 'BMW',
  year:2015,
  color:{
    out: 'black',
    inner: 'red',
  }
}

// 2 sposoba obrawenija
console.log(auto.color.inner);
console.log(auto['color']['out']);


///////////////////////////////////////


