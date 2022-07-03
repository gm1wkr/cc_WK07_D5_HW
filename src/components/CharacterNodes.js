import React from "react";

const CharacterNodes = ({ character }) => {
    return <li>
                <ul className="cast-grid">
                    <li><h4>{character.name}</h4></li>
                    <li>{character.gender}</li>
                    <li>{character.age} Years Old</li>
                    <li>{character.hair_color} eyes</li>
                </ul>
            </li>
}

export default CharacterNodes;