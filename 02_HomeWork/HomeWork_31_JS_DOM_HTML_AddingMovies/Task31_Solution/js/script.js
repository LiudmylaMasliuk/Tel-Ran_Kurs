/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      poster = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list');




adv.forEach(item => item.remove());  // [promo__adv]
genre.textContent = 'drama';
poster.style.backgroundImage = 'url(img/bg.jpg)';

movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += 
    `<li class="promo__interactive-item">${i+1} ${film}
    </li>`;
})



/* const adv = document.querySelector('.promo__adv');
adv.remove(); */