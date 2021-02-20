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
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},          // {'Titanik': 8.8}
    genres: [],
    privat: false, 
    rememberMyFilms:function(filmsNumber){
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
    detectedPersonalLevel:function(){
        if(this.count < 10){         // this.count = personalMovieDB.count
            console.log('don\'t like movies?');
        }else if(this.count >= 10 && this.count <= 30){
            console.log('you are classic viewer\u{1F60D}');
        }else if(this.count > 30){
            console.log('you\'re a movie buff!');
        }else{
            console.log('error');
        }
        },
    showMyDB: function(){
        if(!this.privat){
            console.log(this);
        }
    },
    writeYourGenre: function(generesNumber){
        for(let i = 1; i <= generesNumber; i++){
            this.genres[i -1] = prompt (`What is your top-${i} genre?`)
        }
    },
}

personalMovieDB.rememberMyFilms(2);
personalMovieDB.detectedPersonalLevel();
personalMovieDB.writeYourGenre(2);
personalMovieDB.showMyDB();





function start(){
    do{
        numberOfFilms = +prompt('How many films did you watch last month?')
    }while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}


// function catString(str, maxlength) {
//     if(str.length > maxlength){
//         return str.slice(0,maxlength) + '...';
//     }else{
//         return str;
//     }
// }


function catString(str, maxlength){
    (str.length > maxlength) ? str.slice(0,maxlength) + '...' : str;
}
    
   

const str = catString('hello world',5);
console.log(str);




