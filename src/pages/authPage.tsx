import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";

import RegisterFormContainer from "../containers/auth/RegisterFormContainer";
import LoginFormContainer from "../containers/auth/LoginFormContainer";

import AuthTemplete from "../components/auth/authTemplete";
import AuthWelcome from "../components/auth/authWelcome";

const AuthPage = () => {
  const { path } = useRouteMatch();

  return (
    <AuthTemplete>
      <AuthWelcome />
      <Switch>
        <Route
          exact
          component={RegisterFormContainer}
          path={`${path}/register`}
        />
        <Route exact component={LoginFormContainer} path={`${path}/login`} />
      </Switch>
    </AuthTemplete>
  );
};

export default AuthPage;
