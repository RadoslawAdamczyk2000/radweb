import Link from "next/link";
import {FiChevronDown} from "react-icons/fi";
const Item = ({isExpand,isMain,isSubmenu,path,title}) => {
    return(
        <>
            {
                isExpand &&
                <div>
                    <Link href={path}>
                        <a rel='index follow'>
                            {title}
                        </a>
                    </Link>
                    <div className="button">
                        <FiChevronDown/>
                    </div>
                </div>
            }
            {
                isMain &&
                <li className="main">
                    <Link href={path}>
                        <a rel='index follow'>
                            {title}
                        </a>
                    </Link>
                    <div className="button">
                        <FiChevronDown/>
                    </div>
                </li>
            }
            {
                isSubmenu &&
                <li className="submenu">
                    <Link href={path}>
                        <a rel='index follow'>
                            {title}
                        </a>
                    </Link>
                    <div className="button">
                        <FiChevronDown/>
                    </div>
                </li>
            }
        </>
    )
}
export default Item;