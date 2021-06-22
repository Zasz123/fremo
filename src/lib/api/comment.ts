import { AxiosResponse } from "axios";
import { postRequest } from "./api";
import { IWriteComment } from "../../types/comment/comment";

export const writeComment = async ({ comment, memoId }: IWriteComment) => {
  const result: AxiosResponse = await postRequest("/comment", {
    body: comment,
    memoId,
  });

  return result;
};
