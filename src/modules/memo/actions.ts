import { createAction } from "typesafe-actions";
import { IMemo } from "../../types/memo/memo";

export const FETCH_RANDOM_MEMO = "memo/FETCH_RANDOM_MEMO";
export const fetchRandomMemo = createAction(FETCH_RANDOM_MEMO)<IMemo>();
