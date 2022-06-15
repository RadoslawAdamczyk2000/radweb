import { ThemeProvider } from "styled-components"
import Lang from "../components/Layout/Lang/Lang/Lang"
import Navigation from "../components/Layout/Navigation/Navigation/Navigation"
import { LangProvider } from "../context/LangContext"
import { Global } from "../styles/Global"
import { theme } from "../styles/theme"
import { IntLayout } from "./interface"
const Layout = ({children,isHome=false}:IntLayout) => {
    return(
        <ThemeProvider theme={theme}>
            <LangProvider>
                <>
                    <Global/>
                    <Navigation
                        isHome={isHome}
                    />
                    <>
                        {children}
                    </>
                    <Lang/>
                </>
            </LangProvider>
        </ThemeProvider>
    )
}
export default Layout;