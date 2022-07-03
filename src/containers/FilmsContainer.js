import React, {useState, useEffect} from "react";
import FilmDetail from "../components/FilmDetail";
import FilmSelector from "../components/FilmSelector";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
            <FilmDetail filmArray={films} filmId={selectedFilm} onFavButtonClick={setFavoriteFilms} />
            <Footer />
        </>

    )
}

export default FilmContainer;