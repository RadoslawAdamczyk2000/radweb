import { useContext, useState } from "react";
import { MenuContext } from "../../../../../context/MenuContext";
import { MenuWrapper } from "./styles";

const Menu = () => {
    const {isOpen,toggleOpen} = useContext(MenuContext);
    return(
        <MenuWrapper isOpen={isOpen} onClick={() => toggleOpen()}>
            <span/>
            <span/>
            <span/>
        </MenuWrapper>
    )
}
export default Menu;