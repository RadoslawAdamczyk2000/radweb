import Brand from "../Brand/Brand";
import Menu from "../Menu/Menu/Menu";
import Options from "../Options/Options/Options";
import { NavigationWrapper } from "./styles";

const Navigation = () => {
    return(
        <NavigationWrapper>
            <Brand/>
            <Menu/>
            <Options/>
        </NavigationWrapper>
    )
}
export default Navigation;