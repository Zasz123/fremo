import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type MemoActions = ActionType<typeof actions>;
