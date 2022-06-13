import { menu } from "../../../../../data/menu";
import MenuItem from "../MenuItem/MenuItem";
import MenuSection from "../MenuSection/MenuSection";
import { MenuWrapper } from "./styles";
const Menu = () => {
    return(
        <MenuWrapper>
            <div>
                <div>
                    {menu.pl.map(({isExpand,path,title} ) =>
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
                {menu.pl.map(({isExpand,submenu,title} ) =>
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