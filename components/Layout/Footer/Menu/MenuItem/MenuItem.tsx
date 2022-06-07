import Link from "next/link"
import { IntMenuItem } from "./interface";
const MenuItem = ({isBottom,path,title}:IntMenuItem) => {
    return(
        <li className={`${isBottom && 'bottom'}`}>
            <Link href={path}>
                <a>
                    {title}
                </a>
            </Link>
        </li>
    )
}
export default MenuItem;