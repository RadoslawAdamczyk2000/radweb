import Link from "next/link"
import { IntItem } from "./interface";
const Item = ({path,title}:IntItem) => {
    return(
        <li>
            <Link href={path}>
                <a>
                    {title}
                </a>
            </Link>
        </li>
    )
}
export default Item;