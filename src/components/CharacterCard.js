import React from "react";

const CharacterCard = ({ name, imgSrc }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} height="200px" width="200px" />
    </div>
  );
};

export default CharacterCard;
