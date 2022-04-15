import Head from "next/head"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Socials from "../components/atoms/Layout/Footer/Socials";
import Footer from "../components/cells/Layout/Footer/Footer";
import Navigation from "../components/molecules/Layout/Navigation/Navigation";
import { footer } from "../data/footer";
import { Global } from "../styles/Global";
import { darkTheme, lightTheme } from "../styles/theme";
interface i {
    children : any,
    description : string,
    seoImg : string,
    title : string
}
const Layout = ({children,description,seoImg,title}:i) => {
    const [theme,setTheme] = useState(false);
    return(
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <Head>
                <meta name='author' content='Radoslaw Adamczyk - RadWEB'/>
                <meta name="description" content={description} />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={seoImg} />
                <script 
                    async 
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2145985197806639" 
                    crossOrigin="anonymous"
                />
            </Head>
            <Global/>
            <Navigation changeTheme={() => setTheme(!theme)}/>
            <div>
                {children}
            </div>
            <Footer/>
        </ThemeProvider>
    )
}
export default Layout;