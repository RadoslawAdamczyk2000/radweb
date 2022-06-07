import { menu } from "../../../../../data/menu";
import MenuItem from "../MenuItem/MenuItem";
import MenuSection from "../MenuSection/MenuSection";
const Menu = () => {
    console.log(menu);
    return(
        <div>
            <div>
                {menu.map(({isExpand,path,submenu,title} ) =>
                    <>
                        {
                            isExpand ?
                            <MenuSection
                                menu={submenu}
                                title={title}
                            /> :
                            <MenuItem
                                path={path}
                                title={title}
                            />
                        }
                    </>
                )}
            </div>
        </div>
    )
}
export default Menu;