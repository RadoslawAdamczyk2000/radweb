import Link from "next/link"
import { IntMenuItem } from "./interface";
import { MenuItemWrapper } from "./styles";
const MenuItem = ({path,title}:IntMenuItem) => {
    return(
        <MenuItemWrapper>
            <Link href={path}>
                <a>
                    {title}
                </a>
            </Link>
        </MenuItemWrapper>
    )
}
export default MenuItem;