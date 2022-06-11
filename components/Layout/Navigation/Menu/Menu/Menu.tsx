import { useContext } from "react";
import { Context } from "../../../../../context/MenuContext";
import { menu } from "../../../../../data/menu"
import MenuItem from "../MenuItem/MenuItem";
import Submenu from "../Submenu/Submenu";
import { MenuWrapper } from "./styles";
const Menu = () => {
    const { isActive,handle } = useContext(Context);
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
                                    handle={() => handle()}
                                    key={key}
                                    path={path}
                                    submenu={submenu}
                                    title={title}
                                /> :
                                <MenuItem
                                    isMain={true}
                                    handle={() => handle()}
                                    key={key}
                                    path={path}
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