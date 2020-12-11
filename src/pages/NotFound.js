import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main-div">
      <p className="error-message">You have stumbled onto something you shouldn't have.</p>
      <Link to="/" />
    </div>
  );
};

export default NotFound;
