import Link from "next/link";
import {VscArrowSmallDown} from 'react-icons/vsc';
import { IntMenuItem } from "../../../types/interface";
import { MenuItemExpandWrapper, MenuItemMainWrapper, MenuItemSubmenuWrapper } from "./styles";
const MenuItem = ({isExpand=false,isMain=false,isSubmenu=false,handle,handleExpand,path,title}:IntMenuItem) => {
    return(
        <>
            {
                isExpand &&
                <MenuItemExpandWrapper>
                    <Link href={path}>
                        <a onClick={handle}>
                            <p>
                                {title}
                            </p>
                        </a>
                    </Link>
                    <div className="button" onClick={handleExpand}>
                        <VscArrowSmallDown/>
                    </div>
                </MenuItemExpandWrapper>
            }
            {
                isMain &&
                <MenuItemMainWrapper>
                    <Link href={path}>
                        <a onClick={handle}>
                            <p>
                                {title}
                            </p>
                        </a>
                    </Link>
                </MenuItemMainWrapper>
            }
            {
                isSubmenu &&
                <MenuItemSubmenuWrapper>
                    <Link href={path}>
                        <a onClick={handle}>
                            {title}
                        </a>
                    </Link>
                </MenuItemSubmenuWrapper>
            }            
        </>
    )
}
export default MenuItem;