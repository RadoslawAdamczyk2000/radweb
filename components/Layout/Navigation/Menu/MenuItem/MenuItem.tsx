import Link from "next/link"
import {FaAngleDown} from 'react-icons/fa';
import { IntMenuItem } from "./interface";
import { MenuItemExpand } from "./styles";
const MenuItem = ({handle,isExpand=false,isMain=false,path,title}:IntMenuItem) => {
    return(
        <>
            {
                isExpand &&
                <MenuItemExpand>
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                    <div onClick={handle}>
                        <FaAngleDown/>
                    </div>
                </MenuItemExpand> 
            }
            {
                isMain &&
                <li className="main">
                    <div>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </div> 
                </li>
            }
        </>
    )
}
export default MenuItem;