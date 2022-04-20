import Head from "next/head"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Footer from "../components/Layout/Footer";
import Navigation from "../components/Layout/Navigation";
import ld from '../data/ld.json';
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
            <Head>
                <meta name='author' content='Radoslaw Adamczyk - RadWEB'/>
                <meta name="description" content={description} />
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={seoImg} />
                <meta property="og:site_name" content="RadWEB - Programowanie i SEO" />
                <meta property="og:type" content={typePage} />
                <meta property="og:locale" content='pl' />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={seoImg} />
                <meta name="twitter:title" content={title}/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={seoImg}/>
                {robots && <meta name='robots' content={robots}/>}
                {canonical && <link rel='canonical' href={canonical}/>}
                <script 
                    async 
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2145985197806639" 
                    crossOrigin="anonymous"
                />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}
                />
            </Head>
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