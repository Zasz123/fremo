import React from "react";

import { ILoginForm } from "../../../types/auth/auth";

import { NormalButton } from "../../common/button";
import { NormalInput } from "../../common/input";
import { AuthForm } from "../authForm";
import { AuthTitle } from "../authTitle";

interface IProps {
  data: ILoginForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ data, onChange, onLogin }: IProps) => {
  return (
    <AuthForm onSubmit={onLogin}>
      <AuthTitle>로그인</AuthTitle>
      <NormalInput
        value={data.accountId}
        name="accountId"
        placeholder="ID"
        onChange={onChange}
      />
      <NormalInput
        value={data.password}
        name="password"
        placeholder="Password"
        onChange={onChange}
      />
      <NormalButton type="submit">로그인</NormalButton>
    </AuthForm>
  );
};

export default LoginForm;
