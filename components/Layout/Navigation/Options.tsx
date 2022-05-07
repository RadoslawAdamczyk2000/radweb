import { IntNavigationOptions } from "../../../types/interface";
import MenuButton from "./MenuButton";
import { OptionsWrapper } from "./styles";
import ThemeButton from "./ThemeButton";
const Options = ({isActive,isLight,menuHandle,themeHandle}:IntNavigationOptions) => {
    return(
        <OptionsWrapper>
            <ThemeButton handle={themeHandle} isLight={isLight}/>
            <MenuButton handle={menuHandle} isActive={isActive}/>
        </OptionsWrapper>
    )
}
export default Options;