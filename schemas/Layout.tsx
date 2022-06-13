import { ThemeProvider } from "styled-components"
import { Global } from "../styles/Global"
import { theme } from "../styles/theme"
import { IntLayout } from "./interface"
const Layout = ({children}:IntLayout) => {
    return(
        <ThemeProvider theme={theme}>
            <Global/>
            <>
                {children}
            </>
        </ThemeProvider>
    )
}
export default Layout;