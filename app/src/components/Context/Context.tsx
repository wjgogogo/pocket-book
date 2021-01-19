import React, {createContext, Dispatch, FC, useCallback, useEffect, useReducer} from 'react';
import reducer, {defaultState, State} from "./reducer";
import {ActionType} from "./action";


type EnhancedDispatch = (fn: ActionType | ((d: Dispatch<ActionType>) => void)) => void;

const Context = createContext<{
  state: State,
  dispatch: EnhancedDispatch;
}>
({state: defaultState} as any);


export const ContextProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const enhancedDispatch = useCallback<EnhancedDispatch>(fn => {
    if (typeof fn === "function") {
      return fn(dispatch);
    }
    dispatch(fn)
  }, [dispatch]);


  useEffect(()=>{

  },[state.currentMonth])

  return (
    <Context.Provider value={{state, dispatch: enhancedDispatch}}>
      {children}
    </Context.Provider>
  );
};

export default Context;