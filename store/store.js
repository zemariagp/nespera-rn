import React, { createContext, useReducer } from 'react';

const initialState = { user: null };
const store = createContext(initialState);
const { Provider } = store;
import { NESPERA_API_URL } from "react-native-dotenv";

const createUserInDatabase = async (newuser) => {
  console.log(newuser);
  const response = await fetch("http://localhost:3000/Users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: newuser.name,
      email: newuser.email,
    })
  });

  const resData = await response.json();
  return resData;

}

const getUserInDatabase = async (email) => {
  console.log("asdaslkdaskdj");
  const response = await fetch("http://localhost:3000/Nesperas.json");

  const resData = await response.json(); a
  return resData[0];


}



const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {


    switch (action.type) {

      case "firebase signup success":

        const userFromDatabase = createUserInDatabase(action.payload);

        const newState = userFromDatabase;
        console.log(newState);
        return newState;

      case "firebase login success":
        const userFromDatabase2 = getUserInDatabase(action.payload);
        console.log(action.payload);
        const newState2 = userFromDatabase2;

        return newState2;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }

