import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages/home/home.component";
import { NavMenu } from "./components/nav/nav.component";

const App = () => {
  return (
    <div className="App">
      <div style={{}}>
        <NavMenu />
      </div>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
};

export default App;
