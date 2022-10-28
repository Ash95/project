"use strict";

const numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count > 30){
        alert("Вы киноман");
    }
    else {
        alert("Проищошла ошибка");
    }


for (let i = 0; i < numberofFilms; i++){
    const a = prompt("Один из последних просмотренных фильмов?", "");
    if (a != null && a.length != 0 && a.length <= 50) {
        const b = prompt("Как оцените его?", "");
        if (a != null && b.length != 0 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
        }
        else {
            alert("Ошибка ввода. Попробуйте еще раз");
            i--;
        }
    }
    else {
        alert("Ошибка ввода. Попробуйте еще раз");
        i--;
    }
}

console.log(personalMovieDB);