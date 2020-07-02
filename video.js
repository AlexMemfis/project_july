'use strict'

let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
function start() {
    for (let i = 1; i <= 2; i++) {
    
        let answerOne = prompt('Один из последних просмотренных фильмов?', '');
        let answerTwo = prompt('На сколько оцените его?', '');

        if ((typeof(answerOne)) === 'string' && (typeof(answerOne)) != null && answerOne != '' && 
        answerOne.length < 50 && (typeof(answerTwo)) === 'string' && (typeof(answerTwo)) != null && 
        answerTwo != '' &&  answerTwo.length < 50  ) {
            personalMovieDB.movies[answerOne] = answerTwo;
            console.log('Done');
        } else {
            i--;
            console.log('Error');
        }
}
}
start();


function movieChange () {
    if (personalMovieDB.count < 10 ) {
        alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
      
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
    
        } else {
            alert('Произошла ошибка');
     
        }
    
    
    console.log(personalMovieDB);
}
movieChange ();

if (personalMovieDB.privat === false) {

}