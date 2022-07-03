import React from "react";
import FilmLimitSelect from "./FilmLimitSelect";
import FilmSelect from "./FilmSelect";


const FilmSelector = ({ filmArray, onFilmSelected, onLimitSelected }) => {
    return(
        <nav id="film-selector">
            <FilmSelect films={filmArray} onFilmSelected={onFilmSelected} />
            <FilmLimitSelect onLimitSelected={onLimitSelected} />
        </nav>
    )
}

export default FilmSelector;