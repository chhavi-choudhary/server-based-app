import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//initialise the state
const initialState = {
    users: [
         {id:1, firstName:"Adam",lastName:"Methew",status:"active"},
         {id:2, firstName:"Parry",lastName:"Andrew",status:"locked"},
        {id:3, firstName:"Eszter",lastName:"Puskas",status:"active"},
        {id:4, firstName:"Nora",lastName:"Fathei",status:"locked"}
    ]
  }

  //to create context
  export const GlobalContext = createContext(initialState);
  //global provider  component
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
   
    const addUser = (user) => {
        dispatch({
          type: 'ADD_USER',
          payload: user
        })
      }

      const editUser = (user) => {
        dispatch({
          type: 'EDIT_USER',
          payload: user
        })
      }
      return (
        <GlobalContext.Provider value={{
          users: state.users,
          addUser,
          editUser
        }}>
          {children}
        </GlobalContext.Provider>
      )
    }