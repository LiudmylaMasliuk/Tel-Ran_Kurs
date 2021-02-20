/* 
1. Реализовать нашу логику при помощи функций;
2. Написать функцию showMyDB, которая будет проверять свойство privat, если значение - false, будет распечатывать
    базу данных в консоли;
3. Написать функцию writeYourGenre, пользователь три раза отвечает на вопрос: 
   "Ваш любимый жанр под номером ${number}?" Каждый ответ записывается в массив в свойтсве genres
4.    
 */

let numberOfFilms;
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},          // {'Titanik': 8.8}
    genres: [],
    privat: false       
}

rememberMyFilms(2);
detectedPersonalLevel(personalMovieDB.count);
writeYourGenre(3);
showMyDB(personalMovieDB.privat);


function start(){
    do{
        numberOfFilms = +prompt('How many films did you watch last month?')
    }while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

function rememberMyFilms(filmsNumber){
for (let i=0; i<filmsNumber; i++){
    const title = prompt('Enter the title onr of the last watched movies'),
          rate = prompt('How do you rate it?');

    if(title != null && rate != null && title != '' && rate != ''){
        personalMovieDB.movies[title] = rate;
    }else{
        i--;
    }
}
}

function detectedPersonalLevel(moviesCount){
if(moviesCount<10){
    console.log('don\'t like movies?');
}else if(moviesCount>=10 && moviesCount <= 30){
    console.log('you are classic viewer\u{1F60D}')
}else if(moviesCount > 30){
    console.log('you\'re a movie buff!');
}else{
    console.log('error');
}
}

function showMyDB (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenre(generesNumber){
    for(let i = 1; i<= generesNumber; i++){
        personalMovieDB.genres[i -1] = prompt (`What is your top-${i} genre?`)
    }
}





