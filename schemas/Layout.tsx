import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Footer from "../components/Layout/Footer";
import Navigation from "../components/Layout/Navigation";
import Seo from "../components/Layout/Seo";
import { Global } from "../styles/Global";
import { darkTheme, lightTheme } from "../styles/theme";
interface i {
    children : any,
    description : string,
    seoImg : string,
    title : string,
    canonical?:string,
    robots?:string,
    typePage ?: string
}
const Layout = ({canonical,children,description,seoImg,robots,title,typePage='website'}:i) => {
    const [theme,setTheme] = useState(false);
    const handleTheme = () => {
        setTheme(!theme);
    }
    return(
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <Seo
                description={description}
                canonical={canonical}
                image={seoImg}
                robots={robots}
                title={title}
                typePage={typePage}
            />  
            <Navigation setTheme={() => handleTheme()} theme={theme} />
            <Global/>
            <div>
                {children}
            </div>
            <Footer/>
        </ThemeProvider>
    )
}
export default Layout;