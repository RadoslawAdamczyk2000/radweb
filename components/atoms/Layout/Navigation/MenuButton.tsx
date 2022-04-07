import { useState } from "react";
import { MenuButtonWrapper } from "./styles/MenuButtonWrapper";
interface i {
    handleMenu : any
}
const MenuButton = ({handleMenu}) => {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        handleMenu();
        setOpen(!isOpen);
    }
    return(
        <MenuButtonWrapper open={isOpen} onClick={() => handleClick()}>
            <span/>
            <span/>
            <span/>
        </MenuButtonWrapper>
    )
}
export default MenuButton;