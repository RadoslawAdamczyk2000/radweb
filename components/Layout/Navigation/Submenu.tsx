import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import { IntSubmenu } from "../../../types/interface";
import MenuItem from "./MenuItem";
import { SubmenuWrapper } from "./styles";

const Submenu = ({handle,path,submenu,title}:IntSubmenu) => {
    const [expand,setExpand] = useState(false);
    return(
        <SubmenuWrapper>
            <MenuItem
                handle={handle}
                handleExpand={() => setExpand(!expand)}
                isExpand={true}
                path={path}
                title={title}
            />
            {
                expand &&
                <AnimatePresence>
                    <motion.ul
                        initial={{
                            opacity:0,
                            y:-20,
                            visibility:'hidden'
                        }}
                        animate={{
                            opacity:1,
                            y:0,
                            visibility:'visible'
                        }}
                        exit={{
                            opacity:0,
                            y:-20,
                            visibility:'hidden'
                        }}
                    >
                        {submenu.map(({path,title},key) =>
                            <MenuItem
                                handle={() => console.log(title)}
                                key={key}
                                path={path}
                                title={title}
                                isSubmenu={true}
                            />        
                        )}
                    </motion.ul>
                </AnimatePresence>
            }
        </SubmenuWrapper>
    )
}
export default Submenu;