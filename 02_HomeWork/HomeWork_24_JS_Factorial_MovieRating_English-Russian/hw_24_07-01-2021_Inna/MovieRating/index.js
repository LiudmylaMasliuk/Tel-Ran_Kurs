/* 
1. Реализовать нашу логику при помощи функций;
2. Написать функцию showMyDB, которая будет проверять свойство privat, если значение - false, будет распечатывать
    базу данных в консоли;
3. Написать функцию writeYourGenre, пользователь три раза отвечает на вопрос: 
   "Ваш любимый жанр под номером ${number}?" Каждый ответ записывается в массив в свойтсве genres
4.    
 */

function getNumberOfMovies(personalMovieDB){
  const numberOfFilms = +prompt('How many movies have you already watched?');
  if(numberOfFilms != null || numberOfFilms != ''){
    personalMovieDB.count = numberOfFilms;
  }
  if(personalMovieDB.count < 10){
    console.log('Very few movies watched.');
  }
}

function getMovieRating(personalMovieDB){
  for (let i = 0; i < maxQuestions; i++){
    const title = prompt('What is one of the last movies you watched?');
    const rate = +prompt('Please, rate it on the 1-to-10 scale.');
    if(title != null || rate != null || title != '' || rate != ''){
        personalMovieDB.movies[title] = rate;
    }else{i--;}
  }
}

function writeYourGenre(personalMovieDB){
  for(i = 1; i <= maxQuestions; i++){
    const genre = prompt(`What is your favourite genre Nr. ${i}?`);
    if(genre != null || genre != ''){
      personalMovieDB.genres.push(genre);
    }else{i--;}
  }
}

function showMyDB(personalMovieDB){
  if(!personalMovieDB.private){
    console.log(personalMovieDB);
  }
}


const personalMovieDB = {
  count: 0,
  movies: {},          // {'Titanik': 8.8}
  genres: [],
  private: false,      
}

const maxQuestions = 3;
getNumberOfMovies(personalMovieDB);
getMovieRating(personalMovieDB);
writeYourGenre(personalMovieDB);
showMyDB(personalMovieDB);





