/* 
    Все методы, кроме start() сделать методами объекта personalMovieDb

    Task* (не относится к этому проекту)
    написать функцию, которая укорачивает строку function stringCate(str, maxlength);
    те на вход два параметра - строка и длина, до которой ее нужно укоротить, 
    если строка длиннее, чем maxlength, обрезать ее и в конец добавить ... , 
    если с длиной все в порядке - оставить как есть.
    
    for example
    function stringCate("hello world", 5) -> hello...
    function stringCate("hello", 5) -> hello
 */
let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},          // {'Titanik': 8.8}
    genres: [],
    privat: false       
}

function start(){
    do{
        numberOfFilms = +prompt('How many films did you watch last month?');
        personalMovieDB.count = numberOfFilms;
    }while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

let count = rememberMyFilms = (filmsNumber) => {
    for (let i = 0; i <= filmsNumber; i++){
        const title = prompt('Enter the title of one of the last watched movies.'),
        rate = prompt('How do you rate it?');
        
        if(title != null || rate != null || title != '' || rate != ''){
            personalMovieDB.movies[title] = rate;
        }else{
            i--;
        }
    }
}

let level = detectedPersonalLevel = (moviesCount) => {
    if(moviesCount < 10){
        console.log('don\'t like movies?');
    }else if(moviesCount >= 10 && moviesCount <= 30){
        console.log('you are classic viewer\u{1F60D}')
    }else if(moviesCount > 30){
        console.log('you\'re a movie buff!');
    }else{
        console.log('error');
    }
}

let myDB = showMyDB = (hidden) => {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

let genres = writeYourGenre = (generesNumber) => {
    for(let i = 1; i <= generesNumber; i++){
        personalMovieDB.genres[i - 1] = prompt (`What is your top-${i} genre?`)
    }
}

start();
count(2);
level(numberOfFilms);
genres(3);
myDB(false);









