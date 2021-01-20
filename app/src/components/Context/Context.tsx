import React, {createContext, FC} from 'react';
import {useEnhancedReducer} from "../../hooks/enhancedReducer/useEnhancedReducer";
import {defaultState, State} from "../../hooks/enhancedReducer/reducer/reducer";
import {EnhancedDispatch} from "../../hooks/enhancedReducer/middlewares/middlewares";

const Context = createContext<{
  state: State,
  dispatch: EnhancedDispatch;
}>
({state: defaultState} as any);


export const ContextProvider: FC = ({children}) => {
  const store = useEnhancedReducer();

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export default Context;