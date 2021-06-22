import React from "react";
import styled from "styled-components";

const MemoCommentWrapper = styled.div`
  width: 35%;
  padding-top: 90px;

  display: flex;
  flex-direction: column;
`;

const CommentInput = styled.textarea`
  width: 100%;
  resize: none;

  border: solid 1px #949494;
`;

const CommentSubmitButton = styled.button`
  width: 100%;
  height: 80px;
  cursor: pointer;
  color: white;
  background-color: ${({ theme }) => theme.mainColor};
  border: none;

  font-size: 20px;
  font-weight: 600;

  &:active {
    background-color: ${({ theme }) => theme.darkColor};
  }
`;

interface IProps {
  comment: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (memo: string) => Promise<void>;
}

const MemoComment = ({ comment, onChange, onSubmit }: IProps) => {
  return (
    <MemoCommentWrapper>
      <CommentInput rows={20} value={comment} onChange={onChange} />
      <CommentSubmitButton onClick={() => onSubmit(comment)}>
        한 마디
      </CommentSubmitButton>
    </MemoCommentWrapper>
  );
};

export default MemoComment;
