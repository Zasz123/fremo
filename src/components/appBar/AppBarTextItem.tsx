import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const TextButton = styled.button`
  border: none;
  background-color: transparent;

  font-size: 16px;
  font-weight: bold;

  margin-right: 10px;
  cursor: pointer;
`;

interface IProps {
  title: string;
  path: string;
}

const AppBarTextItem = ({ title, path }: IProps) => {
  const history = useHistory();

  return <TextButton onClick={() => history.push(path)}>{title}</TextButton>;
};

export default AppBarTextItem;
