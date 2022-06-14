import Link from "next/link";
import {FiChevronDown} from "react-icons/fi";
import { IntItem } from "./interface";
import { Expand, Main, Submenu } from "./styles";
const Item = ({handle,handleExpand,isExpand,isMain,isSubmenu,path,title}:IntItem) => {
    return(
        <>
            {
                isExpand &&
                <Expand>
                    <Link href={path}>
                        <a rel='index follow' onClick={handle}>
                            {title}
                        </a>
                    </Link>
                    <div className="button" onClick={handleExpand} tabIndex={1}>
                        <FiChevronDown/>
                    </div>
                </Expand>
            }
            {
                isMain &&
                <Main>
                    <Link href={path}>
                        <a rel='index follow' onClick={handle}>
                            {title}
                        </a>
                    </Link>
                </Main>
            }
            {
                isSubmenu &&
                <Submenu>
                    <Link href={path}>
                        <a rel='index follow' onClick={handle}>
                            {title}
                        </a>
                    </Link>
                </Submenu>
            }
        </>
    )
}
export default Item;