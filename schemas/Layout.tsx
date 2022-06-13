import { ThemeProvider } from "styled-components"
import Navigation from "../components/Layout/Navigation/Navigation/Navigation"
import { Global } from "../styles/Global"
import { theme } from "../styles/theme"
import { IntLayout } from "./interface"
const Layout = ({children}:IntLayout) => {
    return(
        <ThemeProvider theme={theme}>
            <Global/>
            <Navigation/>
            <>
                {children}
            </>
        </ThemeProvider>
    )
}
export default Layout;