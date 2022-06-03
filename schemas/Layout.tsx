import ThemeButton from "../components/All/ThemeButton";
import { Provider } from "../context/ThemeContext";
import { Global } from "../styles/Global";
import { IntLayout } from "../typings/interface";
const Layout = ({children}:IntLayout) => {
    return(
        <Provider>
            <>
                <Global/>
                <ThemeButton/>
                <>
                    {children}
                </>
            </>
        </Provider>
    )   
}
export default Layout;