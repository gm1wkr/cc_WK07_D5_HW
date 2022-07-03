import React from "react";
import CharacterContainer from "../containers/CharacterContainer";
import CharaceterNodes from "./CharacterNodes";

const Characters = ({ charactersInFilm, characters }) => {

    if(charactersInFilm.length <= 1){
        return;
    }

    const characterIdArray = charactersInFilm.map( (character) => {
        const tempArray = character.split('/')

        return( tempArray[4] ) 

    });


    const charactersNodes = characters.filter( (character) => {
        return characterIdArray.includes(character.id);
    });


    const characterItems = charactersNodes.map((acter) => {
        return <CharaceterNodes key={acter.id} character={acter} />
    });


    return(
        <div className="cast">
           
            <h2>Starring</h2>
            <ul className="characters">
                {characterItems}
            </ul>
        </div>
    )
}

export default Characters;
