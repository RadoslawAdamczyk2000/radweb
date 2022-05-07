import Link from "next/link";
import { menu } from "../../../data/menu";
import MenuItem from "./MenuItem";
import { MenuWrapper } from "./styles";
import Submenu from "./Submenu";
const Menu = () => {
    return(
        <MenuWrapper>
            {
                menu.map(({isExpand,path,title,submenu},key) =>
                    <>
                        {
                            isExpand ?
                            <Submenu
                                handle={() => console.log(title)}
                                path={path}
                                title={title}
                                key={key}
                                submenu={submenu}
                            />:
                            <MenuItem
                                isMain={true}
                                title={title}
                                key={key}           
                                path='/'
                                handle={() => console.log(title)}
                            />
                        }
                            
                    </>
                )
            }
        </MenuWrapper>
    )
}
export default Menu;