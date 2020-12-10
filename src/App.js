import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Store from "./context/store";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <Store>
      <div className="main-div">
        <Home />
      </div>
    </Store>
  );
};

export default App;
