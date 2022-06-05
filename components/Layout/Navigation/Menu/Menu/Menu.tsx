import { useContext } from "react";
import { Context } from "../../../../../context/MenuContext";
import { menu } from "../../../../../data/menu"
import MenuItem from "../MenuItem/MenuItem";
import Submenu from "../Submenu/Submenu";
import { MenuWrapper } from "./styles";
const Menu = () => {
    const { isActive } = useContext(Context);
    console.log(isActive);
    return(
        <>
            {
                isActive &&
                <MenuWrapper>
                    {menu.map(({isExpand,path,submenu,title},key:number) =>
                        <>
                            {
                                isExpand ?
                                <Submenu
                                    handle={() => alert(title)}
                                    key={key}
                                    path='/'
                                    submenu={submenu}
                                    title={title}
                                /> :
                                <MenuItem
                                    isMain={true}
                                    handle={() => alert(title)}
                                    key={key}
                                    path='/'
                                    title={title}
                                />
                            }
                        </>
                    )}
                </MenuWrapper>
            }
        </>
    )
}
export default Menu;