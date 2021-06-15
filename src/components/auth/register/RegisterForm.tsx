import React from "react";

import { IRegisterForm } from "../../../types/auth/auth";

import { AuthInput } from "../../common/input";
import { AuthButton } from "../../common/button";
import { AuthTitle } from "../authTitle";
import { AuthForm, AuthInputsWrapper } from "../authForm";
import AuthSwitch from "../authSwitch";

interface IProps {
  data: IRegisterForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({ data, onChange, onRegister }: IProps) => {
  return (
    <AuthForm onSubmit={onRegister}>
      <AuthInputsWrapper>
        <AuthTitle color="#4e4e4e">회원가입</AuthTitle>
        <AuthInput
          placeholder="이메일"
          value={data.email}
          name="email"
          onChange={onChange}
        />
        <AuthInput
          placeholder="비밀번호"
          value={data.password}
          name="password"
          onChange={onChange}
          type="password"
        />
        <AuthInput
          placeholder="이름"
          value={data.nickName}
          name="nickName"
          onChange={onChange}
        />
        <AuthButton type="submit">회원가입</AuthButton>
      </AuthInputsWrapper>
      <AuthSwitch authMode="REGISTER" />
    </AuthForm>
  );
};

export default RegisterForm;
