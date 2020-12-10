import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import "./App.css";

const App = () => {
  const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?limit=30&apikey=${API_KEY}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const json = await response.json();
      setCharacters(json.data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="main-div">
      <h1 style={{textAlign: "center"}}>Marvel Characters</h1>
      {characters.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="wrapper">
          {characters.map((character, idx) => (
            <CharacterCard
              key={idx}
              name={character.name}
              imgSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))}
        </div>
      )}
      <footer>"Data provided by Marvel. © 2014 Marvel"</footer>
    </div>
  );
};

export default App;
