import React, { useEffect } from "react";

import useInputs from "../../hooks/common/useInputs";
import useAuthMode from "../../hooks/auth/useAuthMode";

import { IRegisterForm } from "../../types/auth/auth";

import RegisterForm from "../../components/auth/register/RegisterForm";

const RegisterFormContainer = () => {
  const switchAuthMode = useAuthMode();

  const { data, onChange } = useInputs<IRegisterForm>({
    accountId: "",
    password: "",
    name: "",
    email: "",
  });

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { accountId, password, name, email } = data;
    console.log(accountId, password, name, email);
  };

  useEffect(() => {
    switchAuthMode("REGISTER");
  }, []);

  return (
    <RegisterForm data={data} onChange={onChange} onRegister={onRegister} />
  );
};

export default RegisterFormContainer;
