import { createContext, ReactElement, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

export const Context = createContext({
    handle:() => {},
    value:false,
});
export const Provider = ({children}:{children:ReactElement}) => {
    const [isDarkMode,setDarkMode] = useState(false);
    return(
        <Context.Provider value={{
            value:isDarkMode,
            handle:() => {setDarkMode(!isDarkMode)},
        }}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <>
                    {children}
                </>
            </ThemeProvider>
        </Context.Provider>
    )

}
