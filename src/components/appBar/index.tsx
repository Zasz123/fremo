import React from "react";
import styled from "styled-components";

import useStatusAuth from "../../hooks/auth/useStatus";

import AppBarMainIcon from "./AppBarMainIcon";
import AppBarTextItem from "./AppBarTextItem";

const AppBarBlock = styled.header`
  width: 100%;
  height: 60px;
  padding: 20px 320px;

  background-color: white;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
`;

const AppBarMenuWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AppBarAccountInfoWrapper = styled.div``;

const AppBar = () => {
  const { info, isLoggedIn } = useStatusAuth();

  return (
    <AppBarBlock>
      <AppBarMenuWrapper>
        <AppBarMainIcon />
        <AppBarTextItem path="/memo" title="메모" />
        <AppBarTextItem path="/memo/my" title="내 메모" />
        <AppBarTextItem path="/connect" title="연결" />
      </AppBarMenuWrapper>
      <AppBarAccountInfoWrapper>
        {isLoggedIn ? (
          <>
            <AppBarTextItem title={info.nickName} path="/" />
            <AppBarTextItem title="로그아웃" path="/" />
          </>
        ) : (
          <>
            <AppBarTextItem title="로그인" path="/auth/login" />{" "}
            <AppBarTextItem title="회원가입" path="/auth/register" />
          </>
        )}
      </AppBarAccountInfoWrapper>
    </AppBarBlock>
  );
};

export default AppBar;
