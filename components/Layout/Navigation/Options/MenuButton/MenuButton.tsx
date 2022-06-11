import { useContext} from "react";
import { Context } from "../../../../../context/MenuContext";
import { MenuButtonWrapper } from "./styles";
const MenuButton = () => {
    const { isActive, handle } = useContext(Context);
    return(
        <MenuButtonWrapper 
            isActive={isActive} 
            onClick={handle}
        >
            <span/>
            <span/>
        </MenuButtonWrapper>
    )
}
export default MenuButton;