import React, { useEffect, useContext } from "react";
import { Context } from "../context/store";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
  const [{ offset, characters }, dispatch] = useContext(Context);
  //const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?offset=${
        (offset - 1) * 30
      }&limit=30&apikey=${API_KEY}`
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const json = await response.json();
    dispatch({ type: "GET_CHARACTERS", payload: json.data.results });
  };

  useEffect(() => {
    fetchCharacters();
  }, [offset]);

  const paginate = (pageNumber) => {
    dispatch({ type: "SET_OFFSET", payload: pageNumber });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Marvel Characters</h1>
      <div className="wrapper">
        {characters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              imgSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))
        )}
      </div>
      {characters.length === 0 ? (
        ""
      ) : (
        <Pagination paginate={paginate} totalCharacters={100} />
      )}
      <footer>"Data provided by Marvel. © 2014 Marvel"</footer>
    </div>
  );
};

export default Home;
