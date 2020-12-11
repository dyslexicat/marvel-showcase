import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ id, name, imgSrc }) => {
  return (
    <Link to={`/character/${id}`} key={id} className="card">
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} height="250px" />
    </Link>
  );
};

export default CharacterCard;
