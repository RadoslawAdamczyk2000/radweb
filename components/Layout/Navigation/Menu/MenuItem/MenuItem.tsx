import Link from "next/link"
import {FaAngleDown} from 'react-icons/fa';
import { IntMenuItem } from "./interface";
const MenuItem = ({handle,isExpand=false,isMain=false,path,title}:IntMenuItem) => {
    return(
        <>
            {
                isExpand &&
                <div>
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                    <span onClick={handle}>
                        <FaAngleDown/>
                    </span>
                </div> 
            }
            {
                isMain &&
                <li>
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