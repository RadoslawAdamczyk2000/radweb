import { IntSubmenu } from "../../types/interface"
import MenuItem from "./MenuItem"
import { SubmenuWrapper } from "./styles";
const Submenu = ({cards,children,handle,path,title}:IntSubmenu) => {
    return(
        <SubmenuWrapper>
            <MenuItem
                isExpand={true}
                isMain={true}
                isSubmenu={false}
                handle={handle}
                path={path}
                title={title}
            />
            {
                cards &&
                <ul>
                    {children}
                </ul>
            }
        </SubmenuWrapper>
    )
}
export default Submenu;