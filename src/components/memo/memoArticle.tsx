import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  width: 50%;
`;

const ArticleTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;

  margin-bottom: 50px;
`;

const ArticleDescription = styled.p`
  font-size: 20px;
`;

interface IProps {
  title: string;
  description: string;
  isLoading: boolean;
}

const MemoArticle = ({ title, description, isLoading }: IProps) => {
  return (
    <ArticleWrapper>
      {isLoading ? (
        <>로딩중...</>
      ) : (
        <>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDescription>{description}</ArticleDescription>
        </>
      )}
    </ArticleWrapper>
  );
};

export default MemoArticle;
