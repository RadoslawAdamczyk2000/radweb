import { menu } from "../../../../../data/menu";
import MenuItem from "../MenuItem/MenuItem";
import MenuSection from "../MenuSection/MenuSection";
import { MenuWrapper } from "./styles";
const Menu = () => {
    console.log(menu);
    return(
        <MenuWrapper>
            <div>
                <div>
                    {menu.map(({isExpand,path,title} ) =>
                        <>
                            {
                                !isExpand &&
                                <MenuItem
                                    path={path}
                                    title={title}
                                />
                            }
                        </>
                    )}  
                </div>
                {menu.map(({isExpand,submenu,title} ) =>
                    <>
                        {
                            isExpand &&
                            <MenuSection
                                menu={submenu}
                                title={title}
                            /> 
                        }
                    </>
                )}
            </div>
        </MenuWrapper>
    )
}
export default Menu;