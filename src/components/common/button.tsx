import styled from "styled-components";

export const AuthButton = styled.button<{ width?: string }>`
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: ${({ width }) => (width !== undefined ? width : "100%")};

  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.mainColor};
`;
