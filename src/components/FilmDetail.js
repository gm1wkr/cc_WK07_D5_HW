import React from "react";
import CharacterContainer from "../containers/CharacterContainer";
import FilmFavoriteButton from "./FilmFavoriteButton";


const FilmDetail = ({ filmArray, filmId, onFavButtonClick }) => {

    const film = filmArray.find( ( film ) => film.id === filmId);
    
    if(film === undefined){
        return;
    }

    console.log(filmArray.length);

    
    const backgroundStyle = {
        backgroundImage: 'url(' + film.movie_banner + ')'
    }

    return (
        <div className="film-detail" style={backgroundStyle}>
            <article>
                <div>
                    <h2>{film.original_title}<br/><small>{film.title}</small></h2>
                    <FilmFavoriteButton onButtonClick={onFavButtonClick} />
                    <h3>Directed by {film.director}<span>Produced by {film.producer}</span></h3>
                    <ul className="horizontal-list">
                        <li><span>Released</span> {film.release_date}</li>
                        <li><span>Running Time</span> {film.running_time} mins</li>
                        <li><span>RT Score</span> {film.rt_score}!</li>
                    </ul>
                    <p>{film.description}</p>
                </div>
                <CharacterContainer charactersInFilm={film.people} />
            </article>
        </div>
    )
}

export default FilmDetail;