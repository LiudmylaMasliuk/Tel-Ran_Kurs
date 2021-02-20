/* 
1. Realize this logic with the help of functions;
2. Write function showMyDB, which will check the property of 'privat'. If the value is false ---> datebase will be visible.
3. Write a function writeYourGenre. The user answers the question three times: "Your favourite genre Nr. ${number}?". Each answer will be written to the array 'genres'.
*/



const numberOfFilms = +prompt("How many movies have you aready watched?");

const personalMovieDB = {
  cound: numberOfFilms,
  movies: {
    // 'Titanik': 5.10,
    // 'Contact': 10.10,
  },
  genres: [],
  privat: false, // poka ego tolko v konsoli vivodit ili ne vivodit. 
}
// personalMovieDB.private = true;

for(let i = 0; i < 2; i++){
  const title = prompt("Name one of the last movies you watched?"); // klju4
  const rate = prompt("How can you rate it?"); // zna4enie

  if(title!=null && rate!=null && title!='' && rate!=''){
    personalMovieDB.movies[title] = rate;
  }else{
    i--;
  }
}

if(personalMovieDB.count < 10){
  console.log('Very few movies watched.');
}




// Task1
// arr = [2,4,-8,9,11]; // 20

// napisat function kotorij s4itaet summu naibolwih rjadom stojawih 4isel

//Task2
//5! --> 1*2*3*4*5      function factorial(5);
//6! --> 1*2*3*4*5*6    function factorial(6);
//7! --> 1*2*3*4*5*6*7  function factorial(6);

//Task2 
// so znaniem dvumernih massivov
// sozdaem database slov
// kak user zapomnil russko-anglijskie slova
// polzovatelja sprawivajut perevod anglijskogo slova. Esli otvet pravilnij - 'Great!'. Esli net - to pokazat perevod. 



