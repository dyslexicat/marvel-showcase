import React, { useState, useEffect } from "react";

const Comics = () => {
  const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
  const [comics, setComics] = useState(null);

  const fetchComics = async () => {
    const startDate = "2015-01-01";
    const today = new Date().toISOString().split("T", 1)[0];
    const dateToSend = `${startDate}%2C${today}`;
    const url = `https://gateway.marvel.com:443/v1/public/characters/1009148/comics?format=comic&formatType=comic&dateRange=${dateToSend}&orderBy=onsaleDate&apikey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const json = await response.json();

    const comics = json.data.results.map((comic) => comic.title);
    console.log(comics);
    setComics(comics);
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <div>
      {comics ? (
        <p>Loading Comics</p>
      ) : (
        comics.map((comic) => <p key="idx">{comic}</p>)
      )}
    </div>
  );
};

export default Comics;
