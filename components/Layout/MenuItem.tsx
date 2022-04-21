import Link from "next/link";
import { IntMenuItem } from "../../types/interface";
import {VscArrowSmallDown} from 'react-icons/vsc';
import { MenuItemWrapper } from "./styles";
const MenuItem = ({isExpand,isMain,isSubmenu,path,title}:IntMenuItem) => {
    return(
        <>
            {
                isMain &&
                (
                    isExpand ?
                    <MenuItemWrapper className='expand' as='div'>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                        <div className='button'>
                            <VscArrowSmallDown/>
                        </div>
                    </MenuItemWrapper> :
                    <MenuItemWrapper className='main'>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </MenuItemWrapper>
                )
            }
            {
                isSubmenu &&
                <MenuItemWrapper className='submenu'>
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                </MenuItemWrapper>
            }
        </>
    )
}
export default MenuItem;