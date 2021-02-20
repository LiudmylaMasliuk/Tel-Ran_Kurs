/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      poster = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      input = document.querySelector('.adding__input'),
      checkboxYes = document.querySelector('.checkbox'),
      confirmBtn = document.querySelector('.confirm');
const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland",
    ]
};

movieDB.movies.sort();
adv.forEach(item => item.remove());
genre.textContent = 'drama';
poster.style.backgroundImage = 'url(img/bg.jpg)';

const stars = [];
const trash = [];
let{movies} = movieDB;


changeMovieList(movies);

function changeMovieList(movies){
    movieList.innerHTML = '';
    movies.forEach((film, index)=>{
         movieList.insertAdjacentHTML('beforeend',`<li class="promo__interactive-item">${index+1} ${film}</li>`);
        });
    createStars();
    createBuckets();
}


function getInput(){
    let newMovie = input.value;
    movies.push(newMovie);
    return changeMovieList(movies);
}

confirmBtn.addEventListener('click', getInput);


function createStars(){
    for(let i = 0; i < movies.length; i++){
        let star = document.createElement('div');
        star.setAttribute('class', 'star');
        star.style.cssText = 'background: url("./icons/Star_empty.svg"); background-repeat: no-repeat; background-size: cover; width: 20px; height: 20px; display: inline-block; margin-left: 10px';
        let array = document.querySelectorAll('.promo__interactive-item');
        array[i].append(star);
        stars.push(star);;
    }
}

function createBuckets(){
    for(let i = 0; i < stars.length; i++){
        let bucket = document.createElement('div');
        bucket.setAttribute('class', 'trash');
        bucket.classList.add('delete');
        trash.push(bucket);
        stars[i].after(bucket);
    }
}


trash.forEach(item =>{
    item.addEventListener('click', deleteMovie);
});

stars.forEach(item =>{
    item.addEventListener('click', makeStarYellow);
});

function deleteMovie(event){
    if(event.target.classList.contains('trash'))
    event.target.parentNode.remove();
}
function makeStarYellow(event){
    if(event.target.classList.contains('star'))
    event.target.style.background = 'url("./icons/Star_full_yellow.svg")';
    event.target.style.backgroundRepeat = 'no-repeat';
    event.target.style.backgroundSize = 'cover';
    event.target.addEventListener('click', makeStarWhite, {once: true});
}
function makeStarWhite(event){
    event.target.style.background = 'url("./icons/Star_empty.svg")';
    event.target.style.backgroundRepeat = 'no-repeat';
    event.target.style.backgroundSize = 'cover';
    event.target.addEventListener('click', makeStarYellow, {once: true});
}




































