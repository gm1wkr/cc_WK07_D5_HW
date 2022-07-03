import React from "react";

const FilmLimitSelect = ({ onLimitSelected }) => {

    const handleSelectChange = (event) => {
        onLimitSelected(event.target.value)
        console.log(event.target.value);
    }


    return(
        <select onChange={handleSelectChange}>
            <option value="1">1</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="200">All</option>
        </select>
    )

}

export default FilmLimitSelect;