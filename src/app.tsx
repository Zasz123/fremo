import React from "react";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact component={() => <div>dsa</div>} path="/auth" />
    </Switch>
  );
};

export default App;
