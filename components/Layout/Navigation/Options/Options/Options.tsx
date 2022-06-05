import MenuButton from "../MenuButton/MenuButton";
import ThemeButton from "../ThemeButton/ThemeButton"
import { OptionsWrapper } from "./styles";
const Options = () => {
    return(
        <OptionsWrapper>
            <ThemeButton/>
            <MenuButton/>
        </OptionsWrapper>
    )
}
export default Options;