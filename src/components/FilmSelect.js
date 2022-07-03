import React from "react";

const FilmSelect = ({ films, onFilmSelected }) => {


    const handleSelectChange = (event) => {
        onFilmSelected(event.target.value)
    }


    const filmOptionNodes = films.map((film) => {
        return(
            <option key={film.id} value={film.id}>{film.title}</option>

        )
    })

    return(
        <select onChange={handleSelectChange}>
            <option disabled>Select A Ghibli Film</option>
            { filmOptionNodes }
        </select>
    )
}

export default FilmSelect;