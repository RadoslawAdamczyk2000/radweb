import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Navigation from "../components/Layout/Navigation/Navigation";
import { Global } from "../styles/Global";
import { darkTheme, lightTheme } from "../styles/theme";
import { IntLayout } from "../types/interface";
const Layout = ({children}:IntLayout) => {
    const [theme,setTheme] = useState(false);
    return(
        <ThemeProvider theme={!theme ? lightTheme : darkTheme}>
            <Global/>
            <Navigation/>
            <div>
                {children}
            </div>
        </ThemeProvider>
    )
}
export default Layout;