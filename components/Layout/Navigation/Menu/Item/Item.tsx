import Link from "next/link";
import {FiChevronDown} from "react-icons/fi";
import { IntItem } from "./interface";
const Item = ({handle,handleExpand,isExpand,isMain,isSubmenu,path,title}:IntItem) => {
    return(
        <>
            {
                isExpand &&
                <div>
                    <Link href={path}>
                        <a rel='index follow' onClick={handle}>
                            {title}
                        </a>
                    </Link>
                    <div className="button" onClick={handleExpand}>
                        <FiChevronDown/>
                    </div>
                </div>
            }
            {
                isMain &&
                <li className="main">
                    <Link href={path}>
                        <a rel='index follow' onClick={handle}>
                            {title}
                        </a>
                    </Link>
                </li>
            }
            {
                isSubmenu &&
                <li className="submenu">
                    <Link href={path}>
                        <a rel='index follow' onClick={handle}>
                            {title}
                        </a>
                    </Link>
                </li>
            }
        </>
    )
}
export default Item;