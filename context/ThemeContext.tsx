import { createContext, ReactElement, useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

export const Context = createContext(false);
export const Provider = ({children}:{children:ReactElement}) => {
    const value = false;
    return(
        <Context.Provider value={value}>
            <ThemeProvider theme={value ? darkTheme : lightTheme}>
                <>
                    {children}
                </>
            </ThemeProvider>
        </Context.Provider>
    )

}
