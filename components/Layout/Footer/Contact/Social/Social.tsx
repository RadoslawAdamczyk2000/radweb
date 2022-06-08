import Link from "next/link"
import { IntSocial } from "./interface";
const Social = ({icon,path,title}:IntSocial) => {
    return(
        <li title={title}>
            <Link href={path}>
                <a title={title}>
                    {icon}
                </a>
            </Link>
        </li>
    )
}
export default Social;