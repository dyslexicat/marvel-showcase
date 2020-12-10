import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Store from "./context/store";
import HeroDetails from "./pages/HeroDetails";
import Home from "./pages/Home";
import "./App.css";

const App = () => {

  return (
    <Store>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/hero/:heroID" component={HeroDetails} />
      </Router>
    </Store>
  );
};

export default App;
