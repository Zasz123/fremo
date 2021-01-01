import React from "react";

import { IRegisterForm } from "../../../types/auth/auth";

import { NormalInput } from "../../common/input";
import { NormalButton } from "../../common/button";
import { AuthTitle } from "../authTitle";
import { AuthForm } from "../authForm";

interface IProps {
  data: IRegisterForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({ data, onChange, onRegister }: IProps) => {
  return (
    <AuthForm onSubmit={onRegister}>
      <AuthTitle color="#4e4e4e">회원가입</AuthTitle>
      <NormalInput
        placeholder="ID"
        value={data.accountId}
        name="accountId"
        onChange={onChange}
      />
      <NormalInput
        placeholder="Password"
        value={data.password}
        name="password"
        onChange={onChange}
      />
      <NormalInput
        placeholder="Name"
        value={data.name}
        name="name"
        onChange={onChange}
      />
      <NormalInput
        placeholder="Email"
        value={data.email}
        name="email"
        onChange={onChange}
      />
      <NormalButton type="submit">회원가입</NormalButton>
    </AuthForm>
  );
};

export default RegisterForm;
