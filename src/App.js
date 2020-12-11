import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Store from "./context/store";
import CharacterDetails from "./pages/CharacterDetails";
import Home from "./pages/Home";
import "./App.css";

const App = () => {

  return (
    <Store>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/character/:characterID" component={CharacterDetails} />
      </Router>
    </Store>
  );
};

export default App;
