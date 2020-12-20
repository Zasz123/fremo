import React from "react";

import useInputs from "../../hooks/common/useInputs";

import { IRegisterForm } from "../../types/auth/register";

import RegisterForm from "../../components/register/RegisterForm";

const RegisterFormContainer = () => {
  const { data, onChange } = useInputs<IRegisterForm>({
    accountId: "",
    password: "",
    name: "",
  });

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {} = data;
  };

  return (
    <RegisterForm data={data} onChange={onChange} onRegister={onRegister} />
  );
};

export default RegisterFormContainer;
