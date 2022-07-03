import React from "react";

const FilmFavoriteButton = ({onButtonAddClick, onButtonRemove, favoriteFilms, currentFilm}) => {

    const handleButtonClick = (event) => {
        if(event.target.value === 'add'){
            onButtonAddClick(currentFilm);
            console.log("FIRED ADD");
        }
        
        if(event.target.value === 'remove'){
            onButtonRemove(currentFilm);
            console.log("FIRED REMOVE");
        }
    }

    if(favoriteFilms.includes(currentFilm)){
        return (
            <div className="watch-List-control">
                In Watch List! 
                <button value="remove" onClick={handleButtonClick}>Remove</button>
            </div>
        )
    }else{

        return(
            <div className="watch-List-control">
                <button value="add" onClick={handleButtonClick}>Add to My Favorites</button>
            </div>
        )
    }

}

export default FilmFavoriteButton;