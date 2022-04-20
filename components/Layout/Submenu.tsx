import { IntSubmenu } from "../../types/interface"
import MenuItem from "./MenuItem"
const Submenu = ({children,path,title}:IntSubmenu) => {
    return(
        <li>
            <MenuItem
                isExpand={true}
                isMain={false}
                isSubmenu={false}
                path={path}
                title={title}
            />
            <ul>
                {children}
            </ul>
        </li>
    )
}
export default Submenu;