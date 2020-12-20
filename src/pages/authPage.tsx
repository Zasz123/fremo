import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";

import RegisterFormContainer from "../containers/auth/RegisterFormContainer";

const AuthPage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        component={RegisterFormContainer}
        path={`${path}/register`}
      />
    </Switch>
  );
};

export default AuthPage;
