import React, {useState, useEffect} from "react";
import Characters from "../components/Characters";

const CharacterContainer = ({charactersInFilm}) => {

    const [characters, setCharacters] = useState([]);

    async function getCharacters(){
        const apiUrl = `https://ghibliapi.herokuapp.com/people/`;
        const resp = await fetch(apiUrl);
        const data = await resp.json();
        setCharacters(data); 
    }

    useEffect( () => {
        getCharacters();
    }, []);




    return(
        <>
            
            <Characters characters={characters} charactersInFilm={charactersInFilm} />
        </>
    )

}

export default CharacterContainer;