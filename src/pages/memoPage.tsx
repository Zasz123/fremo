import React from "react";
import styled from "styled-components";

import PageTemplete from "../components/base/pageTemplete";
import MemoContainer from "../containers/memo/memoContainer";

const MemoWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  padding: 100px 110px;

  display: flex;

  justify-content: space-between;
`;

const MemoPage = () => {
  return (
    <PageTemplete height={800}>
      <MemoWrapper>
        <MemoContainer />
      </MemoWrapper>
    </PageTemplete>
  );
};

export default MemoPage;
