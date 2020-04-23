import React from 'react';
import Header from "./common/header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./common/HomePage";
import AboutPage from "./common/AboutPage";

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
      </Switch>

    </div>
  );
}

export default App;
