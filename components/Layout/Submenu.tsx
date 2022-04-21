import { IntSubmenu } from "../../types/interface"
import MenuItem from "./MenuItem"
import { SubmenuWrapper } from "./styles";
const Submenu = ({children,path,title}:IntSubmenu) => {
    return(
        <SubmenuWrapper>
            <MenuItem
                isExpand={true}
                isMain={true}
                isSubmenu={false}
                path={path}
                title={title}
            />
            <ul>
                {children}
            </ul>
        </SubmenuWrapper>
    )
}
export default Submenu;