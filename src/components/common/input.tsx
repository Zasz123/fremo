import styled from "styled-components";

export const AuthInput = styled.input<{ width?: string }>`
  outline: none;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  width: ${({ width }) => (width !== undefined ? width : "100%")};
  height: 40px;
  font-size: 20px;
  &:focus {
    background-color: #f2f2f2;
  }
  padding-left: 10px;
  margin-bottom: 20px;
`;
