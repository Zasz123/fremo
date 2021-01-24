import React from "react";
import styled from "styled-components";

const Templete = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  height: 100vh;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Block = styled.article`
  width: 100%;
  box-shadow: 0px 0px 50px grey;
  height: 600px;

  display: flex;
  flex-direction: row;
`;

interface IProps {
  children: React.ReactNode;
}

const AuthTemplete = ({ children }: IProps) => {
  return (
    <Templete>
      <Wrapper>
        <Block>{children}</Block>
      </Wrapper>
    </Templete>
  );
};

export default AuthTemplete;
