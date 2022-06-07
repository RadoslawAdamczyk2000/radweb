import { IntMenuItem } from "../MenuItem/interface"
import MenuItem from "../MenuItem/MenuItem"
import { IntMenuSection } from "./interface";
import {FiChevronDown} from "react-icons/fi";
import { useState } from "react";
const MenuSection = ({menu,title}:IntMenuSection) => {
    const [isOpen,setOpen] = useState(true);
    const handle = () => {
        setOpen(!isOpen);
    }
    return(
        <li>
            <div>
                <h3>{title}</h3>
                <div className="button" onClick={() => handle()}>
                    <FiChevronDown/>
                </div>
            </div>
            {
                isOpen &&
                <ul>
                    {menu.map(({path,title}:IntMenuItem,key:number) =>
                        <MenuItem
                            path={path}
                            title={title}
                            key={key}
                        />
                    )}
                </ul>
            }
        </li>
    )
}
export default MenuSection;