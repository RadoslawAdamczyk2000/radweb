import MenuButton from "../../../atoms/Layout/Navigation/MenuButton"
import ThemeButton from "../../../atoms/Layout/Navigation/ThemeButton"
import { OptionsWrapper } from "./styles/OptionsWrapper";
interface i {
    changeTheme : any,
    handleMenu : any
}
const Options = ({changeTheme,handleMenu}:i) => {
    return(
        <OptionsWrapper>
            <ThemeButton changeTheme={changeTheme}/>
            <MenuButton handleMenu={handleMenu} />
        </OptionsWrapper>
    )
}
export default Options;