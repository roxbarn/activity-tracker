import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./config/theme.config";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/sign-up">Sign up</Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
