import { ReactElement} from "react";
import MenuItem from "../../../atoms/Layout/Navigation/MenuItem"
import { SubmenuWrapper } from "./styles/SubmenuWrapper";
interface i {
    children : ReactElement<any>,
    path : string,
    submenuAction : any,
    submenuValue : boolean
    title : string
}
const Submenu = ({children,path,submenuAction,submenuValue,title}:i) => {
    return(
        <SubmenuWrapper>
            <MenuItem
                isExpand={true}
                isMain={false}
                isSubmenu={false}
                path={path}
                submenuAction={submenuAction}
                title={title}
            />
            {
                submenuValue &&
                <ul>
                    {children}
                </ul>
            }
        </SubmenuWrapper>
    )
}
export default Submenu;