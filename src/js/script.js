const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

const personoleMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQ = prompt('Один из последних просмотренных фильмов?', ''),
      firstA = prompt('На сколько оцените его?', ''),
      secondQ = prompt('Один из последних просмотренных фильмов?', ''),
      secondA = prompt('На сколько оцените его?', '');

personoleMovieDB.movies[firstQ] = firstA;
personoleMovieDB.movies[secondQ] = secondA;

console.log(personoleMovieDB);