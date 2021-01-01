import React from "react";

import useInputs from "../../hooks/common/useInputs";

import { ILoginForm } from "../../types/auth/auth";

import LoginForm from "../../components/auth/login/LoginForm";

const LoginFormContainer = () => {
  const { data, onChange } = useInputs<ILoginForm>({
    accountId: "",
    password: "",
  });

  const onLogin = () => {
    console.log("login");
  };

  return <LoginForm data={data} onChange={onChange} onLogin={onLogin} />;
};

export default LoginFormContainer;
