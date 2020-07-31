import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Photo from "./components/photo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/photo' component={Photo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
