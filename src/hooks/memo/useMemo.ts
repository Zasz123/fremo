import { useCallback } from "react";
import { useDispatch } from "react-redux";

import useRequest from "../api/useRequest";

import { fetchRandomMemo } from "../../modules/memo";

export function useMemo() {
  const dispatch = useDispatch();
  const { getRequest } = useRequest();

  const getRandomMemo = useCallback(async () => {
    const result = await (await getRequest("/memo")).data;

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
