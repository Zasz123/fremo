import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { useAuth } from "./hooks/auth/useAuth";

import AuthPage from "./pages/authPage";

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
      <Route component={() => <div>404 NOT FOUND</div>} />
    </Switch>
  );
};

export default App;
