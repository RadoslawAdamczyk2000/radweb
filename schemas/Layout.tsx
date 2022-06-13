import { ThemeProvider } from "styled-components"
import { Global } from "../styles/Global"
import { theme } from "../styles/theme"

const Layout = ({children}) => {
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