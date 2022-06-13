import Item from "../Item/Item";
import { IntSubmenu, IntSubmenuMap } from "./interface";
const Submenu = ({handle,handleExpand,path,submenu,title}:IntSubmenu) => {
    return(
        <li>
            <Item
                isExpand={true}
                path={path}
                title={title}
                handleExpand={handleExpand}
            />
            <ul>
                {submenu.map(({path,title}:IntSubmenuMap,key:number) =>
                    <Item
                        isSubmenu={true}
                        key={key}
                        path={path}
                        title={title}
                        handle={handle}
                    />
                )}
            </ul>
        </li>
    )
}
export default Submenu;