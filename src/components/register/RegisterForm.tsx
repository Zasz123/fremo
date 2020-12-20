import React from "react";

import styled from "styled-components";

import { IRegisterForm } from "../../types/auth/register";

import { NormalInput } from "../common/input";
import { NormalButton } from "../common/button";

const RegisterFormBlock = styled.main`
  max-width: 700px;

  padding-top: 200px;
  margin: 0 auto;
`;

const RegisterWrapper = styled.form`
  background-color: #e2e2e2;
  border-radius: 20px;
  padding: 20px;

  *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

interface IProps {
  data: IRegisterForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({ data, onChange, onRegister }: IProps) => {
  return (
    <RegisterFormBlock>
      <RegisterWrapper onSubmit={onRegister}>
        <NormalInput
          placeholder="accountId"
          value={data.accountId}
          name="accountId"
          onChange={onChange}
        />
        <NormalInput
          placeholder="password"
          value={data.password}
          name="password"
          onChange={onChange}
        />
        <NormalInput
          placeholder="name"
          value={data.name}
          name="name"
          onChange={onChange}
        />
        <NormalButton type="submit">회원가입</NormalButton>
      </RegisterWrapper>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
