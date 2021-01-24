import React, { useEffect } from "react";

import useInputs from "../../hooks/common/useInputs";

import { ILoginForm } from "../../types/auth/auth";

import LoginForm from "../../components/auth/login/LoginForm";

const LoginFormContainer = () => {
  const { data, onChange } = useInputs<ILoginForm>({
    accountId: "",
    password: "",
  });

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { accountId, password } = data;
    console.log(accountId, password);
  };

  return <LoginForm data={data} onChange={onChange} onLogin={onLogin} />;
};

export default LoginFormContainer;
