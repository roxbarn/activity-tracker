import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          Sign in
        </Route>
        <Route path="/sign-up">Sign up</Route>
      </Switch>
    </Router>
  );
}

export default App;
