import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { useAuth } from "./hooks/auth/useAuth";

import AuthPage from "./pages/authPage";
import MemoPage from "./pages/memoPage";
import LandingPage from "./pages/landingPage";

const App = () => {
  const { loginWithToken } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      loginWithToken(token);
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
