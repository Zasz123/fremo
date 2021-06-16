import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  height: 100%;
  width: 100px;

  // 나중에 제거
  background-color: grey;
  margin-right: 10px;
  cursor: pointer;
`;

const AppBarMainIcon = () => {
  return <IconWrapper></IconWrapper>;
};

export default AppBarMainIcon;
