/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const advImg = document.getElementsByTagName('img'),
      genre = document.querySelector('.promo__genre'),
      promoBack = document.querySelector('.promo__bg'),
      movieOld = document.querySelectorAll('.promo__interactive-item'),movieDB = {
        movies: [
            "On the Rocks",
            "The Trip to Greece",
            "Bad Education",
            "The Nest",
            "Nomadland"
        ]
    };

advImg[0].style.display = 'none';
advImg[1].style.display = 'none';
advImg[2].style.display = 'none';
genre.textContent = 'drama';
promoBack.style.background = 'url("./img/bg.jpg")';
promoBack.style.backgroundSize = 'cover';


let{movies} = movieDB;

const moviesNew = movies.sort();

for(let i = 0; i < moviesNew.length; i++){
    movieOld[i].textContent = `${i+1} ${moviesNew[i]}`;
}













