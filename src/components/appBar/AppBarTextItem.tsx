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
  path?: string;
  onClickButton?: () => void;
}

const AppBarTextItem = ({ title, path, onClickButton }: IProps) => {
  const history = useHistory();

  const onClick = () => {
    if (path !== undefined) {
      history.push(path);
    }

    if (onClickButton !== undefined) {
      onClickButton();
    }
  };

  return <TextButton onClick={onClick}>{title}</TextButton>;
};

export default AppBarTextItem;
