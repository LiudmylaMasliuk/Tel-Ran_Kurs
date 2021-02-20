/* 
Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*
    
 */

let numberOfFilms;
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},          // {'Titanik': 8.8}
    genres: [],
    privat: false,
    rememberMyFilms: function(filmsNumber){
        for (let i=0; i<filmsNumber; i++){
            const title = prompt('Enter the title onr of the last watched movies'),
                  rate = prompt('How do you rate it?');
        
            if(title != null && rate != null && title != '' && rate != ''){
                personalMovieDB.movies[title] = rate;
            }else{
                i--;
            }
        }
        },
    detectedPersonalLevel: function(){
            if(this.count<10){              // this.count -> personalMovieDB.count
                console.log('don\'t like movies?');
            }else if(this.count>=10 && this.count <= 30){
                console.log('you are classic viewer\u{1F60D}')
            }else if(this.count > 30){
                console.log('you\'re a movie buff!');
            }else{
                console.log('error');
            }
            },
    showMyDB:function(){
                if(!this.privat){
                    console.log(this);
                }
            },
    toggleVisibleMyDB: function(){
        if(this.privat){
            this.privat = false;
        }else{
            this.privat = true;
        }
        // this.privat = this.privat ? false : true; // a = 5

    },
    
    /* writeYourGenre: function (generesNumber){
        for(let i = 1; i <= generesNumber; i++){
            const genre = prompt(`What is your top-${i} genre?`);
            if(genre == '' || genre == null){
                console.log('Data is incorrect');
                i--; // one iteration back
            }else{
                this.genres[i -1] = genre;
            }
            }
            this.genres.forEach((item,index,array) => {console.log(`Top-${index +1} genre is ${item}. All genres: ${array}.`); 
            // --> Top-1 genre is comedy. All genres: comedy,detective.
            // --> Top-2 genre is detective. All genres: comedy,detective.
            })
        }               */  
        
    writeYourGenre: function (generesNumber){
            const genre = prompt(`Enter the name of the ${generesNumber} genres, separated by a comma.`).toLowerCase(); // vse, 4to vernetsja, perevadi v nizhnij registr
            while(genre == '' || genre == null){
                genre = prompt('Data is incorrect, enter the correct data, please.');
                i--; // one iteration back
            }
            this.genres = genre.split(', '); // porezh i razdeli zapjatoj // split delaet iz stroki massiv
            this.genres.sort(); // otsorteruj po alfavitu
            this.genres.forEach((item,index) => {console.log(`Genre ${index +1} is ${item}`);})
    },
                         
};

personalMovieDB.rememberMyFilms(2);
personalMovieDB.detectedPersonalLevel();
personalMovieDB.writeYourGenre(2);
personalMovieDB.toggleVisibleMyDB(); // --> myDB is not visible
personalMovieDB.toggleVisibleMyDB(); // --> myDB is visible
personalMovieDB.showMyDB();


function start(){
    do{
        numberOfFilms = +prompt('How many films did you watch last month?')
    }while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}