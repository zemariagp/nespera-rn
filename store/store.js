import React, { createContext, useReducer } from 'react';

const initialState = { user: null };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {

      case "firebase auth success":
        const newState = { user: action.payload.user.uid }
        console.log(newState);
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }