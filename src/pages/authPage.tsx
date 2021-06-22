import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

import RegisterFormContainer from "../containers/auth/RegisterFormContainer";
import LoginFormContainer from "../containers/auth/LoginFormContainer";

import PageTemplete from "../components/base/pageTemplete";
import AuthWelcome from "../components/auth/authWelcome";
import { AuthFormBlock } from "../components/auth/authForm";

const AuthPage = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token !== null) {
  //     alert("이미 로그인 하셨습니다.");
  //     history.push("/");
  //   }
  // }, []);

  return (
    <PageTemplete height={600}>
      <AuthWelcome />
      <AuthFormBlock>
        <Switch>
          <Route
            exact
            component={RegisterFormContainer}
            path={`${path}/register`}
          />
          <Route exact component={LoginFormContainer} path={`${path}/login`} />
        </Switch>
      </AuthFormBlock>
    </PageTemplete>
  );
};

export default AuthPage;
