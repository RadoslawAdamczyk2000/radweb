import Link from "next/link"
import { useContext } from "react";
import { LangContext } from "../../../../context/LangContext";
import { IntItem } from "./interface";
import { ItemWrapper } from "./styles";
const Item = ({path,title}:IntItem) => {
    const {close} = useContext(LangContext);
    return(
        <ItemWrapper>
            <Link href='/' locale={path}>
                <a onClick={() => close()}>
                    {title}
                </a>
            </Link>
        </ItemWrapper>
    )
}
export default Item;