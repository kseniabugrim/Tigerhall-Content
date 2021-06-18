import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}
