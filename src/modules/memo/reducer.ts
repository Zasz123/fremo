import { createReducer } from "typesafe-actions";
import { MemoState } from "./interface";
import { MemoActions } from "./types";
import { FETCH_RANDOM_MEMO } from "./actions";

const initialState: MemoState = {
  memo: {
    id: 0,
    title: "",
    body: "",
  },
};

const reducer = createReducer<MemoState, MemoActions>(initialState, {
  [FETCH_RANDOM_MEMO]: (state, { payload: memo }) => {
    return {
      ...state,
      memo,
    };
  },
});

export default reducer;
