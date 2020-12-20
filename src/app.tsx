import React from "react";

import { Route, Switch } from "react-router-dom";

import AuthPage from "./pages/authPage";

const App = () => {
  return (
    <Switch>
      <Route component={AuthPage} path="/auth" />
      <Route component={() => <div>404 NOT FOUND</div>} />
    </Switch>
  );
};

export default App;
