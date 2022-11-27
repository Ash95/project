"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { 
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function() {
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
                alert("Произошла ошибка");
            }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < personalMovieDB.count; i++){
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
    },
    writeYourGenres: function(OpenFilmBase) {
        for (let i = 0; i < 3; i++){
            OpenFilmBase.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (OpenFilmBase.genres[i] == null || OpenFilmBase.genres[i].length == 0) {
                alert("Ошибка ввода. Попробуйте еще раз");
                i--;
            }
        }
        OpenFilmBase.genres.forEach(function(i, j) {
            console.log(`Любимый жанр #${j + 1} - это ${i}`);            
        });
    },
    showMyDB: function(OpenFilmBase) {
        if (OpenFilmBase.privat == true){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres(personalMovieDB);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB);