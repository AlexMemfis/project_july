'use strict'

let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

let answerOne = prompt('Один из последних просмотренных фильмов?', ''),
    answerTwo = prompt('На сколько оцените его?', ''),
    answerThree = prompt('Один из последних просмотренных фильмов?', ''),
    answerFour = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answerOne] = answerTwo;
personalMovieDB.movies[answerThree] = answerFour;


console.log(personalMovieDB);