import {AnimatePresence,motion} from 'framer-motion';
import { useState } from "react";
import Item from "../Item/Item";
import { IntSubmenu, IntSubmenuMap } from "./interface";
import { SubmenuWrapper } from "./styles";
const Submenu = ({handle,path,submenu,title}:IntSubmenu) => {
    const [isOpen,setOpen] = useState(false);
    return(
        <SubmenuWrapper
            onMouseLeave={() => setOpen(false)}
        >
            <Item
                isExpand={true}
                path={path}
                title={title}
                handleExpand={() => setOpen(!isOpen)}
            />
            {
                isOpen &&
                <AnimatePresence>
                    <motion.ul
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        {submenu.map(({path,title}:IntSubmenuMap,key:number) =>
                            <Item
                                isSubmenu={true}
                                key={key}
                                path={path}
                                title={title}
                                handle={handle}
                            />
                        )}
                    </motion.ul>
                </AnimatePresence>
            }
        </SubmenuWrapper>
    )
}
export default Submenu;