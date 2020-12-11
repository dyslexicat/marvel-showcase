import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./context/store";
import CharacterDetails from "./pages/CharacterDetails";
import Home from "./pages/Home";
import NotFound from './pages/NotFound'
import "./App.css";

const App = () => {
  return (
    <Store>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character/:characterID" component={CharacterDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Store>
  );
};

export default App;
