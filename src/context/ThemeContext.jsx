import { createContext, useReducer } from "react";
import React from "react";
export const ThemeContext = createContext();

const changeState = (state, action) => {
    switch(action.type) {
        case "CHANGE_PENDING": 
        return{...state, loading: action.payload}
        default:
            return state
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, { loading: false })

   
    return (
        <ThemeContext.Provider value={{...state, dispatch}}>
            {children}
        </ThemeContext.Provider>);
}
