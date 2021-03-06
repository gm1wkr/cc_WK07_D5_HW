import React from "react";
import CharacterContainer from "../containers/CharacterContainer";
import FilmFavoriteButton from "./FilmFavoriteButton";
import WatchList from "./WatchList";


const FilmDetail = ({ filmArray, filmId, onFavButtonClick, onFavButtonRemoveClick, favoriteFilms }) => {

    const film = filmArray.find( ( film ) => film.id === filmId);
    
    if(film === undefined){
        return;
    }


    
    const backgroundStyle = {
        backgroundImage: 'url(' + film.movie_banner + ')'
    }

    return (
        <div className="film-detail" style={backgroundStyle}>
            
            <article>
                <FilmFavoriteButton
                    onButtonAddClick={onFavButtonClick}
                    onButtonRemove={onFavButtonRemoveClick}
                    favoriteFilms={favoriteFilms} 
                    currentFilm={film}
                />
                <div>
                    <h2>{film.original_title}<br/><small>{film.title}</small></h2>
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