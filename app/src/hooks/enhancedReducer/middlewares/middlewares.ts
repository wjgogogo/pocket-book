import {Dispatch} from "react";
import {ActionType} from "../reducer/action";
import compose from "./compose";

export type EnhancedActionType = ActionType | ((d: Dispatch<ActionType>) => void);
export type EnhancedDispatch = (action: EnhancedActionType) => void;

export const thunkMiddleware = (next: Dispatch<ActionType>) => (action: EnhancedActionType) => {
  if (typeof action === "function") {
    return action(next);
  }
  return next(action)
}

type ThunkMiddlewareNext = ReturnType<typeof thunkMiddleware>;

export const loggerMiddleware = (next: ThunkMiddlewareNext) => (action: EnhancedActionType) => {
  console.log("dispatch action", action)
  return next(action);
}

export default compose(loggerMiddleware, thunkMiddleware);
