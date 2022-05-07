import { IntMenuButton } from "../../../types/interface";
import { MenuButtonWrapper } from "./styles";
const MenuButton = ({isActive,handle}:IntMenuButton) => {
    return(
        <MenuButtonWrapper active={isActive} onClick={handle}>
            <span/>
            <span/>
        </MenuButtonWrapper>
    )
}
export default MenuButton;