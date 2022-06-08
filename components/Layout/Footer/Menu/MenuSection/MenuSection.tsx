import { IntMenuItem } from "../MenuItem/interface"
import MenuItem from "../MenuItem/MenuItem"
import { IntMenuSection } from "./interface";
import {FiChevronDown} from "react-icons/fi";
import { useState } from "react";
import { MenuSectionWrapper } from "./styles";
import { AnimatePresence,motion } from "framer-motion";
const MenuSection = ({menu,title}:IntMenuSection) => {
    const [isOpen,setOpen] = useState(true);
    const handle = () => {
        if(typeof window !== undefined){
            if(window.innerWidth <= 715){
                setOpen(!isOpen);
            }else{
                setOpen(true);
            }
        }else{
            setOpen(true);
        }
    }
    return(
        <MenuSectionWrapper>
            <div className="head">
                <h3>{title}</h3>
                <div className="button" onClick={() => handle()}>
                    <FiChevronDown/>
                </div>
            </div>
            {
                isOpen &&
                <AnimatePresence>
                    <motion.ul
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        {menu.map(({path,title}:IntMenuItem,key:number) =>
                            <MenuItem
                                path={path}
                                title={title}
                                key={key}
                            />
                        )}
                    </motion.ul>
                </AnimatePresence>
            }
        </MenuSectionWrapper>
    )
}
export default MenuSection;