import React from "react";

const FilmFavoriteButton = ({onButtonAddClick, onButtonRemove, favoriteFilms, currentFilm}) => {

    const handleButtonClick = (event) => {
        if(event.target.value === 'add'){
            onButtonAddClick(currentFilm);
            console.log("FIRED ADD", event.target.value);
        }
        
        if(event.target.value === 'remove'){
            onButtonRemove(currentFilm);
            console.log("FIRED REMOVE", event.target.value);
        }
    }

    if(favoriteFilms.includes(currentFilm)){
        return (
            <div className="watch-list-control">
                
                <button value="remove" onClick={handleButtonClick}>
                <i className="fa fa-minus-circle" aria-hidden="true"></i> from Watch List! 
                </button>
            </div>
        )
    }else{

        return(
            <div className="watch-list-control">
                <button value="add" onClick={handleButtonClick}>
                <i className="fa fa-plus-circle" aria-hidden="true"> </i> to Watch List
                </button>
            </div>
        )
    }

}

export default FilmFavoriteButton;