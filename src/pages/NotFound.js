import React from "react";
import { Link } from "react-router-dom";

// generic not found (404) page for unknown routes
const NotFound = () => {
  return (
    <div className="main-div">
      <p className="error-message">You have stumbled onto something you shouldn't have.</p>
      <Link to="/" />
    </div>
  );
};

export default NotFound;
