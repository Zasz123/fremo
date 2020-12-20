import styled from "styled-components";

export const NormalButton = styled.button<{ width?: string }>`
  border: none;
  padding: 10px;
  width: ${({ width }) => (width !== undefined ? width : "100%")};
`;
