import { navigation } from "../../../../data/navigation";
import MenuItem from "../../../atoms/Layout/Navigation/MenuItem";
import Submenu from "../../../bacterias/Layout/Navigation/Submenu";
import { MenuWrapper } from "./styles/MenuWrapper";
interface i {
    blogValue : boolean,
    blogAction : any,
    offerValue : boolean,
    offerAction : any
}
const Menu = ({blogValue,blogAction,offerValue,offerAction}:i) => {
    const {menu,blog,offers} = navigation.pl;
    return(
        <MenuWrapper>
            <MenuItem 
                isExpand={false} 
                isMain={true} 
                isSubmenu={false} 
                path={menu[0].path}
                title={menu[0].title}
            />
            <MenuItem 
                isExpand={false} 
                isMain={true} 
                isSubmenu={false} 
                path={menu[1].path}
                title={menu[1].title}
            />
            <MenuItem 
                isExpand={false} 
                isMain={true} 
                isSubmenu={false} 
                path={menu[2].path}
                title={menu[2].title}
            />
            {/* <Submenu
                submenuValue={blogValue}
                submenuAction={blogAction}
                path={menu[2].path}
                title={menu[2].title}
            >
                <>
                   {blog.map(({path,title}) => <MenuItem 
                        isExpand={false} 
                        isMain={false} 
                        isSubmenu={true} 
                        path={path}
                        title={title}
                    />)}
                </>
            </Submenu> */}
            <MenuItem 
                isExpand={false} 
                isMain={true} 
                isSubmenu={false} 
                path={menu[3].path}
                title={menu[3].title}
            />
                
            <Submenu
                submenuValue={offerValue}
                submenuAction={offerAction}
                path={menu[4].path}
                title={menu[4].title}
            >
                <>
                {offers.map(({path,title}) => 
                    <MenuItem 
                        isExpand={false} 
                        isMain={false} 
                        isSubmenu={true}
                        key={title} 
                        path={path}
                        title={title}
                    />
                )}
                </>
            </Submenu>
            <MenuItem 
                isExpand={false} 
                isMain={true} 
                isSubmenu={false} 
                path={menu[5].path}
                title={menu[5].title}
            />
            <MenuItem 
                isExpand={false} 
                isMain={true} 
                isSubmenu={false} 
                path={menu[6].path}
                title={menu[6].title}
            />
        </MenuWrapper>
    )
}
export default Menu;