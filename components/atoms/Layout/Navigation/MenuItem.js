import Link from "next/link"
import { useEffect, useState } from "react";
import {RiArrowDownSLine} from 'react-icons/ri';
import { MenuItemWrapper } from "./styles/MenuItemWrapper";
// interface i {
//     submenuAction ?: any,
//     isExpand : boolean,
//     isMain : boolean,
//     isSubmenu : boolean,
//     path : string,
//     title : string
// }
const MenuItem = ({submenuAction,isExpand,isMain,isSubmenu,path,title}) => {
    const [isScroll,setScroll] = useState(false);
    const currentPosY = () => {
        window?.addEventListener('scroll', () => {
            if(window?.scrollY){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    }
    useEffect(() => {
        currentPosY();
    })
    return(
        <>
            {
                isExpand &&
                <MenuItemWrapper as='div' expand scrolled={isScroll}>  
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                    <button onClick={submenuAction}>
                        <RiArrowDownSLine/>
                    </button>
                </MenuItemWrapper>
            }
            {
                isMain &&
                <MenuItemWrapper main scrolled={isScroll}>
                    <Link href={path}>
                        <a>
                            {title}
                        </a>
                    </Link>
                </MenuItemWrapper>
            }
            {
                isSubmenu &&
                <MenuItemWrapper submenu>
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