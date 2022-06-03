import { menu } from "../../../../../data/menu"
import MenuItem from "../MenuItem/MenuItem";
import Submenu from "../Submenu/Submenu";
import { MenuWrapper } from "./styles";
const Menu = () => {
    return(
        <MenuWrapper>
            {menu.map(({isExpand,path,submenu,title}) =>
                <>
                    {
                        isExpand ?
                        <Submenu
                            handle={() => console.log(title)}
                            path={path}
                            submenu={submenu}
                            title={title}
                        /> :
                        <MenuItem
                            isMain={true}
                            handle={() => console.log(title)}
                            path={path}
                            title={title}
                        />
                    }
                </>
            )}
        </MenuWrapper>
    )
}
export default Menu;