import { createContext } from "react";
import { doctors } from "../assets/assets";
import React from 'react'
export const AppComtext = createContext()

const AppContextProvider = (props) =>{

    const value = {
            doctors
    }
    return(
        <AppComtext.Provider value={value}>

            {props.children}
        </AppComtext.Provider>
    )
}
export default AppContextProvider