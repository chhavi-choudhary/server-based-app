import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const initialState = {
    users: [
        {id:1, firstName:"Adam",lastName:"Methew"},
        //{id:2, firstName:"Parry",lastName:"Andrew"},
        //{id:3, firstName:"Eszter",lastName:"Puskas"},
        //{id:4, firstName:"Nora",lastName:"Fathei"},
    ]
  }
  export const GlobalContext = createContext(initialState);
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const addUser = (user) => {
        dispatch({
          type: 'ADD_USER',
          payload: user
        })
      }
      return (
        <GlobalContext.Provider value={{
          users: state.users,
          addUser,
          //editUser
        }}>
          {children}
        </GlobalContext.Provider>
      )
    }