import LangButton from "../LangButton/LangButton";
import MenuButton from "../MenuButton/MenuButton";
import ThemeButton from "../ThemeButton/ThemeButton"
import { OptionsWrapper } from "./styles";
const Options = () => {
    return(
        <OptionsWrapper>
            <LangButton/>
            <ThemeButton/>
            <MenuButton/>
        </OptionsWrapper>
    )
}
export default Options;