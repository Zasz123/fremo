import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import useStatus from "../../hooks/auth/useStatus";

const AuthSwitchButton = styled(Link)<{ $isRegister: boolean }>`
  display: block;
  outline: none;
  cursor: pointer;

  border: ${({ $isRegister, theme }) =>
    $isRegister ? "none" : `2px solid ${theme.mainColor}`};
  background-color: ${({ $isRegister, theme }) =>
    $isRegister ? theme.mainColor : "white"};
  color: ${({ $isRegister, theme }) =>
    $isRegister ? "white" : theme.mainColor};

  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 25px;
`;

const AuthSwitchBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const AuthSwitch = () => {
  const { authMode } = useStatus();

  return (
    <AuthSwitchBlock>
      <AuthSwitchButton
        to="/auth/register"
        $isRegister={authMode === "REGISTER"}
      >
        회원가입
      </AuthSwitchButton>
      <AuthSwitchButton to="/auth/login" $isRegister={authMode === "LOGIN"}>
        로그인
      </AuthSwitchButton>
    </AuthSwitchBlock>
  );
};

export default AuthSwitch;
