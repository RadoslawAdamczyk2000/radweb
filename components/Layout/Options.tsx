import MenuButton from "./MenuButton"
import ThemeButton from "./ThemeButton"
import { IntOptions } from "../../types/interface"
import { OptionsWrapper } from "./styles"
const Options = ({active,handleMenuButton,handleThemeButton,isLight}:IntOptions) => {
    return(
        <OptionsWrapper>
            <ThemeButton handleThemeButton={handleThemeButton} isLight={isLight}/>
            <MenuButton active={active} handleMenuButton={handleMenuButton}/>
        </OptionsWrapper>
    )
}
export default Options;