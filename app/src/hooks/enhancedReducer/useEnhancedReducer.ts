import {useMemo, useReducer} from "react";
import chain from "./middlewares/middlewares";
import reducer, {defaultState} from "./reducer/reducer";

export const useEnhancedReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const enhancedDispatch = useMemo(
    () => chain(dispatch),
    [dispatch])

  return {state, dispatch: enhancedDispatch}
};