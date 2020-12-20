import styled from "styled-components";

export const NormalInput = styled.input<{ width?: string }>`
  border-radius: 5px;
  outline: none;
  border: none;
  width: ${({ width }) => (width !== undefined ? width : "100%")};
  height: 40px;
  font-size: 20px;
  &:focus {
    background-color: #f2f2f2;
  }
`;
