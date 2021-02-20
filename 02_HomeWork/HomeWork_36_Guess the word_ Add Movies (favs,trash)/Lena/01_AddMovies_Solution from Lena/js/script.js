'use strict';

const movies = [
    {title: "On the Rocks", favourite: false}, //<li>On the Rocks</li>
    {title: "The Trip to Greece", favourite: false},
    {title: "Bad Education", favourite: false},
    {title: "The Nest", favourite: false},
    {title: "Nomadland", favourite: false},
];

const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      poster = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.forms.movie,
      addInput = addForm.title,
      checkbox = addForm.favourite;

      console.log(addForm);
      console.log(addForm[0]);
      
      addInput.focus();
      addForm.addEventListener('submit', function(event){
          event.preventDefault();
          const newFilm = addInput.value;
          const favourite = checkbox.checked;
        if(newFilm){
            movies.push({title: newFilm, favourite}); // favourite: favourite
            movies.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
            renderMovieList(movieList, movies.map(mapMovieToListElement));
            //addInput.value = '';
            addInput.focus();
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
        star.alt = 'star_img';
        star.style.cssText = 'width: 20px; height: 20px; margin-left: 5px';

        removeBtn.onclick = function(){
            movies.splice(index,1);
            renderMovieList(movieList, movies.map(mapMovieToListElement));
        }
        if(movie.favourite) li.append(star);
        li.append(removeBtn);

        return li;
      }

      function renderMovieList(parentElem, array){
          parentElem.innerHTML = '';
          array.forEach(function(movie){
              parentElem.append(movie);
          })
      }




adv.forEach(item => item.remove());  // [promo__adv]
genre.textContent = 'drama';
poster.style.backgroundImage = 'url(img/bg.jpg)';


movies.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
renderMovieList(movieList, movies.map(mapMovieToListElement));


