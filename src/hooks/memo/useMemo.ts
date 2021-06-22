import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { getRandomMemoRequest } from "../../lib/api/memo";
import { fetchRandomMemo } from "../../modules/memo";

export function useMemo() {
  const dispatch = useDispatch();

  const getRandomMemo = useCallback(async () => {
    const result = await (await getRandomMemoRequest()).data;

    const isSuccess = result.success;

    if (!isSuccess) {
      return false;
    }

    const memo = result.data.randomMemo;

    if (memo === null) {
      return false;
    }

    dispatch(
      fetchRandomMemo({
        id: memo.id,
        title: memo.title,
        body: memo.body,
        writer: memo.writer,
        createdAt: memo.createdAt,
      })
    );

    return true;
  }, [dispatch]);

  return {
    getRandomMemo,
  };
}
