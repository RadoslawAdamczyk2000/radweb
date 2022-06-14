import { useState } from "react";
import { MenuWrapper } from "./styles";

const Menu = () => {
    const [isOpen,setOpen] = useState(false);
    return(
        <MenuWrapper isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
            <span/>
            <span/>
            <span/>
        </MenuWrapper>
    )
}
export default Menu;