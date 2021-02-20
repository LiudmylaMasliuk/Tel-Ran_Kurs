// /////////////// Function Declaration /////////////// 
// /////// obrabativaetsja interpretatorom v na4ale /////// 
// /////// mozhno obratitsja v pozicii vishe do function /////// 


// // function showFirstMessage(){
// //   console.log('Hello world!');
// // }

// // showFirstMessage(); // vizivaem function



// // function showFirstMessage(text){
// //   console.log(text);
// // }

// // // showFirstMessage(); // --> undefined

// // showFirstMessage('Hello!'); // --> Hello!


// // function showFirstMessage(text){
// //   console.log(text);
// // }
// // let message = 'Hello world!';
// // showFirstMessage(message); // --> Hello world!!


// // function showFirstMessage(text){
// //   console.log(text);
// //   let num = 20; // num zhivet tolko vnutri function
// // }

// // let message = 'Hello world!';
// // showFirstMessage(message); // --> Hello world!!

// // console.log(num); // --> undefined






// // function showFirstMessage(from, text){
// //   alert(from + ': ' + text);
// // }

// // showFirstMessage('Vasja', 'Hello!');
// // showFirstMessage('Anna', 'Hi!');


// // let from = 'Anna';
// // function showSecondMessage(from, text){
// //   from = '*' + from + '*';
// //   alert(from + ': ' + text);
// // }

// // showSecondMessage(from, 'Hello');
// // alert(from); // ---> Anna



// // let from = 'Anna';
// // function showSecondMessage(text){ // from net v parametrah
// //   from = '*' + from + '*';
// //   alert(from + ': ' + text);
// // }

// // showSecondMessage(from, 'Hello');
// // alert(from); // ---> *Anna*



// // function sum(a, b){
// //   let sum = a + b;
// //   return sum;
// // }

// function sum(a,b){
//   return a + b;
// }


// let result = sum(5, 6);
// console.log(result);
// console.log(sum(10,20));
// console.log(sum(10,20) + result);

// let x = 20;
// let y = 40;
// console.log(sum(x,y)); // kak reservacija mesta




// // function checkAge(age){
// //   if(age>18){
// //     return true;
// //   }else{
// //     return false;
// //   }
// // }

// // function checkAge(age){
// //   return(age > 18) ? true : false;
// // }


// ///////////////////////////////////////////////////////////////////////

// // function checkAge(age){
// //   if(age>18){
// //     return true;
// //   }else{
// //     return confirm('Do your parents allow?'); // obwenie s polzovatelem
// //   }
// // }
// // function showMovie(age){
// //   if(!checkAge(age)){
// //     return;                 // pustoj return vozvrawaet 'undefined' i prosto zakrivaet
// //   }
// //   alert('Let start watching movie!!!:-)')
// // }

// // let ageUser = +prompt('Enter your age.');
// // showMovie(ageUser);


// // Hosting (vsplitie) // mozhet bit tolko s var, s let etogo ne budet
// console.log(userName);
// var userName = 'Olga';
// console.log(userName);

// console.log(userName);
// let userName = 'Olga'; // ne vozmozhno!!!!!!!
// console.log(userName);

// console.log(greeting);
// var greeting = 'hello!';
// console.log(greeting);





// /////////////// Function Expression /////////////// 
// /////// ne obrabativaetsja interpretatorom v na4ale /////// 
// /////// nelzja obratitsja v pozicii vishe do function /////// 
// /////// obrawenie tolko posle pozicii function ///////

// const logger = function(){
//   console.log('hello!');
// }
// logger();


///////////////// Callback /////////////// 


// function learnJS(language, callback){
//   console.log(`I learn: ${language}`);
//   callback();
// }
// function showThirdMessage(){
//   console.log('Great!!!')
// }
// learnJS('JavaScript', showThirdMessage);

// learnJS('English', function(){console.log('Wow!!!')});
// learnJS('German', 'Super!'); --> owibka


function ask(question, callback1, callback2){
  if(confirm(question)){
    callback1();
  }else{
    callback2();
  }
}

ask('Do you agree?', function(){alert('You agree')}, function(){alert('You don`t agree.')});


///////////////// Strelo4nie funkcii /////////////// 

// const calc = (a,b) => {
//   a *= 2;
//   b *= 5;
//   return a + b};

const calc = (a,b) => a + b; // const calc2 = a => a*3;
console.log(calc(4,5));

console.log(calc(4)); // --> NaN
console.log(calc()); // --> NaN


