import React from "react";

import { ILoginForm } from "../../../types/auth/auth";

import { AuthButton } from "../../common/button";
import { AuthInput } from "../../common/input";
import { AuthForm, AuthInputsWrapper } from "../authForm";
import { AuthTitle } from "../authTitle";
import AuthSwitch from "../authSwitch";

interface IProps {
  data: ILoginForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ data, onChange, onLogin }: IProps) => {
  return (
    <AuthForm onSubmit={onLogin}>
      <AuthInputsWrapper>
        <AuthTitle>로그인</AuthTitle>
        <AuthInput
          value={data.email}
          name="email"
          placeholder="아이디"
          onChange={onChange}
        />
        <AuthInput
          value={data.password}
          name="password"
          placeholder="비밀번호"
          onChange={onChange}
          type="password"
        />
        <AuthButton type="submit">로그인</AuthButton>
      </AuthInputsWrapper>
      <AuthSwitch authMode="LOGIN" />
    </AuthForm>
  );
};

export default LoginForm;
