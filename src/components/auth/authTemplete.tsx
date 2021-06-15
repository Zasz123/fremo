import React from "react";
import styled from "styled-components";

import { Templete, Wrapper, Block } from "../common/wrapper";
interface IProps {
  children: React.ReactNode;
}

const AuthTemplete = ({ children }: IProps) => {
  return (
    <Templete>
      <Wrapper>
        <Block height={600}>{children}</Block>
      </Wrapper>
    </Templete>
  );
};

export default AuthTemplete;
