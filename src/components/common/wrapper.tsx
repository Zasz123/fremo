import styled from "styled-components";

export const Templete = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div<{ existsAppBar?: boolean }>`
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
  padding-top: ${({ existsAppBar }) => (existsAppBar ? 60 : 0)}px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Block = styled.article<{ height: number }>`
  width: 100%;
  box-shadow: 0px 0px 50px grey;
  height: ${({ height }) => height}px;

  display: flex;
  flex-direction: row;
`;
