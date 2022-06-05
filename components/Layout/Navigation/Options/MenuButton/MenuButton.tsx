import { IntMenuButton } from "./interface";
const MenuButton = ({handle,isActive}:IntMenuButton) => {
    return(
        <div isActive={isActive} onClick={handle}>
            ||
        </div>
    )
}
export default MenuButton;