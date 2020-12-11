import React, { useState, useEffect } from "react";

// previously I used a regex to match the comics from the info we already had but this is less error prone
const Comics = ({ characterID }) => {
  const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
  const [comics, setComics] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchComics = async () => {
    try {
      const startDate = "2015-01-01";
      const today = new Date().toISOString().split("T", 1)[0];
      const dateToSend = `${startDate}%2C${today}`;
      const url = `https://gateway.marvel.com:443/v1/public/characters/${characterID}/comics?format=comic&formatType=comic&dateRange=${dateToSend}&orderBy=-onsaleDate&apikey=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const json = await response.json();

      const comics = json.data.results.map((comic) => comic.title);
      setComics(comics.slice(0, 10));
      setLoading(false);
    } catch (err) {
      console.log(err)
      setErrorMsg("There was a problem with the service.")
    }
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <div>
      {errorMsg && <p>{errorMsg}</p>}
      {isLoading ? (
        <p>Loading Comics</p>
      ) : comics.length === 0 ? (
        <p>No comics to show</p>
      ) : (
        comics.map((comic, idx) => <div key={idx}>{comic}</div>)
      )}
    </div>
  );
};

export default Comics;
