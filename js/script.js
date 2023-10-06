"use strict";
const numberOfFilms = +prompt('How many films have you already watched?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('One of the last movies you watched?', ''),
      b = prompt('What is your assessment?', ''),
      c = prompt('One of the last movies you watched?', ''),
      d = prompt('What is your assessment?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);