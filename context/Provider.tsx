import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";

export const initialState = {
  error: null,
};

type Action = {
  type: "SET_ERROR" | "RESET_ERROR";
  payload?: string;
};

type StateType = {
  error: string | null;
};

function reducer<S extends StateType, T extends Action>(state: S, action: T) {
  switch (action.type) {
    case "SET_ERROR": {
      return { ...state, error: action.payload };
    }

    case "RESET_ERROR": {
      return { ...state, error: null };
    }

    default:
      return state;
  }
}

export const AppContext = createContext<{
  state: StateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

function ContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
