import { useContext } from "react";
import Footer from "../components/Layout/Footer/Footer/Footer";
import LangBox from "../components/Layout/LangBox/LangBox/LangBox";
import Navigation from "../components/Layout/Navigation/Navigation/Navigation";
import { Provider as Lang, Context as LangContext } from "../context/LangContext";
import { Provider as Theme } from "../context/ThemeContext";
import { Global } from "../styles/Global";
import { IntLayout } from "../typings/interface";
const Layout = ({children,isHome=false}:IntLayout) => {
    const {isOpen} = useContext(LangContext);
    return(
        <Theme>
            <>
                <Global/>
                <Navigation isHome={isHome}/>
                <>
                    {children}
                </>
                <Footer/>
                <LangBox/>
            </>
        </Theme>
    )   
}
export default Layout;