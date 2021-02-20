// let a, b;

// a = false;
// b = false;

// if (a){
//   if (b)
//     console.log('a and b both true');
//   }else{
//     console.log('???');
//   }
// }else{
//     console.log('a - false');
// }


// ============= Login === Password =============

const login = prompt('enter your login, please');
let message;

if (login === 'admin') {
  const password = prompt('enter your password');
  if(password == 'boss'){
    alert('Hello boss!');
  }else if(password == null || password == ''){
    alert('cancelled');
  }else{
    alert('wrong password');
  }
}else if(login == null || login == ''){
  alert('cancelled');
}else{
  alert('I don`t know you.');

}
