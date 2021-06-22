import React, { useEffect } from "react";

import { useInput } from "../../hooks/common/useInputs";
import { useBoolean } from "../../hooks/common/useBoolean";
import { useMemo } from "../../hooks/memo/useMemo";
import useMemoStatus from "../../hooks/memo/useStatus";

import MemoArticle from "../../components/memo/memoArticle";
import MemoComment from "../../components/memo/memoComment";
import { writeComment } from "../../lib/api/comment";

const MemoContainer = () => {
  const { data: comment, onChange, setData: setComment } = useInput();
  const { data: isLoading, setData: setIsLoading } = useBoolean();
  const { data: writeLading, setData: setWriteLoading } = useBoolean();
  const { getRandomMemo } = useMemo();
  const { memo } = useMemoStatus();

  const fetchRandomMemo = async () => {
    setIsLoading(true);

    const result = await getRandomMemo();

    setIsLoading(false);

    if (!result) {
      alert("새로운 메모 로딩에 실패했습니다!");
    }
  };

  const onSubmit = async (body: string) => {
    setWriteLoading(true);

    const result = await (
      await writeComment({ comment: body, memoId: memo.id! })
    ).data;

    const isSuccess = result.success;

    setWriteLoading(false);

    if (!isSuccess) {
      alert("한 마디를 남기지 못했어요...");
      return;
    }

    await fetchRandomMemo();
  };

  useEffect(() => {
    fetchRandomMemo();
  }, []);

  return (
    <>
      <MemoArticle
        title={memo.title}
        description={memo.body}
        isLoading={isLoading}
      />
      <MemoComment comment={comment} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default MemoContainer;
