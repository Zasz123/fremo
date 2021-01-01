import styled from "styled-components";

export const AuthTitle = styled.h1<{ color?: string }>`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${({ color }) => (!!color ? color : "black")};
  margin-bottom: 40px;
`;
