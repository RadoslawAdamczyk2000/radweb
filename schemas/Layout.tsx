import { ThemeProvider } from "styled-components"
import Lang from "../components/Layout/Lang/Lang/Lang"
import Navigation from "../components/Layout/Navigation/Navigation/Navigation"
import { Global } from "../styles/Global"
import { theme } from "../styles/theme"
import { IntLayout } from "./interface"
const Layout = ({children}:IntLayout) => {
    return(
        <ThemeProvider theme={theme}>
            <>
                <Global/>
                <Navigation/>
                <>
                    {children}
                </>
                <Lang/>
            </>
        </ThemeProvider>
    )
}
export default Layout;