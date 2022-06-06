import Link from "next/link"
import {FaAngleDown} from 'react-icons/fa';
import { IntMenuItem } from "./interface";
import { MenuItemExpand, MenuItemMain, MenuItemSubmenu } from "./styles";
const MenuItem = ({handle,handleExpand,isExpand=false,isMain=false,isSubmenu,path,title}:IntMenuItem) => {
    return(
        <>
            {
                isExpand &&
                <MenuItemExpand className="expand">
                    <Link href={path}>
                        <a onClick={handle}>
                            {title}
                        </a>
                    </Link>
                    <div onClick={handleExpand}>
                        <FaAngleDown/>
                    </div>
                </MenuItemExpand> 
            }
            {
                isMain &&
                <MenuItemMain className="main">
                    <div>
                        <Link href={path}>
                            <a onClick={handle}>
                                {title}
                            </a>
                        </Link>
                    </div> 
                </MenuItemMain>
            }
            {
                isSubmenu &&
                <MenuItemSubmenu className="submenu">
                    <div>
                        <Link href={path}>
                            <a onClick={handle}>
                                {title}
                            </a>
                        </Link>
                    </div> 
                </MenuItemSubmenu>
            }
        </>
    )
}
export default MenuItem;