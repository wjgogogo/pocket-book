import {Dispatch} from "react";
import {ActionType} from "../reducer/action";
import compose from "./compose";

export type EnhancedActionType = ActionType | ((d: Dispatch<ActionType>) => void);
export type EnhancedDispatch = (action: EnhancedActionType) => void;

export const loggerMiddleware = (next: Dispatch<ActionType>) => (action: ActionType) => {
  console.group("dispatch action")
  console.info(action)
  console.groupEnd()
  return next(action);
}

export const thunkMiddleware = (next: ReturnType<typeof loggerMiddleware>) => (action: EnhancedActionType) => {
  if (typeof action === "function") {
    return action(next);
  }
  return next(action)
}

export default compose(thunkMiddleware, loggerMiddleware);
