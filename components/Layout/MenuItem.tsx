import Link from "next/link";
import { IntMenuItem } from "../../types/interface";
import {VscArrowSmallDown} from 'react-icons/vsc';
const MenuItem = ({isExpand,isMain,isSubmenu,path,title}:IntMenuItem) => {
    return(
        <>
            {
                isMain &&
                (
                    isExpand ?
                    <div className='expand'>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                        <div className='button'>
                            <VscArrowSmallDown/>
                        </div>
                    </div> :
                    <li className='main'>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </li>
                )
            }
            {
                isSubmenu &&
                <li className='submenu'>
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                </li>
            }
        </>
    )
}
export default MenuItem;