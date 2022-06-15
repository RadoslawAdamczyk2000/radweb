import Brand from "../Brand/Brand";
import Menu from "../Menu/Menu/Menu";
import Options from "../Options/Options/Options";
import { IntNavigation } from "./interface";
import { NavigationWrapper } from "./styles";
const Navigation = ({isHome}:IntNavigation) => {
    return(
        <NavigationWrapper isHome={isHome}>
            <Brand/>
            <Menu/>
            <Options/>
        </NavigationWrapper>
    )
}
export default Navigation;