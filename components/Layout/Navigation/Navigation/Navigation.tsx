import Brand from "../Brand/Brand"
import Menu from "../Menu/Menu/Menu"
import Options from "../Options/Options/Options"
import { IntNavigation } from "./interface"

const Navigation = ({isHome}:IntNavigation) => {
    return(
        <nav isHome={isHome}>
            <Brand/>
            <Menu/>
            <Options/>
        </nav>
    )
}
export default Navigation;