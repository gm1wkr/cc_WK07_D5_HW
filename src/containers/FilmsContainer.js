import React, {useState, useEffect} from "react";
import FilmDetail from "../components/FilmDetail";
import FilmSelector from "../components/FilmSelector";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WatchList from "../components/WatchList";

const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState('');
    const [selectedLimit, setSelectedLimit] = useState('');
    const [favoriteFilms, setFavoriteFilms] = useState([]);

    async function getFilms(){
        const apiUrl = `https://ghibliapi.herokuapp.com/films?limit=${selectedLimit}`;
        const resp = await fetch(apiUrl);
        const data = await resp.json();
        setFilms(data);
    }

    const addFilmToFavorites = (FavoriteFilmToAdd) => {
        if(favoriteFilms.includes(FavoriteFilmToAdd)){
            return;
        }
       const filmCopy = [...favoriteFilms];
       filmCopy.push(FavoriteFilmToAdd);
       setFavoriteFilms(filmCopy);
    }

    const removeFilmFromFavorites = (filmToRemove) => {
        const filmCopy = [...favoriteFilms];
        const index = filmCopy.indexOf(filmToRemove);
        if(index > -1) filmCopy.splice(index,1 );
        setFavoriteFilms(filmCopy);
    }

    useEffect( () => {
        getFilms();
    }, [])

    return(
        <>
            <header>

            <Header title="CodeClan_ Cinema" />
            <FilmSelector 
                filmArray={films} 
                onFilmSelected={setSelectedFilm} 
                onLimitSelected={setSelectedLimit}
            />
            </header>
            <FilmDetail
                filmArray={films} 
                filmId={selectedFilm} 
                onFavButtonClick={addFilmToFavorites}
                onFavButtonRemoveClick={removeFilmFromFavorites}
                favoriteFilms={favoriteFilms}
            />
            
            <WatchList watchList={favoriteFilms} />
            <Footer />
        </>

    )
}

export default FilmContainer;