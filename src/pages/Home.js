import React, { useEffect, useContext } from "react";
import { Context } from "../context/store";
import CharacterCard from "../components/CharacterCard";
import usePageBottom from "../hooks/usePageBottom";

const Home = () => {
  const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
  const [{ offset, characters, maxOffset }, dispatch] = useContext(Context);
  const isPageBottom = usePageBottom();
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

    if (!maxOffset) {
      dispatch({type: "SET_MAX_OFFSET", payload: Math.ceil(json.data.total / 30)})
    }

    dispatch({ type: "GET_CHARACTERS", payload: json.data.results });
  };

  // using the pageBottom hook to change offset and get more content
  useEffect(() => {
    if (isPageBottom) {
      console.log(offset + 1);
      dispatch({ type: "SET_OFFSET", payload: offset + 1 });
    }
  }, [isPageBottom]);

  // check if we are at the bottom of the page and the offset changed so we load more characters
  // basically a fetchMore function
  useEffect(() => {
    if (isPageBottom) {
      fetchCharacters();
    }
  }, [offset]);

  // if there are no characters loaded we want to fetch the initial characters
  useEffect(() => {
    if (!characters || !characters.length) {
      fetchCharacters();
    }
  }, []);

  return (
    <div className="main-div">
      <h1 style={{ textAlign: "center" }}>Marvel Characters</h1>
      <div className="wrapper">
        {characters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              imgSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))
        )}
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        "Data provided by Marvel. © 2014 Marvel"
      </footer>
    </div>
  );
};

export default Home;
