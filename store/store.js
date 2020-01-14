import React, { createContext, useReducer } from 'react';

const initialState = { user: null };
const store = createContext(initialState);
const { Provider } = store;
import { NESPERA_API_URL } from 'react-native-dotenv';

const createUserInDatabase = async newuser => {
  const response = await fetch('http://nespera-api.herokuapp.com/Users/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: newuser.name,
      email: newuser.email
    })
  });

  const resData = await response.json();
  return resData;
};

const getUserInDatabase = async email => {
  const response = await fetch('http://nespera-api.herokuapp.com/Users/' + email);
  const resData = await response.json();
  return resData;
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(async (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'firebase signup success':
        const userFromDatabase = await createUserInDatabase(payload);
        const newState = await userFromDatabase;
        return newState;

      case 'firebase login success':
        const userFromDatabase2 = await getUserInDatabase(payload);
        const newState2 = await userFromDatabase2;
        return newState2;

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
