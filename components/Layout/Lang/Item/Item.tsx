import Link from "next/link"
import { IntItem } from "./interface";
import { ItemWrapper } from "./styles";
const Item = ({path,title}:IntItem) => {
    return(
        <ItemWrapper>
            <Link href='/' locale={path}>
                <a>
                    {title}
                </a>
            </Link>
        </ItemWrapper>
    )
}
export default Item;