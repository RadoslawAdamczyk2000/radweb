import { IntMenuButton } from "../../types/interface";
import {MenuButtonWrapper} from  './styles';
const MenuButton = ({active=false,handleMenuButton}:IntMenuButton) => {
    return(
        <MenuButtonWrapper active={active} onClick={handleMenuButton}>
            <span/>
            <span/>
            <span/>
        </MenuButtonWrapper>
    )
}
export default MenuButton;