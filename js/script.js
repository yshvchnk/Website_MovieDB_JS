'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Ліга справедливості",
            "Ла-ла ленд",
            "Одержимість",
            "Скот Пілігрим проти..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favourite) {
                console.log("Adding favourite movie");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        
        event.target.reset();
        
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });


    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});