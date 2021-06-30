import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { useAuth } from "./hooks/auth/useAuth";
import useStatus from "./hooks/auth/useStatus";

import AuthPage from "./pages/authPage";
import MemoPage from "./pages/memoPage";
import LandingPage from "./pages/landingPage";

const App = () => {
  const { silentRefresh } = useAuth();
  const { token } = useStatus();

  useEffect(() => {
    if (token === null) {
      silentRefresh();
    }
  }, []);

  return (
    <Switch>
      <Route component={AuthPage} path="/auth" />
      <Route component={MemoPage} path="/memo" />
      <Route component={LandingPage} path="/" />
      <Route component={() => <div>404 NOT FOUND</div>} />
    </Switch>
  );
};

export default App;
