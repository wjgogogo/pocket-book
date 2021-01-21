import React, {createContext, FC, useEffect} from 'react';
import {useEnhancedReducer} from "../../hooks/enhancedReducer/useEnhancedReducer";
import {defaultState, State} from "../../hooks/enhancedReducer/reducer/reducer";
import {EnhancedDispatch} from "../../hooks/enhancedReducer/middlewares/middlewares";
import {fetchRecordListAsync} from "../../hooks/enhancedReducer/reducer/asyncAction";

export const Context = createContext<{
  state: State,
  dispatch: EnhancedDispatch;
}>
({state: defaultState} as any);


export const ContextProvider: FC = ({children}) => {
  const store = useEnhancedReducer();

  // refetch data each time select different month
  useEffect(() => {
    store.dispatch(fetchRecordListAsync(store.state.currentMonth))
  }, [store.state.currentMonth])

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;