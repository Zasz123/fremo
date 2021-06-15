import React from "react";
import styled from "styled-components";

import smileImage from "../../assets/image/smileIcon.svg";

const AuthWelcomeBlock = styled.article`
  width: 550px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeImage = styled.img`
  margin-bottom: 30px;

  width: 190px;
  height: 190px;
`;

const WelcomeText = styled.h1`
  font-size: 40px;
  letter-spacing: 0.4;
  color: white;
  font-weight: 500;
`;

const AuthWelcome = () => {
  return (
    <AuthWelcomeBlock>
      <WelcomeImage src={smileImage} alt="welcomeImage" />
      <WelcomeText>FreMo</WelcomeText>
      <WelcomeText>환영합니다.</WelcomeText>
    </AuthWelcomeBlock>
  );
};

export default AuthWelcome;
