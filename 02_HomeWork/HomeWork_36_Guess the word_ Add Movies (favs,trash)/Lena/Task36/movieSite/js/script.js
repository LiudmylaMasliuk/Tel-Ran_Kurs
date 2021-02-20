'use strict';

const movies = [
       {title: "On the Rocks", favorite:false},    //<li> On the Rocks </li>
        {title: "The Trip to Greece",favorite:false},
        {title:"Bad Education",favorite:false},
        {title:"The Nest", favorite:false},
        {title:"Nomadland", favorite:false}   
];

const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      poster = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.forms.movie,
      addInput = addForm.title,
      checkbox = addForm.favorite;

      addInput.focus();

addForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newFilm = addInput.value,
          favorite = checkbox.checked;
    
    if(newFilm){
        movies.push({title: newFilm, favorite});    // favorite:favorite
        movies.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1: -1);
        renderMovieList(movieList, movies.map(mapMovieToListElement));
        //addInput.value = '';
        addInput.focus();
        //favorite.checked = '';
        event.target.reset();
    }      
});

function mapMovieToListElement(movie, index){
    const li = document.createElement('li'),
          removeBtn = document.createElement('div'),
          star = document.createElement('img');

    li.classList.add('promo__interactive-item');
    li.innerText = `${index + 1} ${movie.title}`;
    removeBtn.classList.add('delete');
    star.src = './icons/Star.svg';
    star.alt = 'star';
    star.style.cssText = 'width: 20px; heigth: 20px; margin-left: 5px';

    removeBtn.onclick = function(){
        movies.splice(index, 1);
        renderMovieList(movieList, movies.map(mapMovieToListElement));
    }
    if(movie.favorite) li.append(star);
    li.append(removeBtn);

    return li;
}

function renderMovieList(parentElement, movies){
    parentElement.innerHTML = '';
    movies.forEach(function(movie){
        parentElement.append(movie);
    });
}

adv.forEach(item => item.remove());  // [promo__adv]
genre.textContent = 'drama';
poster.style.backgroundImage = 'url(img/bg.jpg)';

movies.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1: -1);
renderMovieList(movieList, movies.map(mapMovieToListElement));

/* const adv = document.querySelector('.promo__adv');
adv.remove(); */