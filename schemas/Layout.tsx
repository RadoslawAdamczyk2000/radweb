import Footer from "../components/Layout/Footer/Footer/Footer";
import Navigation from "../components/Layout/Navigation/Navigation/Navigation";
import { Provider } from "../context/ThemeContext";
import { Global } from "../styles/Global";
import { IntLayout } from "../typings/interface";
const Layout = ({children,isHome=false}:IntLayout) => {
    return(
        <Provider>
            <>
                <Global/>
                <Navigation isHome={isHome}/>
                <>
                    {children}
                </>
                <Footer/>
            </>
        </Provider>
    )   
}
export default Layout;