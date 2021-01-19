import React, {createContext, Dispatch, FC, useReducer} from 'react';
import reducer, {defaultState, State} from "./reducer";
import {ActionType} from "./action";


const Context = createContext<{ state: State, dispatch: Dispatch<ActionType> }>({state: defaultState} as any);


export const ContextProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
};

export default Context;