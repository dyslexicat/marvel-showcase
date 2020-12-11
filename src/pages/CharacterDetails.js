import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/store";
import HomeButton from "../components/HomeButton";
import Comics from "../components/Comics";

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { characterID } = useParams();
  const [{ characters }] = useContext(Context);

  useEffect(() => {
    const filtered = characters.filter(
      (character) => character.id === parseInt(characterID)
    );
    const character = filtered[0];

    setCharacter(character);
  }, []);

  return (
    <div className="main-div">
      <HomeButton character={character} />
      {!character ? (
        <p className="error-message">
          There is no info for this Marvel Character
        </p>
      ) : (
        <div className="hero-details">
          <h2>{character.name}</h2>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="hero-image"
          />
          <p>{character.description}</p>
          <Comics characterID={character.id} />
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
