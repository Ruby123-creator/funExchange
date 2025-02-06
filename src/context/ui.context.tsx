import { createContext, useContext, useMemo, useReducer } from "react";

const initialState = {
  userData: "Ruby Pal",
  isLogin: typeof window !== 'undefined'
  ? (localStorage.getItem('isLogin'))
  : null,
  loginModal:false,
};

// Create UIContext
export const UIContext = createContext<any>(null);
UIContext.displayName = "UIContext";

// Reducer function
function uiReducer(state: any, action: { type: string; data: any }) {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, userData: action.data };
    case "SET_LOGIN_USER":
      return {...state, isLogin: action.data};
    case "SET_LOGIN_MODAL":
      return {...state, loginModal: action.data};
    default:
      return state; // Ensure the state is returned in case of unknown action type
  }
}

// UIProvider component
export function UIProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const authorize = (data: any) => dispatch({ type: "SET_USER_DATA", data });
  const setLoginModal = (data: any) => dispatch({ type: "SET_LOGIN_MODAL", data });
  const value = useMemo(() => ({ ...state, authorize,setLoginModal }), [state]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

// Custom Hook for consuming the context
export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
