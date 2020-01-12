import React, { createContext, useReducer } from 'react';

const initialState = { user: null };
const store = createContext(initialState);
const { Provider } = store;
import {NESPERA_API_URL} from "react-native-dotenv";

const createUserInDatabase = async (user) => {
  const response = await fetch(NESPERA_API_URL+"/App-Users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      name: user.name,
      email: user.email, 
      profilePicUrl: "http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png", 
      
     })
  });
 
  const resData = await response.json();
return resData;

}

const getUserInDatabase = async (email) => {
  const response = await fetch(NESPERA_API_URL+"/App-Users?email="+email);
   const resData = await response.json();
   return resData[0];
   
 
}



const StateProvider = ({ children }) => {
   const [state, dispatch] = useReducer((state, action) => {
  

    switch (action.type) {
      
      case "firebase signup success":
        
        const userFromDatabase =createUserInDatabase(action.payload);

         const newState = userFromDatabase;
         console.log(newState);
        return newState;

        case "firebase login success":
         const userFromDatabase2 = getUserInDatabase(action.payload);
          const newState2 = userFromDatabase2;
  
          return newState2;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
 
export { store, StateProvider }

