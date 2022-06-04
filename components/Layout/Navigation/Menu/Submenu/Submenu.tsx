import { useEffect, useState } from "react"
import MenuItem from "../MenuItem/MenuItem"
import {AnimatePresence,motion} from 'framer-motion'
import { IntSubmenu, IntSubmenuMap } from "./interface";
import { SubmenuWrapper } from "./styles";
const Submenu = ({handle,path,submenu,title}:IntSubmenu) => {
    const [active,setActive] = useState(false);
    return(
        <SubmenuWrapper
            onMouseLeave={() => setActive(false)}
        >
            <MenuItem
                isExpand={true}
                handle={handle}
                handleExpand={() => setActive(!active)}
                path={path}
                title={title}
            />
            {
                active &&
                <AnimatePresence>
                    <motion.ul
                        initial={{
                            opacity:0,
                            y:-30,
                            visibility:'hidden'
                        }}
                        animate={{
                            opacity:1,
                            y:0,
                            visibility:'visible'
                        }}
                        exit={{
                            opacity:0,
                            y:-30,
                            visibility:'hidden'
                        }}
                        transition={{
                            delay:.015,
                            duration:.25,
                            type:'tween'
                        }}
                    >
                        {
                            submenu && submenu.map(({path,title},key:number) => 
                                <MenuItem
                                    handle={() => alert(title)}
                                    key={key}
                                    isSubmenu={true}
                                    path={path}
                                    title={title}
                                />
                            )
                        }
                        
                    </motion.ul>
                </AnimatePresence>
            }
        </SubmenuWrapper>
    )
}
export default Submenu;