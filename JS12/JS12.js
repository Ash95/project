 "use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман!");
} else {
  console.log("Ошибка!");
}



for (let i = 0; i < numberOfFilms; i++) {
    let a = prompt("Какой из последних просмотренных фильмов?","");
    while (a.length == 0 || a == null){
      a = prompt("Вы ничего не ввели или пытались отменить ответ. Напишите еще раз","");
    }
    while (a.length > 50 || a == null){
      a = prompt("Вы ввели слишком длинную строку. Напишите еще раз","");
    }
    let b = prompt("Как оцените его?","");
    while (b.length == 0 || b == null){
      b = prompt("Вы ничего не ввели или пытались отменить ответ. Напишите еще раз","");
    }
    while (b.length > 50 || b== null){
      b = prompt("Вы ввели слишком длинную строку. Напишите еще раз","");
    }
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB); //Output