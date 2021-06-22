import React from "react";

import { Templete, Wrapper, Block } from "../common/wrapper";
import AppBar from "../appBar";

interface IProps {
  hideAppBar?: boolean;
  height: number;
  children: React.ReactNode;
}

const PageTemplete = ({ hideAppBar, height, children }: IProps) => {
  return (
    <Templete>
      {hideAppBar ? <></> : <AppBar />}
      <Wrapper existsAppBar={!hideAppBar}>
        <Block height={height}>{children}</Block>
      </Wrapper>
    </Templete>
  );
};

export default PageTemplete;
