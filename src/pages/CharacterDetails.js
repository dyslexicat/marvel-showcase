import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../context/store";

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { characterID } = useParams();
  const [{ characters }] = useContext(Context);

  useEffect(() => {
    const filtered = characters.filter((character) => character.id === parseInt(characterID));
    const character = filtered[0];

    setCharacter(character);
  }, [characters]);

  const getComics = () => {
    const yearRegex = /\([0-9]{4}\)/;
    const years = [];

    // use regex to filter hero comics by year
    // I used a generalized regex so that there aren't any problems
    character.comics.items.forEach((comic, idx) => {
      const match = comic.name.match(yearRegex);
      if (match) {
        const yearInt = parseInt(match[0].slice(1, match[0].length - 1));
        if (yearInt >= 2005) {
          years.push([idx, yearInt]);
        }
      }
    });

    // sort the years by descending
    years.sort(function (a, b) {
      const keyA = a[1];
      const keyB = b[1];
      if (keyA < keyB) {
        return 1;
      }
      if (keyB < keyA) {
        return -1;
      }
      return 0;
    });

    // get the first 10 elements
    const ids = years.slice(0, 10).map((item) => item[0]);
    const comics = [];
    for (const id of ids) {
      comics.push(character.comics.items[id]);
    }

    return comics;
  };

  return (
    <div className="main-div">
      <Link to="/">Go back Home</Link>
      {!character ? (
        <p>There is no info for this Marvel Character</p>
      ) : (
        <div className="hero-details">
          <h2>{character.name}</h2>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="hero-image"
          />
          <p>{character.description}</p>
          {getComics().map((comic, id) => (
            <div key={id}>{comic.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
