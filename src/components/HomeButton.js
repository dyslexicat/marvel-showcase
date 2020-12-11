import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeButton = ({ character }) => {
  return !character ? (
    <Link to="/" className="home-button">
      <FontAwesomeIcon icon={faHome} style={{ color: "#daddd8" }} />
      <span>Go back Home</span>
    </Link>
  ) : (
    <Link to={`/#${character.id}`} className="home-button">
      <FontAwesomeIcon icon={faHome} style={{ color: "#daddd8" }} />
      <span>Go back Home</span>
    </Link>
  );
};

export default HomeButton;
