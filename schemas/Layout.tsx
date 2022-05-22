import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Footer from "../components/Layout/Footer/Footer";
import Navigation from "../components/Layout/Navigation/Navigation";
import Seo from "../components/Layout/Seo/Seo";
import { Global } from "../styles/Global";
import { darkTheme, lightTheme } from "../styles/theme";
import { IntLayout } from "../types/interface";
const Layout = ({canonical,children,description,image,robots,title,typePage}:IntLayout) => {
    const [theme,setTheme] = useState(false);
    return(
        <ThemeProvider theme={!theme ? lightTheme : darkTheme}>
            <Seo
                description={description}
                image={image}
                title={title}
                canonical={canonical}
                robots={robots}
                typePage={typePage}
            />
            <Global/>
            <Navigation/>
            <div>
                {children}
            </div>
            <Footer/>
        </ThemeProvider>
    )
}
export default Layout;