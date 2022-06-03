import { useState } from "react"
import MenuItem from "../MenuItem/MenuItem"
import {AnimatePresence,motion} from 'framer-motion'
import { IntSubmenu, IntSubmenuMap } from "./interface";
const Submenu = ({handle,path,submenu,title}:IntSubmenu) => {
    const [active,setActive] = useState(false);
    return(
        <li>
            <MenuItem
                isExpand={true}
                handle={() => setActive(!active)}
                path={path}
                title={title}
            />
            {
                active &&
                <AnimatePresence>
                    <motion.ul>
                        {submenu.map(({path,title}:IntSubmenuMap,key:number) =>
                            <MenuItem
                                handle={handle}
                                key={key}
                                path={path}
                                title={title}
                            />
                        )}
                    </motion.ul>
                </AnimatePresence>
            }
            <ul>
            </ul>
        </li>
    )
}
export default Submenu;