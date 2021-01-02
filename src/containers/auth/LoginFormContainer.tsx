import React, { useEffect } from "react";

import useInputs from "../../hooks/common/useInputs";
import useAuthMode from "../../hooks/auth/useAuthMode";

import { ILoginForm } from "../../types/auth/auth";

import LoginForm from "../../components/auth/login/LoginForm";

const LoginFormContainer = () => {
  const switchAuthMode = useAuthMode();

  const { data, onChange } = useInputs<ILoginForm>({
    accountId: "",
    password: "",
  });

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { accountId, password } = data;
    console.log(accountId, password);
  };

  useEffect(() => {
    switchAuthMode("LOGIN");
  }, []);

  return <LoginForm data={data} onChange={onChange} onLogin={onLogin} />;
};

export default LoginFormContainer;
